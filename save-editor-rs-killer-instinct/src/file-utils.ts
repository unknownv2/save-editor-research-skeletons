import { BinaryStream, MemoryStream } from 'libvantage';
import 'file-saver';

export function saveFileAs(buffer: Buffer, fileName: string = 'savedata', type?: string): void {		
    const array = new Array();
    array.push(buffer);
    saveAs(new Blob(array, {type: type || "binary"}), fileName);
}

export function writeFileToStream(reader: MSBaseReader, stream: BinaryStream): void {
    if(reader.result && reader.result.byteLength !== 0) {
        const fileBuffer = Buffer.from(reader.result);
        stream.baseStream.position = 0;
        if(stream.baseStream as MemoryStream) {
            (stream.baseStream as MemoryStream).resize(fileBuffer.length);
        }
        stream.writeBytes(fileBuffer);
    }		
}
export function injectFileToStream(file: File, stream: BinaryStream): void {
    const reader = new FileReader();			
    reader.onload = ()=> writeFileToStream(reader, stream);
    reader.readAsArrayBuffer(file);
}