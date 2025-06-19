
import { getRandom, SaveStream, DeflateStream, Aes, AesMode, CryptoStreamMode, CryptoStream, StreamReader, MemoryStream, CompressionMode  } from 'libvantage';

export class KISaveStream extends SaveStream {
    constructor(private buffer: Buffer, private key: Buffer, private iv?: Buffer) {
        super(new MemoryStream(buffer));
    }

    static create(buffer: Buffer, xuid: string) {
        const header = buffer.toString("utf8", 0, 6);
        if (header !== 'NEWSAV') {
            throw new Error('Invalid magic.');
        }
        const iv = buffer.slice(0x08, 0x18);
        const key = KISaveStream.createKey(xuid.padStart(16, '0'));
        
        const encData = buffer.slice(0x18, buffer.length);
        // decrypt data
        const cryptStream = new CryptoStream(new MemoryStream(encData), Aes.createDecryptor(AesMode.CBC, key, iv, false), CryptoStreamMode.Read); 
        const decrypted = new StreamReader(cryptStream).readToEnd();
        // decompress data
        const ms = new MemoryStream();
        const deflateStream = new DeflateStream(new MemoryStream(decrypted), CompressionMode.Decompress);
        deflateStream.copyTo(ms);
        deflateStream.close();

        return new KISaveStream(ms.getBuffer(), key, iv);
    }
    
    getSaveData(): Buffer {
        const ms = new MemoryStream();
        const deflateStream = new DeflateStream(new MemoryStream(super.getBuffer()), CompressionMode.Compress, { level: 3});
        deflateStream.copyTo(ms);
        deflateStream.close();

        const iv = this.iv || getRandom(0x10);
        const saveData = ms.getBuffer();
        const encryptedStream = MemoryStream.alloc(saveData.length);

        const cryptStream = new CryptoStream(encryptedStream, Aes.createEncryptor(AesMode.CBC, this.key, iv), CryptoStreamMode.Write); 
        cryptStream.write(saveData, 0, saveData.length);
        cryptStream.close();
        
        return Buffer.concat([Buffer.from('NEWSAV\0\0'), iv, encryptedStream.getBuffer()]);
    }
    // salt to create AES key
    public static createKey(xuid: string):Buffer {
        const xid = Buffer.from(xuid, 'hex');
        const array = [0x8e,0xe6, 0x3f, 0xc6, 0x01, 0x68, 0x96, 0xde, 0x40, 0xc2, 0x69, 0xa8, 0x4c, 0x36, 0x72, 0xc1];

        const newArray = new Buffer(0x10);
        for(let i = 0; i < newArray.length;) {
            for(let x = xid.length - 1; x >= 0; x--,i++) {
                newArray[i] = array[i] ^ xid[x];
            }
        }
        return newArray;
    }    
}