import { RotBPSaveStream } from './savedata';
import {saveFileAs, injectFileToStream} from './file-utils';
import {observable} from 'aurelia-framework';

export class Editor {
    private buffer: Buffer;

	stream: RotBPSaveStream;
	@observable	selectedFiles: File[];

    public load(buffer: Buffer) {
        this.buffer = buffer;

		this.stream = RotBPSaveStream.create(buffer); 
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