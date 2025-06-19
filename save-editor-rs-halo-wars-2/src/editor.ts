import { HW2SaveStream } from './savedata';
import {saveFileAs, injectFileToStream} from './file-utils';
import {observable} from 'aurelia-framework';

export class Editor {
    private buffer: Buffer;

	stream: HW2SaveStream;
	@observable	selectedFiles: File[];

    public load(buffer: Buffer) {
        this.buffer = buffer;

		this.stream = HW2SaveStream.create(buffer); 
    }

    public save(): Buffer {
    
        return this.stream.getSaveData();
	}
	public writeSaveToDisk() {
		saveFileAs(this.stream.getBuffer());
	}

	public selectedFilesChanged(): void {
		if(this.selectedFiles) {	
			injectFileToStream(this.selectedFiles[0], this.stream);			
		}
	}	
}