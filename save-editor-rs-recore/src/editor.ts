import { RecoreSaveStream } from './savedata';
import {saveFileAs, injectFileToStream} from './file-utils';
import {observable} from 'aurelia-framework';

export class Editor {
    private buffer: Buffer;

	stream: RecoreSaveStream;
	@observable	selectedFiles: File[];
	defaultXuid: string = '0';
	
	xuid: string = this.defaultXuid;
	
    public load(buffer: Buffer) {
        this.buffer = buffer;
    }

    public save(): Buffer {
    
        return this.stream.getSaveData();
	}
	
	public writeSaveToDisk() {
		if(!this.isDefaultXuid()) {
			if(!this.stream) {
				this.stream = RecoreSaveStream.create(this.buffer, this.xuid); 
			}		
			saveFileAs(this.stream.getBuffer());
		}
	}

	public selectedFilesChanged(): void {
		if(!this.isDefaultXuid()) {
			if(this.selectedFiles) {	
				injectFileToStream(this.selectedFiles[0], this.stream);			
			}
		}
	}
	private isDefaultXuid() {
		return this.xuid === this.defaultXuid;
	}	
}