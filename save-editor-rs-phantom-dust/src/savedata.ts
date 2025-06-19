
import { getRandom, SaveStream, MemoryStream, CryptoStream, Aes, AesMode, CryptoStreamMode, StreamReader } from 'libvantage';

export class PDSaveStream extends SaveStream {
    static key: string = "----------\nUser '%ws' pushing ou";
    constructor(private buffer: Buffer, private header: Buffer, private iv?: Buffer) {
        super(new MemoryStream(buffer));
    }

    static create(buffer: Buffer) {
        // parse encrypted data
        const header = buffer.slice(0x00, 0x18);
        const iv = buffer.slice(0x18, 0x24);
        const tag = buffer.slice(0x24, 0x34);
        
        const encData = buffer.slice(0x40, buffer.length);
        const cryptStream = new CryptoStream(new MemoryStream(encData), Aes.createDecryptor(AesMode.GMC, PDSaveStream.key, iv, false, tag), CryptoStreamMode.Read); 
        // decrypt data  
        const decrypted = new StreamReader(cryptStream).readToEnd();

        return new PDSaveStream(decrypted, header, iv);
    }
    
    getSaveData(): Buffer {
        const iv = this.iv || getRandom(0x0C);
        const saveData = super.getBuffer(); 
        const ms = MemoryStream.alloc(saveData.length);
 
        const cryptStream = new CryptoStream(ms, Aes.createEncryptor(AesMode.GMC, PDSaveStream.key, iv, false), CryptoStreamMode.Write); 
        cryptStream.write(saveData, 0, saveData.length);
        cryptStream.close();

        const encrypted = ms.getBuffer();        
  
        return Buffer.concat([this.header, iv, encrypted.slice(encrypted.length - 0x10, encrypted.length), Buffer.alloc(0xC), encrypted.slice(0, encrypted.length - 0x10)]);
    }
}
