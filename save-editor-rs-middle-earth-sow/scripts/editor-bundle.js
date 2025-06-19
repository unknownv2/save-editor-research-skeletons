define('editor',["require", "exports", "tslib", "./savedata", "./file-utils", "aurelia-framework"], function (require, exports, tslib_1, savedata_1, file_utils_1, aurelia_framework_1) {
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
        Editor.prototype.save = function () {
            return this.stream.getSaveData();
        };
        Editor.prototype.writeSaveToDisk = function () {
            if (!this.isDefaultXuid()) {
                if (!this.stream) {
                    this.stream = savedata_1.SoWSaveStream.create(this.buffer, this.xuid);
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
        Editor.prototype.isDefaultXuid = function () {
            return this.xuid === this.defaultXuid;
        };
        tslib_1.__decorate([
            aurelia_framework_1.observable,
            tslib_1.__metadata("design:type", Array)
        ], Editor.prototype, "selectedFiles", void 0);
        return Editor;
    }());
    exports.Editor = Editor;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1lBS0MsZ0JBQVcsR0FBVyxrQkFBa0IsQ0FBQztZQUN6QyxTQUFJLEdBQVcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQThCakMsQ0FBQztRQTVCVSxxQkFBSSxHQUFYLFVBQVksTUFBYztZQUN0QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDO1FBRU0scUJBQUksR0FBWDtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFFTSxnQ0FBZSxHQUF0QjtZQUNDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyx3QkFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDNUQsQ0FBQztnQkFDRCx1QkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztZQUNyQyxDQUFDO1FBQ0YsQ0FBQztRQUVNLHFDQUFvQixHQUEzQjtZQUNDLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDMUIsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7b0JBQ3ZCLCtCQUFrQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN4RCxDQUFDO1lBQ0YsQ0FBQztRQUNGLENBQUM7UUFDTyw4QkFBYSxHQUFyQjtZQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDdkMsQ0FBQztRQS9CVztZQUFYLDhCQUFVOztxREFBdUI7UUFnQ25DLGFBQUM7S0FwQ0QsQUFvQ0MsSUFBQTtJQXBDWSx3QkFBTSIsImZpbGUiOiJlZGl0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTb1dTYXZlU3RyZWFtIH0gZnJvbSAnLi9zYXZlZGF0YSc7XHJcbmltcG9ydCB7c2F2ZUZpbGVBcywgaW5qZWN0RmlsZVRvU3RyZWFtfSBmcm9tICcuL2ZpbGUtdXRpbHMnO1xyXG5pbXBvcnQge29ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xyXG4gICAgcHJpdmF0ZSBidWZmZXI6IEJ1ZmZlcjtcclxuXHJcblx0c3RyZWFtOiBTb1dTYXZlU3RyZWFtO1xyXG5cdEBvYnNlcnZhYmxlXHRzZWxlY3RlZEZpbGVzOiBGaWxlW107XHJcblx0ZGVmYXVsdFh1aWQ6IHN0cmluZyA9ICcwMDA5MDAwMDAwMDAwMDAwJztcclxuXHR4dWlkOiBzdHJpbmcgPSB0aGlzLmRlZmF1bHRYdWlkO1xyXG5cclxuICAgIHB1YmxpYyBsb2FkKGJ1ZmZlcjogQnVmZmVyKSB7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoKTogQnVmZmVyIHtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVhbS5nZXRTYXZlRGF0YSgpO1xyXG5cdH1cclxuXHJcblx0cHVibGljIHdyaXRlU2F2ZVRvRGlzaygpIHtcclxuXHRcdGlmKCF0aGlzLmlzRGVmYXVsdFh1aWQoKSkge1xyXG5cdFx0XHRpZighdGhpcy5zdHJlYW0pIHtcclxuXHRcdFx0XHR0aGlzLnN0cmVhbSA9IFNvV1NhdmVTdHJlYW0uY3JlYXRlKHRoaXMuYnVmZmVyLCB0aGlzLnh1aWQpOyBcclxuXHRcdFx0fVx0XHRcclxuXHRcdFx0c2F2ZUZpbGVBcyh0aGlzLnN0cmVhbS5nZXRCdWZmZXIoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0ZWRGaWxlc0NoYW5nZWQoKTogdm9pZCB7XHJcblx0XHRpZighdGhpcy5pc0RlZmF1bHRYdWlkKCkpIHtcclxuXHRcdFx0aWYodGhpcy5zZWxlY3RlZEZpbGVzKSB7XHRcclxuXHRcdFx0XHRpbmplY3RGaWxlVG9TdHJlYW0odGhpcy5zZWxlY3RlZEZpbGVzWzBdLCB0aGlzLnN0cmVhbSk7XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cHJpdmF0ZSBpc0RlZmF1bHRYdWlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMueHVpZCA9PT0gdGhpcy5kZWZhdWx0WHVpZDtcclxuXHR9XHRcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
    var SoWSaveStream = (function (_super) {
        tslib_1.__extends(SoWSaveStream, _super);
        function SoWSaveStream(buffer, key, salt) {
            var _this = _super.call(this, new libvantage_1.MemoryStream(buffer)) || this;
            _this.buffer = buffer;
            _this.key = key;
            _this.salt = salt;
            return _this;
        }
        SoWSaveStream.create = function (buffer, xuid) {
            var io = new libvantage_1.BinaryStream(new libvantage_1.MemoryStream(buffer));
            var magic = io.readString("utf8", 4);
            if (magic !== 'SOM3') {
                throw new Error("invalid save file");
            }
            var salt = io.readBytes(0x4);
            var paddedLength = io.readUInt32();
            var realLength = io.readUInt32();
            var encData = io.readBytes(paddedLength);
            var key = SoWSaveStream.createKey(SoWSaveStream.strKey, salt, Buffer.from(xuid, 'hex'));
            var cryptStream = new libvantage_1.CryptoStream(new libvantage_1.MemoryStream(encData), libvantage_1.Aes.createDecryptor(libvantage_1.AesMode.CBC, key, SoWSaveStream.iv), libvantage_1.CryptoStreamMode.Read);
            var decrypted = new libvantage_1.StreamReader(cryptStream).readToEnd();
            return new SoWSaveStream(decrypted, key, salt);
        };
        SoWSaveStream.prototype.getSaveData = function () {
            var saveData = _super.prototype.getBuffer.call(this);
            var ms = libvantage_1.MemoryStream.alloc(saveData.length);
            var cryptStream = new libvantage_1.CryptoStream(ms, libvantage_1.Aes.createEncryptor(libvantage_1.AesMode.CBC, this.key, SoWSaveStream.iv), libvantage_1.CryptoStreamMode.Write);
            cryptStream.write(saveData, 0, saveData.length);
            cryptStream.close();
            var encrypted = ms.getBuffer();
            var headerStream = new libvantage_1.BinaryStream(new libvantage_1.MemoryStream());
            headerStream.writeString('SOM3');
            headerStream.writeBytes(this.salt);
            headerStream.writeUInt32(encrypted.length);
            headerStream.writeUInt32(saveData.length);
            return Buffer.concat([headerStream.getBuffer(), encrypted]);
        };
        SoWSaveStream.createKey = function (stringKey, salt, auth) {
            var key = Buffer.from(stringKey);
            key[0x1A] = salt[0];
            key[0xB] = salt[1];
            key[0x12] = salt[2];
            key[0x11] = salt[3];
            key[0xA] = auth[7];
            key[0x1E] = auth[6];
            key[0x16] = auth[5];
            key[0x2] = auth[4];
            return key;
        };
        SoWSaveStream.strKey = 'a0@290171@ko394Cd_?dVta198iOjz$v';
        SoWSaveStream.iv = 'vdx$fn4@tdpzeyn2';
        return SoWSaveStream;
    }(libvantage_1.SaveStream));
    exports.SoWSaveStream = SoWSaveStream;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IFN0cmVhbSwgQmluYXJ5U3RyZWFtLCAgU3RyZWFtUmVhZGVyLCBTYXZlU3RyZWFtLCBDcnlwdG9TdHJlYW1Nb2RlLCBBZXNNb2RlLCBDcnlwdG9TdHJlYW0sIE1lbW9yeVN0cmVhbSwgQWVzIH0gZnJvbSAnbGlidmFudGFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgU29XU2F2ZVN0cmVhbSBleHRlbmRzIFNhdmVTdHJlYW0ge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN0cktleTogc3RyaW5nID0gJ2EwQDI5MDE3MUBrbzM5NENkXz9kVnRhMTk4aU9qeiR2JztcclxuICAgIHByaXZhdGUgc3RhdGljIGl2OiBzdHJpbmcgPSAndmR4JGZuNEB0ZHB6ZXluMic7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBidWZmZXI6IEJ1ZmZlciwgcHJpdmF0ZSBrZXk6IEJ1ZmZlciwgcHJpdmF0ZSBzYWx0OiBCdWZmZXIpIHtcclxuICAgICAgICBzdXBlcihuZXcgTWVtb3J5U3RyZWFtKGJ1ZmZlcikpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzdGF0aWMgY3JlYXRlKGJ1ZmZlcjogQnVmZmVyLCB4dWlkOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBpbyA9IG5ldyBCaW5hcnlTdHJlYW0obmV3IE1lbW9yeVN0cmVhbShidWZmZXIpKTtcclxuICAgICAgICBjb25zdCBtYWdpYyA9IGlvLnJlYWRTdHJpbmcoXCJ1dGY4XCIsIDQpO1xyXG4gICAgICAgIGlmKG1hZ2ljICE9PSAnU09NMycpe1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIHNhdmUgZmlsZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2FsdCA9IGlvLnJlYWRCeXRlcygweDQpO1xyXG4gICAgICAgIGNvbnN0IHBhZGRlZExlbmd0aCA9IGlvLnJlYWRVSW50MzIoKTtcclxuICAgICAgICBjb25zdCByZWFsTGVuZ3RoID0gaW8ucmVhZFVJbnQzMigpO1xyXG4gICAgICAgIGNvbnN0IGVuY0RhdGEgPSBpby5yZWFkQnl0ZXMocGFkZGVkTGVuZ3RoKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIHNhdmUgYWVzIGtleVxyXG4gICAgICAgIGNvbnN0IGtleSA9IFNvV1NhdmVTdHJlYW0uY3JlYXRlS2V5KFNvV1NhdmVTdHJlYW0uc3RyS2V5LCBzYWx0LCBCdWZmZXIuZnJvbSh4dWlkLCAnaGV4JykpO1xyXG4gICAgICAgIGNvbnN0IGNyeXB0U3RyZWFtID0gbmV3IENyeXB0b1N0cmVhbShuZXcgTWVtb3J5U3RyZWFtKGVuY0RhdGEpLCBBZXMuY3JlYXRlRGVjcnlwdG9yKEFlc01vZGUuQ0JDLCBrZXksIFNvV1NhdmVTdHJlYW0uaXYpLCBDcnlwdG9TdHJlYW1Nb2RlLlJlYWQpOyBcclxuICAgICAgICAvLyBkZWNyeXB0IGRhdGEgIFxyXG4gICAgICAgIGNvbnN0IGRlY3J5cHRlZCA9IG5ldyBTdHJlYW1SZWFkZXIoY3J5cHRTdHJlYW0pLnJlYWRUb0VuZCgpOyAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgU29XU2F2ZVN0cmVhbShkZWNyeXB0ZWQsIGtleSwgc2FsdCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGdldFNhdmVEYXRhKCk6IEJ1ZmZlciB7XHJcbiAgICAgICAgLy8gZW5jcnlwdCBkYXRhIGFuZCBhdHRhY2ggdGhlIGhlYWRlciB0byBjcmVhdGUgdGhlIGZpbmFsIHNhdmUgZGF0YVxyXG4gICAgICAgIGNvbnN0IHNhdmVEYXRhID0gc3VwZXIuZ2V0QnVmZmVyKCk7XHJcbiAgICAgICAgY29uc3QgbXMgPSBNZW1vcnlTdHJlYW0uYWxsb2Moc2F2ZURhdGEubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29uc3QgY3J5cHRTdHJlYW0gPSBuZXcgQ3J5cHRvU3RyZWFtKG1zLCBBZXMuY3JlYXRlRW5jcnlwdG9yKEFlc01vZGUuQ0JDLCB0aGlzLmtleSwgU29XU2F2ZVN0cmVhbS5pdiksIENyeXB0b1N0cmVhbU1vZGUuV3JpdGUpOyBcclxuICAgICAgICBjcnlwdFN0cmVhbS53cml0ZShzYXZlRGF0YSwgMCwgc2F2ZURhdGEubGVuZ3RoKTtcclxuICAgICAgICBjcnlwdFN0cmVhbS5jbG9zZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSBtcy5nZXRCdWZmZXIoKTtcclxuICAgICAgICAvLyBjcmVhdGUgaGVhZGVyXHJcbiAgICAgICAgY29uc3QgaGVhZGVyU3RyZWFtID0gbmV3IEJpbmFyeVN0cmVhbShuZXcgTWVtb3J5U3RyZWFtKCkpO1xyXG4gICAgICAgIGhlYWRlclN0cmVhbS53cml0ZVN0cmluZygnU09NMycpO1xyXG4gICAgICAgIGhlYWRlclN0cmVhbS53cml0ZUJ5dGVzKHRoaXMuc2FsdCk7XHJcbiAgICAgICAgaGVhZGVyU3RyZWFtLndyaXRlVUludDMyKGVuY3J5cHRlZC5sZW5ndGgpO1xyXG4gICAgICAgIGhlYWRlclN0cmVhbS53cml0ZVVJbnQzMihzYXZlRGF0YS5sZW5ndGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gQnVmZmVyLmNvbmNhdChbaGVhZGVyU3RyZWFtLmdldEJ1ZmZlcigpLCBlbmNyeXB0ZWRdKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGNyZWF0ZUtleShzdHJpbmdLZXk6IHN0cmluZywgc2FsdDogQnVmZmVyLCBhdXRoOiBCdWZmZXIpOiBCdWZmZXIge1xyXG4gICAgICAgIGNvbnN0IGtleSA9IEJ1ZmZlci5mcm9tKHN0cmluZ0tleSk7XHJcbiAgICAgICAgLy8gc2FsdCBrZXkgd2l0aCByYW5kb20gdmFsdWVcclxuICAgICAgICBrZXlbMHgxQV0gPSBzYWx0WzBdO1xyXG4gICAgICAgIGtleVsweEJdID0gc2FsdFsxXTtcclxuICAgICAgICBrZXlbMHgxMl0gPSBzYWx0WzJdO1xyXG4gICAgICAgIGtleVsweDExXSA9IHNhbHRbM107XHJcbiAgICAgICAgLy8gc2FsdCBrZXkgd2l0aCBhdXRoIGRhdGFcclxuICAgICAgICBrZXlbMHhBXSA9IGF1dGhbN107XHJcbiAgICAgICAga2V5WzB4MUVdID0gYXV0aFs2XTtcclxuICAgICAgICBrZXlbMHgxNl0gPSBhdXRoWzVdOyAgICAgICAgXHJcbiAgICAgICAga2V5WzB4Ml0gPSBhdXRoWzRdO1xyXG4gICAgICAgIHJldHVybiBrZXk7XHJcbiAgICB9ICAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!editor.html', ['module'], function(module) { module.exports = "<template><require from=\"libvantage/vantage.css\"></require><header>Save Data</header><card label=\"Set XUID before extracting/injecting (Hex)\"><v-text value.bind=\"xuid\"></v-text></card><card label=\"Extract\"><v-button click.delegate=\"writeSaveToDisk()\">Extract File</v-button></card><card label=\"Inject\"><input type=\"file\" files.bind=\"selectedFiles\"></card></template>"; });