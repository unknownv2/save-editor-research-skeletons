
import { DeflateStream, BinaryStream, MemoryStream, CompressionMode, SaveStream } from 'libvantage';

export class HW2SaveStream extends SaveStream {

    constructor(private buffer: Buffer) {
        super(new MemoryStream(buffer));
    }

    public static create(buffer: Buffer): HW2SaveStream {
        const ms = new MemoryStream();
        const deflateStream = new DeflateStream(new MemoryStream(buffer), CompressionMode.Decompress);
        deflateStream.copyTo(ms);
        deflateStream.close();
        return new HW2SaveStream(ms.getBuffer());
    }

    getSaveData(): Buffer {
        const ms = new MemoryStream();
        const deflateStream = new DeflateStream(new MemoryStream(super.getBuffer()), CompressionMode.Compress);
        deflateStream.copyTo(ms);
        deflateStream.close();
        return ms.getBuffer();
    }
}