define('editor',["require", "exports", "tslib", "./savedata", "aurelia-framework", "./file-utils"], function (require, exports, tslib_1, savedata_1, aurelia_framework_1, file_utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Editor = (function () {
        function Editor() {
            this.defaultXuid = '0009000000000000';
            this.xuid = this.defaultXuid;
        }
        Editor.prototype.load = function (buffer) {
            this.buffer = buffer;
        };
        Editor.prototype.isDefaultXuid = function () {
            return this.xuid === this.defaultXuid;
        };
        Editor.prototype.save = function () {
            return this.stream.getSaveData();
        };
        Editor.prototype.writeSaveToDisk = function () {
            if (!this.isDefaultXuid()) {
                if (!this.stream) {
                    this.stream = savedata_1.KISaveStream.create(this.buffer, this.xuid);
                }
                file_utils_1.saveFileAs(this.stream.getBuffer());
            }
        };
        Editor.prototype.selectedFilesChanged = function () {
            if (!this.isDefaultXuid()) {
                if (this.selectedFiles) {
                    file_utils_1.injectFileToStream(this.selectedFiles[0], this.stream);
                }
            }
        };
        tslib_1.__decorate([
            aurelia_framework_1.observable,
            tslib_1.__metadata("design:type", Array)
        ], Editor.prototype, "selectedFiles", void 0);
        return Editor;
    }());
    exports.Editor = Editor;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1lBR0MsZ0JBQVcsR0FBVyxrQkFBa0IsQ0FBQztZQUN6QyxTQUFJLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQTZCakMsQ0FBQztRQTFCVSxxQkFBSSxHQUFYLFVBQVksTUFBYztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBQ0osOEJBQWEsR0FBYjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdkMsQ0FBQztRQUNTLHFCQUFJLEdBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBRU0sZ0NBQWUsR0FBdEI7WUFDQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsdUJBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzNELENBQUM7Z0JBQ0QsdUJBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUM7WUFDckMsQ0FBQztRQUNGLENBQUM7UUFFTSxxQ0FBb0IsR0FBM0I7WUFDQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUN2QiwrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDeEQsQ0FBQztZQUNGLENBQUM7UUFDRixDQUFDO1FBM0JXO1lBQVgsOEJBQVU7O3FEQUF1QjtRQTRCbkMsYUFBQztLQWpDRCxBQWlDQyxJQUFBO0lBakNZLHdCQUFNIiwiZmlsZSI6ImVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEtJU2F2ZVN0cmVhbSB9IGZyb20gJy4vc2F2ZWRhdGEnO1xyXG5pbXBvcnQge29ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHtzYXZlRmlsZUFzLCBpbmplY3RGaWxlVG9TdHJlYW19IGZyb20gJy4vZmlsZS11dGlscyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRWRpdG9yIHtcclxuXHRwcml2YXRlIGJ1ZmZlcjogQnVmZmVyO1xyXG5cdHN0cmVhbTogS0lTYXZlU3RyZWFtO1xyXG5cdGRlZmF1bHRYdWlkOiBzdHJpbmcgPSAnMDAwOTAwMDAwMDAwMDAwMCc7XHJcblx0eHVpZDogc3RyaW5nID0gdGhpcy5kZWZhdWx0WHVpZDtcclxuXHRAb2JzZXJ2YWJsZVx0c2VsZWN0ZWRGaWxlczogRmlsZVtdO1xyXG5cclxuICAgIHB1YmxpYyBsb2FkKGJ1ZmZlcjogQnVmZmVyKSB7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XHJcbiAgICB9XHJcblx0aXNEZWZhdWx0WHVpZCgpIHtcclxuXHRcdHJldHVybiB0aGlzLnh1aWQgPT09IHRoaXMuZGVmYXVsdFh1aWQ7XHJcblx0fVxyXG4gICAgcHVibGljIHNhdmUoKTogQnVmZmVyIHsgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0uZ2V0U2F2ZURhdGEoKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyB3cml0ZVNhdmVUb0Rpc2soKSB7XHJcblx0XHRpZighdGhpcy5pc0RlZmF1bHRYdWlkKCkpIHtcclxuXHRcdFx0aWYoIXRoaXMuc3RyZWFtKSB7XHJcblx0XHRcdFx0dGhpcy5zdHJlYW0gPSBLSVNhdmVTdHJlYW0uY3JlYXRlKHRoaXMuYnVmZmVyLCB0aGlzLnh1aWQpOyBcclxuXHRcdFx0fVx0XHRcclxuXHRcdFx0c2F2ZUZpbGVBcyh0aGlzLnN0cmVhbS5nZXRCdWZmZXIoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0ZWRGaWxlc0NoYW5nZWQoKTogdm9pZCB7XHJcblx0XHRpZighdGhpcy5pc0RlZmF1bHRYdWlkKCkpIHtcclxuXHRcdFx0aWYodGhpcy5zZWxlY3RlZEZpbGVzKSB7XHRcclxuXHRcdFx0XHRpbmplY3RGaWxlVG9TdHJlYW0odGhpcy5zZWxlY3RlZEZpbGVzWzBdLCB0aGlzLnN0cmVhbSk7XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: false,
        testing: false
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudmlyb25tZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUFBLGtCQUFlO1FBQ2IsS0FBSyxFQUFFLEtBQUs7UUFDWixPQUFPLEVBQUUsS0FBSztLQUNmLENBQUMiLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCB7XHJcbiAgZGVidWc6IGZhbHNlLFxyXG4gIHRlc3Rpbmc6IGZhbHNlXHJcbn07XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('file-utils',["require", "exports", "file-saver"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function saveFileAs(buffer, fileName, type) {
        if (fileName === void 0) { fileName = 'savedata'; }
        var array = new Array();
        array.push(buffer);
        saveAs(new Blob(array, { type: type || "binary" }), fileName);
    }
    exports.saveFileAs = saveFileAs;
    function writeFileToStream(reader, stream) {
        if (reader.result && reader.result.byteLength !== 0) {
            var fileBuffer = Buffer.from(reader.result);
            stream.baseStream.position = 0;
            if (stream.baseStream) {
                stream.baseStream.resize(fileBuffer.length);
            }
            stream.writeBytes(fileBuffer);
        }
    }
    exports.writeFileToStream = writeFileToStream;
    function injectFileToStream(file, stream) {
        var reader = new FileReader();
        reader.onload = function () { return writeFileToStream(reader, stream); };
        reader.readAsArrayBuffer(file);
    }
    exports.injectFileToStream = injectFileToStream;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbGUtdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0Esb0JBQTJCLE1BQWMsRUFBRSxRQUE2QixFQUFFLElBQWE7UUFBNUMseUJBQUEsRUFBQSxxQkFBNkI7UUFDcEUsSUFBTSxLQUFLLEdBQUcsSUFBSSxLQUFLLEVBQUUsQ0FBQztRQUMxQixLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ25CLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLFFBQVEsRUFBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUpELGdDQUlDO0lBRUQsMkJBQWtDLE1BQW9CLEVBQUUsTUFBb0I7UUFDeEUsRUFBRSxDQUFBLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLE1BQU0sQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztZQUMvQixFQUFFLENBQUEsQ0FBQyxNQUFNLENBQUMsVUFBMEIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2xDLE1BQU0sQ0FBQyxVQUEyQixDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbEUsQ0FBQztZQUNELE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEMsQ0FBQztJQUNMLENBQUM7SUFURCw4Q0FTQztJQUNELDRCQUFtQyxJQUFVLEVBQUUsTUFBb0I7UUFDL0QsSUFBTSxNQUFNLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsTUFBTSxHQUFHLGNBQUssT0FBQSxpQkFBaUIsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQWpDLENBQWlDLENBQUM7UUFDdkQsTUFBTSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFKRCxnREFJQyIsImZpbGUiOiJmaWxlLXV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmluYXJ5U3RyZWFtLCBNZW1vcnlTdHJlYW0gfSBmcm9tICdsaWJ2YW50YWdlJztcclxuaW1wb3J0ICdmaWxlLXNhdmVyJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlRmlsZUFzKGJ1ZmZlcjogQnVmZmVyLCBmaWxlTmFtZTogc3RyaW5nID0gJ3NhdmVkYXRhJywgdHlwZT86IHN0cmluZyk6IHZvaWQge1x0XHRcclxuICAgIGNvbnN0IGFycmF5ID0gbmV3IEFycmF5KCk7XHJcbiAgICBhcnJheS5wdXNoKGJ1ZmZlcik7XHJcbiAgICBzYXZlQXMobmV3IEJsb2IoYXJyYXksIHt0eXBlOiB0eXBlIHx8IFwiYmluYXJ5XCJ9KSwgZmlsZU5hbWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gd3JpdGVGaWxlVG9TdHJlYW0ocmVhZGVyOiBNU0Jhc2VSZWFkZXIsIHN0cmVhbTogQmluYXJ5U3RyZWFtKTogdm9pZCB7XHJcbiAgICBpZihyZWFkZXIucmVzdWx0ICYmIHJlYWRlci5yZXN1bHQuYnl0ZUxlbmd0aCAhPT0gMCkge1xyXG4gICAgICAgIGNvbnN0IGZpbGVCdWZmZXIgPSBCdWZmZXIuZnJvbShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICBzdHJlYW0uYmFzZVN0cmVhbS5wb3NpdGlvbiA9IDA7XHJcbiAgICAgICAgaWYoc3RyZWFtLmJhc2VTdHJlYW0gYXMgTWVtb3J5U3RyZWFtKSB7XHJcbiAgICAgICAgICAgIChzdHJlYW0uYmFzZVN0cmVhbSBhcyBNZW1vcnlTdHJlYW0pLnJlc2l6ZShmaWxlQnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0cmVhbS53cml0ZUJ5dGVzKGZpbGVCdWZmZXIpO1xyXG4gICAgfVx0XHRcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0RmlsZVRvU3RyZWFtKGZpbGU6IEZpbGUsIHN0cmVhbTogQmluYXJ5U3RyZWFtKTogdm9pZCB7XHJcbiAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1x0XHRcdFxyXG4gICAgcmVhZGVyLm9ubG9hZCA9ICgpPT4gd3JpdGVGaWxlVG9TdHJlYW0ocmVhZGVyLCBzdHJlYW0pO1xyXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('main',["require", "exports", "tslib", "libvantage"], function (require, exports, tslib_1, libvantage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        aurelia.use.basicConfiguration().plugin('libvantage');
                        return [4, aurelia.start()];
                    case 1:
                        _a.sent();
                        return [4, aurelia.setRoot('editor')];
                    case 2:
                        _a.sent();
                        libvantage_1.setEditor(aurelia['root'].viewModel);
                        return [2];
                }
            });
        });
    }
    exports.configure = configure;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0lBR0EsbUJBQWdDLE9BQWdCOzs7Ozt3QkFDNUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDdEQsV0FBTSxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDO3dCQUN0QixXQUFNLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUE7O3dCQUEvQixTQUErQixDQUFDO3dCQUNoQyxzQkFBUyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQzs7Ozs7S0FDeEM7SUFMRCw4QkFLQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVyZWxpYSB9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuaW1wb3J0IHsgc2V0RWRpdG9yIH0gZnJvbSAnbGlidmFudGFnZSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY29uZmlndXJlKGF1cmVsaWE6IEF1cmVsaWEpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGF1cmVsaWEudXNlLmJhc2ljQ29uZmlndXJhdGlvbigpLnBsdWdpbignbGlidmFudGFnZScpO1xyXG4gICAgYXdhaXQgYXVyZWxpYS5zdGFydCgpO1xyXG4gICAgYXdhaXQgYXVyZWxpYS5zZXRSb290KCdlZGl0b3InKTtcclxuICAgIHNldEVkaXRvcihhdXJlbGlhWydyb290J10udmlld01vZGVsKTtcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('savedata',["require", "exports", "tslib", "libvantage"], function (require, exports, tslib_1, libvantage_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KISaveStream = (function (_super) {
        tslib_1.__extends(KISaveStream, _super);
        function KISaveStream(buffer, key, iv) {
            var _this = _super.call(this, new libvantage_1.MemoryStream(buffer)) || this;
            _this.buffer = buffer;
            _this.key = key;
            _this.iv = iv;
            return _this;
        }
        KISaveStream.create = function (buffer, xuid) {
            var header = buffer.toString("utf8", 0, 6);
            if (header !== 'NEWSAV') {
                throw new Error('Invalid magic.');
            }
            var iv = buffer.slice(0x08, 0x18);
            var key = KISaveStream.createKey(xuid.padStart(16, '0'));
            var encData = buffer.slice(0x18, buffer.length);
            var cryptStream = new libvantage_1.CryptoStream(new libvantage_1.MemoryStream(encData), libvantage_1.Aes.createDecryptor(libvantage_1.AesMode.CBC, key, iv, false), libvantage_1.CryptoStreamMode.Read);
            var decrypted = new libvantage_1.StreamReader(cryptStream).readToEnd();
            var temp = decrypted.readUInt16BE(0).toString(16);
            var ms = new libvantage_1.MemoryStream();
            var deflateStream = new libvantage_1.DeflateStream(new libvantage_1.MemoryStream(decrypted), libvantage_1.CompressionMode.Decompress);
            deflateStream.copyTo(ms);
            deflateStream.close();
            return new KISaveStream(ms.getBuffer(), key, iv);
        };
        KISaveStream.prototype.getSaveData = function () {
            var ms = new libvantage_1.MemoryStream();
            var deflateStream = new libvantage_1.DeflateStream(new libvantage_1.MemoryStream(_super.prototype.getBuffer.call(this)), libvantage_1.CompressionMode.Compress, { level: 3 });
            deflateStream.copyTo(ms);
            deflateStream.close();
            var iv = this.iv || libvantage_1.getRandom(0x10);
            var saveData = ms.getBuffer();
            var encryptedStream = libvantage_1.MemoryStream.alloc(saveData.length);
            var cryptStream = new libvantage_1.CryptoStream(encryptedStream, libvantage_1.Aes.createEncryptor(libvantage_1.AesMode.CBC, this.key, iv), libvantage_1.CryptoStreamMode.Write);
            cryptStream.write(saveData, 0, saveData.length);
            cryptStream.close();
            return Buffer.concat([Buffer.from('NEWSAV\0\0'), iv, encryptedStream.getBuffer()]);
        };
        KISaveStream.createKey = function (xuid) {
            var xid = Buffer.from(xuid, 'hex');
            var array = [0x8e, 0xe6, 0x3f, 0xc6, 0x01, 0x68, 0x96, 0xde, 0x40, 0xc2, 0x69, 0xa8, 0x4c, 0x36, 0x72, 0xc1];
            var newArray = new Buffer(0x10);
            for (var i = 0; i < newArray.length;) {
                for (var x = xid.length - 1; x >= 0; x--, i++) {
                    newArray[i] = array[i] ^ xid[x];
                }
            }
            return newArray;
        };
        return KISaveStream;
    }(libvantage_1.SaveStream));
    exports.KISaveStream = KISaveStream;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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b0JBQzFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNwQyxDQUFDO1lBQ0wsQ0FBQztZQUNELE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDcEIsQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0F4REEsQUF3REMsQ0F4RGlDLHVCQUFVLEdBd0QzQztJQXhEWSxvQ0FBWSIsImZpbGUiOiJzYXZlZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgeyBTdHJlYW0sZ2V0UmFuZG9tLCBTYXZlU3RyZWFtLERlZmxhdGVTdHJlYW0sIEJpbmFyeVN0cmVhbSwgQWVzTW9kZSwgQ3J5cHRvU3RyZWFtTW9kZSwgQ3J5cHRvU3RyZWFtLCBBZXMsIFN0cmVhbVJlYWRlciwgTWVtb3J5U3RyZWFtLCBDb21wcmVzc2lvbk1vZGUgIH0gZnJvbSAnbGlidmFudGFnZSc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIEtJU2F2ZVN0cmVhbSBleHRlbmRzIFNhdmVTdHJlYW0ge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBidWZmZXI6IEJ1ZmZlciwgcHJpdmF0ZSBrZXk6IEJ1ZmZlciwgcHJpdmF0ZSBpdj86IEJ1ZmZlcikge1xyXG4gICAgICAgIHN1cGVyKG5ldyBNZW1vcnlTdHJlYW0oYnVmZmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZShidWZmZXI6IEJ1ZmZlciwgeHVpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgaGVhZGVyID0gYnVmZmVyLnRvU3RyaW5nKFwidXRmOFwiLCAwLCA2KTtcclxuICAgICAgICBpZiAoaGVhZGVyICE9PSAnTkVXU0FWJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ludmFsaWQgbWFnaWMuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGl2ID0gYnVmZmVyLnNsaWNlKDB4MDgsIDB4MTgpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IEtJU2F2ZVN0cmVhbS5jcmVhdGVLZXkoeHVpZC5wYWRTdGFydCgxNiwgJzAnKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgZW5jRGF0YSA9IGJ1ZmZlci5zbGljZSgweDE4LCBidWZmZXIubGVuZ3RoKTtcclxuICAgICAgICAvLyBkZWNyeXB0IGRhdGFcclxuICAgICAgICBjb25zdCBjcnlwdFN0cmVhbSA9IG5ldyBDcnlwdG9TdHJlYW0obmV3IE1lbW9yeVN0cmVhbShlbmNEYXRhKSwgQWVzLmNyZWF0ZURlY3J5cHRvcihBZXNNb2RlLkNCQywga2V5LCBpdiwgZmFsc2UpLCBDcnlwdG9TdHJlYW1Nb2RlLlJlYWQpOyBcclxuICAgICAgICBjb25zdCBkZWNyeXB0ZWQgPSBuZXcgU3RyZWFtUmVhZGVyKGNyeXB0U3RyZWFtKS5yZWFkVG9FbmQoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdGVtcCA9IGRlY3J5cHRlZC5yZWFkVUludDE2QkUoMCkudG9TdHJpbmcoMTYpO1xyXG4gICAgICAgIGNvbnN0IG1zID0gbmV3IE1lbW9yeVN0cmVhbSgpO1xyXG4gICAgICAgIGNvbnN0IGRlZmxhdGVTdHJlYW0gPSBuZXcgRGVmbGF0ZVN0cmVhbShuZXcgTWVtb3J5U3RyZWFtKGRlY3J5cHRlZCksIENvbXByZXNzaW9uTW9kZS5EZWNvbXByZXNzKTtcclxuICAgICAgICBkZWZsYXRlU3RyZWFtLmNvcHlUbyhtcyk7XHJcbiAgICAgICAgZGVmbGF0ZVN0cmVhbS5jbG9zZSgpOyBcclxuICAgICAgICAvLyBkZWNvbXByZXNzIGRhdGFcclxuICAgICAgICByZXR1cm4gbmV3IEtJU2F2ZVN0cmVhbShtcy5nZXRCdWZmZXIoKSwga2V5LCBpdik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFNhdmVEYXRhKCk6IEJ1ZmZlciB7XHJcbiAgICAgICAgY29uc3QgbXMgPSBuZXcgTWVtb3J5U3RyZWFtKCk7XHJcbiAgICAgICAgY29uc3QgZGVmbGF0ZVN0cmVhbSA9IG5ldyBEZWZsYXRlU3RyZWFtKG5ldyBNZW1vcnlTdHJlYW0oc3VwZXIuZ2V0QnVmZmVyKCkpLCBDb21wcmVzc2lvbk1vZGUuQ29tcHJlc3MsIHsgbGV2ZWw6IDN9KTtcclxuICAgICAgICBkZWZsYXRlU3RyZWFtLmNvcHlUbyhtcyk7XHJcbiAgICAgICAgZGVmbGF0ZVN0cmVhbS5jbG9zZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBpdiA9IHRoaXMuaXYgfHwgZ2V0UmFuZG9tKDB4MTApO1xyXG4gICAgICAgIGNvbnN0IHNhdmVEYXRhID0gbXMuZ2V0QnVmZmVyKCk7XHJcbiAgICAgICAgY29uc3QgZW5jcnlwdGVkU3RyZWFtID0gTWVtb3J5U3RyZWFtLmFsbG9jKHNhdmVEYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyeXB0U3RyZWFtID0gbmV3IENyeXB0b1N0cmVhbShlbmNyeXB0ZWRTdHJlYW0sIEFlcy5jcmVhdGVFbmNyeXB0b3IoQWVzTW9kZS5DQkMsIHRoaXMua2V5LCBpdiksIENyeXB0b1N0cmVhbU1vZGUuV3JpdGUpOyBcclxuICAgICAgICBjcnlwdFN0cmVhbS53cml0ZShzYXZlRGF0YSwgMCwgc2F2ZURhdGEubGVuZ3RoKTtcclxuICAgICAgICBjcnlwdFN0cmVhbS5jbG9zZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFtCdWZmZXIuZnJvbSgnTkVXU0FWXFwwXFwwJyksIGl2LCBlbmNyeXB0ZWRTdHJlYW0uZ2V0QnVmZmVyKCldKTtcclxuICAgIH1cclxuICAgIC8vIHNhbHQgdG8gY3JlYXRlIEFFUyBrZXlcclxuICAgIHB1YmxpYyBzdGF0aWMgY3JlYXRlS2V5KHh1aWQ6IHN0cmluZyk6QnVmZmVyIHtcclxuICAgICAgICBjb25zdCB4aWQgPSBCdWZmZXIuZnJvbSh4dWlkLCAnaGV4Jyk7XHJcbiAgICAgICAgY29uc3QgYXJyYXkgPSBbMHg4ZSwweGU2LCAweDNmLCAweGM2LCAweDAxLCAweDY4LCAweDk2LCAweGRlLCAweDQwLCAweGMyLCAweDY5LCAweGE4LCAweDRjLCAweDM2LCAweDcyLCAweGMxXTtcclxuXHJcbiAgICAgICAgY29uc3QgbmV3QXJyYXkgPSBuZXcgQnVmZmVyKDB4MTApO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBuZXdBcnJheS5sZW5ndGg7KSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IHhpZC5sZW5ndGggLSAxOyB4ID49IDA7IHgtLSxpKyspIHtcclxuICAgICAgICAgICAgICAgIG5ld0FycmF5W2ldID0gYXJyYXlbaV0gXiB4aWRbeF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld0FycmF5O1xyXG4gICAgfSAgICBcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!editor.html', ['module'], function(module) { module.exports = "<template><require from=\"libvantage/vantage.css\"></require><header>Save Data</header><card label=\"Set XUID before extracting/injecting (Hex)\"><v-text value.bind=\"xuid\"></v-text></card><card label=\"Extract\"><v-button click.delegate=\"writeSaveToDisk()\">Extract File</v-button></card><card label=\"Inject\"><input type=\"file\" files.bind=\"selectedFiles\"></card></template>"; });