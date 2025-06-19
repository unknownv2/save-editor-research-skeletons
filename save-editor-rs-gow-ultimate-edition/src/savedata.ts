
import {BinaryStream, MemoryStream, privateKeySign, verifyRsa1Signature, SaveStream, DeflateStream, CompressionMode, Endianness } from 'libvantage';

export class GoWUltimateStream extends SaveStream {

    private static rsaSigningKey: string = 
    '-----BEGIN RSA PRIVATE KEY-----\n' +
    'MIICXQIBAAKBgQD4/IKyJiezUtPUsoP+gpkAFhrTtr1gTybrI/XEIVbwBjDSwIU4\n' +
    'BrTS/+JvcPIK+6kBJughKMWMXQ/DlffzVXr2xVwWJ9/QadPiJCAAwtDTCTqhNW3z\n' +
    'oHmFJq1ZCVRd93fiqWx0/VeruwU4K2PA1QfCmnAOOXYp//QHPob2O8n5WQIDAQAB\n' +
    'AoGAFvdLot0MGmlQarUQocAwFqbzUIXxj9mdMGE/wRiGKVuY00e4wgM0WKYLn9Xe\n' +
    'LY8q9pU9IhndpuXKl3LUzRgcYEoerXhK3gDiCycoMV6o4b2hMzeV8okg5MjZ5AvR\n' +
    '7PAPFugwbvKdKhZ9Jh6W/W4afQ3V4GbFa3WGu3S0IRAja4ECQQD9jAO0gKg4fk3K\n' +
    'ckAOrcB7FRacFfQedccMo6UiFMt3jstJGSxGrQ+wR30YZGQolVa9elikKxn9A5P8\n' +
    'ShHmP2/xAkEA+2UzUJa/r5MnSwLk9e/QLDIgJH7pZgDzg8E/dKcrFXx3qox95uWy\n' +
    '96yNurzJ2HN5MHmd1xx4BeVFVXtd3VWH6QJAEjHdBjQBXmR58qA2Rpdja7G8uKC+\n' +
    'rvzmttp7fDGf1EmT/v/mdH/w00aeDIUPxvXIjrpb6BQLvmNmWEF8fVhqEQJBAMjg\n' +
    'SYuYmVxi+h+/FVLLKA1YlER1QGxoUCy0as78kLmfdkNJ9YRdgI7VS36uQZ76ThkE\n' +
    '5LGxJtqXI7q1VAB6ypkCQQDfHe9U+DxND5Z+aJLkotx+rmKbSHX48TLDZUd1B2Up\n' +
    'EpzJrL72OVGHgpng6qPWxOTPlAHBhObb+0QJOaOxKw7C\n' +
    '-----END RSA PRIVATE KEY-----';

    private static rsaPublicKey: string = 
    '-----BEGIN RSA PUBLIC KEY-----\n' +
    'MIGJAoGBAPj8grImJ7NS09Syg/6CmQAWGtO2vWBPJusj9cQhVvAGMNLAhTgGtNL/\n' +
    '4m9w8gr7qQEm6CEoxYxdD8OV9/NVevbFXBYn39Bp0+IkIADC0NMJOqE1bfOgeYUm\n' +
    'rVkJVF33d+KpbHT9V6u7BTgrY8DVB8KacA45din/9Ac+hvY7yflZAgMBAAE=\n' +
    '-----END RSA PUBLIC KEY-----';

    constructor(private buffer: Buffer, endianess:Endianness = Endianness.Big) {
        super(new MemoryStream(buffer));
    }

    static create(buffer: Buffer): GoWUltimateStream {
        const signature = buffer.slice(0, 0x80);

        const signedData = buffer.slice(0x80, buffer.length);
        if(!verifyRsa1Signature(signature, signedData, GoWUltimateStream.rsaPublicKey)) {
            throw Error("Invalid save data");
        }
        const saveData = signedData.slice(0x4, signedData.length);
        const ms = new MemoryStream();
        const deflateStream = new DeflateStream(new MemoryStream(saveData), CompressionMode.Decompress);
        deflateStream.copyTo(ms);
        deflateStream.close(); 

        return new GoWUltimateStream(ms.getBuffer());
    }

    getSaveData() {
        const saveData = super.getBuffer();
     
        const ms = new MemoryStream();
        const deflateStream = new DeflateStream(new MemoryStream(super.getBuffer()), CompressionMode.Compress, {windowBits:12, level: 1});
        deflateStream.copyTo(ms);
        deflateStream.close();

        const outStream = new BinaryStream(new MemoryStream(), Endianness.Big);
        outStream.writeUInt32(saveData.length);
        outStream.writeBytes(ms.getBuffer());

        const saveBuffer = outStream.getBuffer();
        const signature = privateKeySign(saveBuffer, GoWUltimateStream.rsaSigningKey);        

        return Buffer.concat([signature, saveBuffer]);
    }
}