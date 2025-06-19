import { BinaryStream, AesMode, CryptoStreamMode, CryptoStream, Aes, StreamReader, sha256, MemoryStream, SaveStream } from 'libvantage';

export class RotBPSaveStream extends SaveStream {
    private static isUWP: boolean = true;

    private static key: Buffer = Buffer.from('C458429A015D51ED12616515526EE3004BB3DAD22345547D94146D2E3DC172EB', 'hex');

    constructor(private buffer: Buffer) {
        super(new MemoryStream(buffer));
    }

    static create(buffer: Buffer) {
        // decrypt data
        const cryptStream = new CryptoStream(new MemoryStream(buffer), Aes.createDecryptor(AesMode.CBC, RotBPSaveStream.key, Buffer.alloc(0x10), false), CryptoStreamMode.Read); 
        const decrypted = new StreamReader(cryptStream).readToEnd();   
        // verify data 
        const saveData = decrypted.slice(0, decrypted.length - 0x20);
        const storedHash = decrypted.slice(decrypted.length - 0x20, decrypted.length);        
        const saveHash = sha256(saveData);
        if(!storedHash.equals(saveHash)) {
            throw new Error('invalid save hash');
        }
        return new RotBPSaveStream(saveData);
    }
    
    getSaveData(): Buffer {
        const saveData = super.getBuffer();
        const saveHash = sha256(saveData);
        const ms = MemoryStream.alloc(saveData.length + saveHash.length);

        const cryptStream = new CryptoStream(ms, Aes.createEncryptor(AesMode.CBC, RotBPSaveStream.key,  Buffer.alloc(0x10), false), CryptoStreamMode.Write); 
        cryptStream.write(saveData, 0, saveData.length);
        cryptStream.write(saveHash, 0, saveHash.length);
        
        cryptStream.close();

        return ms.getBuffer();        
    }
}