import { Stream, SaveStream, MemoryStream, DeflateStream, CompressionMode } from 'libvantage';

export class AstroSaveStream extends SaveStream {

    constructor(private buffer: Buffer, private header: Buffer) {
        super(new MemoryStream(buffer));
    }

    static create(buffer: Buffer): AstroSaveStream {
      
        const header = buffer.slice(0, 0x10);
        const compressed = buffer.slice(0x10, buffer.length);

        const ms = new MemoryStream();
        const deflateStream = new DeflateStream(new MemoryStream(compressed), CompressionMode.Decompress);
        deflateStream.copyTo(ms);
        deflateStream.close();
        return new AstroSaveStream(ms.getBuffer(), header);
    }
    getSaveData(): Buffer {

        const ms = new MemoryStream();
        const deflateStream = new DeflateStream(new MemoryStream(super.getBuffer()), CompressionMode.Compress, { windowBits: 12});
        deflateStream.copyTo(ms);
        deflateStream.close();
        return Buffer.concat([this.header, ms.getBuffer()]);
    }   
}