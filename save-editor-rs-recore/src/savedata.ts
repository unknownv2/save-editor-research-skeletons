
import {BinaryStream, MemoryStream, Endianness, CipherType, CryptoStream, StreamReader, CipherFactory, CryptoStreamMode, SaveStream} from 'libvantage';

export class RecoreSaveStream extends SaveStream {

    static scid: string = '31ba0100-1d30-40c4-9816-';
    static tid: string = '85243142';

    constructor(private buffer: Buffer, private key: Buffer) {
        super(new MemoryStream(buffer));
    }

    static create(buffer: Buffer, decimaXuid: string): RecoreSaveStream {
        // decrypt data
        const key = RecoreSaveStream.deriveKey(RecoreSaveStream.scid, Buffer.from(decimaXuid));
        const iv = Buffer.from(RecoreSaveStream.tid); 
        const cryptStream = new CryptoStream(new MemoryStream(buffer), CipherFactory.createDecryptor(CipherType.TripleDES, key, iv, false), CryptoStreamMode.Read); 

        const decrypted = new StreamReader(cryptStream).readToEnd();    
        return new RecoreSaveStream(decrypted, key);
    }

    getSaveData(): Buffer {
        const saveData = super.getBuffer();
        const ms = MemoryStream.alloc(saveData.length);

        const cryptStream = new CryptoStream(ms, CipherFactory.createEncryptor(CipherType.TripleDES, this.key, Buffer.from(RecoreSaveStream.tid), false), CryptoStreamMode.Write); 
        cryptStream.write(saveData, 0, saveData.length);
        
        cryptStream.close();

        return ms.getBuffer();   
    }

    static deriveKey(base: string, auth: Buffer): Buffer {
        const key = new Buffer(base);
        for(let x = 0; x < auth.length; x++) {
            key[x] ^= auth[x];
        }
        return key;
    }
}