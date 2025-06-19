import { KISaveStream } from './savedata';
import {observable} from 'aurelia-framework';
import {saveFileAs, injectFileToStream} from './file-utils';

export class Editor {
	private buffer: Buffer;
	stream: KISaveStream;
	defaultXuid: string = '0009000000000000';
	xuid: string = this.defaultXuid;
	@observable	selectedFiles: File[];

    public load(buffer: Buffer) {
        this.buffer = buffer;
    }
	isDefaultXuid() {
		return this.xuid === this.defaultXuid;
	}
    public save(): Buffer {   
        return this.stream.getSaveData();
	}

	public writeSaveToDisk() {
		if(!this.isDefaultXuid()) {
			if(!this.stream) {
				this.stream = KISaveStream.create(this.buffer, this.xuid); 
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
}