
import { Stream, BinaryStream,  StreamReader, SaveStream, CryptoStreamMode, AesMode, CryptoStream, MemoryStream, Aes } from 'libvantage';

export class SoWSaveStream extends SaveStream {

    private static strKey: string = 'a0@290171@ko394Cd_?dVta198iOjz$v';
    private static iv: string = 'vdx$fn4@tdpzeyn2';

    constructor(private buffer: Buffer, private key: Buffer, private salt: Buffer) {
        super(new MemoryStream(buffer));
    }
    
    static create(buffer: Buffer, xuid: string) {
        const io = new BinaryStream(new MemoryStream(buffer));
        const magic = io.readString("utf8", 4);
        if(magic !== 'SOM3'){
            throw new Error("invalid save file");
        }
        const salt = io.readBytes(0x4);
        const paddedLength = io.readUInt32();
        const realLength = io.readUInt32();
        const encData = io.readBytes(paddedLength);

        // create save aes key
        const key = SoWSaveStream.createKey(SoWSaveStream.strKey, salt, Buffer.from(xuid, 'hex'));
        const cryptStream = new CryptoStream(new MemoryStream(encData), Aes.createDecryptor(AesMode.CBC, key, SoWSaveStream.iv), CryptoStreamMode.Read); 
        // decrypt data  
        const decrypted = new StreamReader(cryptStream).readToEnd();   
        return new SoWSaveStream(decrypted, key, salt);
    }
    
    getSaveData(): Buffer {
        // encrypt data and attach the header to create the final save data
        const saveData = super.getBuffer();
        const ms = MemoryStream.alloc(saveData.length);

        const cryptStream = new CryptoStream(ms, Aes.createEncryptor(AesMode.CBC, this.key, SoWSaveStream.iv), CryptoStreamMode.Write); 
        cryptStream.write(saveData, 0, saveData.length);
        cryptStream.close();

        const encrypted = ms.getBuffer();
        // create header
        const headerStream = new BinaryStream(new MemoryStream());
        headerStream.writeString('SOM3');
        headerStream.writeBytes(this.salt);
        headerStream.writeUInt32(encrypted.length);
        headerStream.writeUInt32(saveData.length);

        return Buffer.concat([headerStream.getBuffer(), encrypted]);
    }

    public static createKey(stringKey: string, salt: Buffer, auth: Buffer): Buffer {
        const key = Buffer.from(stringKey);
        // salt key with random value
        key[0x1A] = salt[0];
        key[0xB] = salt[1];
        key[0x12] = salt[2];
        key[0x11] = salt[3];
        // salt key with auth data
        key[0xA] = auth[7];
        key[0x1E] = auth[6];
        key[0x16] = auth[5];        
        key[0x2] = auth[4];
        return key;
    }    
}