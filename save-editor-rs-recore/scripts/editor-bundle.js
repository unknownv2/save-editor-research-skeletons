define('editor',["require", "exports", "tslib", "./savedata", "./file-utils", "aurelia-framework"], function (require, exports, tslib_1, savedata_1, file_utils_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Editor = (function () {
        function Editor() {
            this.defaultXuid = '0';
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
                    this.stream = savedata_1.RecoreSaveStream.create(this.buffer, this.xuid);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1lBS0MsZ0JBQVcsR0FBVyxHQUFHLENBQUM7WUFFMUIsU0FBSSxHQUFXLElBQUksQ0FBQyxXQUFXLENBQUM7UUE4QmpDLENBQUM7UUE1QlUscUJBQUksR0FBWCxVQUFZLE1BQWM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDekIsQ0FBQztRQUVNLHFCQUFJLEdBQVg7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBRU0sZ0NBQWUsR0FBdEI7WUFDQyxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzFCLEVBQUUsQ0FBQSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7b0JBQ2pCLElBQUksQ0FBQyxNQUFNLEdBQUcsMkJBQWdCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUMvRCxDQUFDO2dCQUNELHVCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1lBQ3JDLENBQUM7UUFDRixDQUFDO1FBRU0scUNBQW9CLEdBQTNCO1lBQ0MsRUFBRSxDQUFBLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDdkIsK0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3hELENBQUM7WUFDRixDQUFDO1FBQ0YsQ0FBQztRQUNPLDhCQUFhLEdBQXJCO1lBQ0MsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUN2QyxDQUFDO1FBaENXO1lBQVgsOEJBQVU7O3FEQUF1QjtRQWlDbkMsYUFBQztLQXJDRCxBQXFDQyxJQUFBO0lBckNZLHdCQUFNIiwiZmlsZSI6ImVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlY29yZVNhdmVTdHJlYW0gfSBmcm9tICcuL3NhdmVkYXRhJztcclxuaW1wb3J0IHtzYXZlRmlsZUFzLCBpbmplY3RGaWxlVG9TdHJlYW19IGZyb20gJy4vZmlsZS11dGlscyc7XHJcbmltcG9ydCB7b2JzZXJ2YWJsZX0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEVkaXRvciB7XHJcbiAgICBwcml2YXRlIGJ1ZmZlcjogQnVmZmVyO1xyXG5cclxuXHRzdHJlYW06IFJlY29yZVNhdmVTdHJlYW07XHJcblx0QG9ic2VydmFibGVcdHNlbGVjdGVkRmlsZXM6IEZpbGVbXTtcclxuXHRkZWZhdWx0WHVpZDogc3RyaW5nID0gJzAnO1xyXG5cdFxyXG5cdHh1aWQ6IHN0cmluZyA9IHRoaXMuZGVmYXVsdFh1aWQ7XHJcblx0XHJcbiAgICBwdWJsaWMgbG9hZChidWZmZXI6IEJ1ZmZlcikge1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzYXZlKCk6IEJ1ZmZlciB7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gdGhpcy5zdHJlYW0uZ2V0U2F2ZURhdGEoKTtcclxuXHR9XHJcblx0XHJcblx0cHVibGljIHdyaXRlU2F2ZVRvRGlzaygpIHtcclxuXHRcdGlmKCF0aGlzLmlzRGVmYXVsdFh1aWQoKSkge1xyXG5cdFx0XHRpZighdGhpcy5zdHJlYW0pIHtcclxuXHRcdFx0XHR0aGlzLnN0cmVhbSA9IFJlY29yZVNhdmVTdHJlYW0uY3JlYXRlKHRoaXMuYnVmZmVyLCB0aGlzLnh1aWQpOyBcclxuXHRcdFx0fVx0XHRcclxuXHRcdFx0c2F2ZUZpbGVBcyh0aGlzLnN0cmVhbS5nZXRCdWZmZXIoKSk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0ZWRGaWxlc0NoYW5nZWQoKTogdm9pZCB7XHJcblx0XHRpZighdGhpcy5pc0RlZmF1bHRYdWlkKCkpIHtcclxuXHRcdFx0aWYodGhpcy5zZWxlY3RlZEZpbGVzKSB7XHRcclxuXHRcdFx0XHRpbmplY3RGaWxlVG9TdHJlYW0odGhpcy5zZWxlY3RlZEZpbGVzWzBdLCB0aGlzLnN0cmVhbSk7XHRcdFx0XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cHJpdmF0ZSBpc0RlZmF1bHRYdWlkKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMueHVpZCA9PT0gdGhpcy5kZWZhdWx0WHVpZDtcclxuXHR9XHRcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
    var RecoreSaveStream = (function (_super) {
        tslib_1.__extends(RecoreSaveStream, _super);
        function RecoreSaveStream(buffer, key) {
            var _this = _super.call(this, new libvantage_1.MemoryStream(buffer)) || this;
            _this.buffer = buffer;
            _this.key = key;
            return _this;
        }
        RecoreSaveStream.create = function (buffer, decimaXuid) {
            var key = RecoreSaveStream.deriveKey(RecoreSaveStream.scid, Buffer.from(decimaXuid));
            var iv = Buffer.from(RecoreSaveStream.tid);
            var cryptStream = new libvantage_1.CryptoStream(new libvantage_1.MemoryStream(buffer), libvantage_1.CipherFactory.createDecryptor(libvantage_1.CipherType.TripleDES, key, iv, false), libvantage_1.CryptoStreamMode.Read);
            var decrypted = new libvantage_1.StreamReader(cryptStream).readToEnd();
            return new RecoreSaveStream(decrypted, key);
        };
        RecoreSaveStream.prototype.getSaveData = function () {
            var saveData = _super.prototype.getBuffer.call(this);
            var ms = libvantage_1.MemoryStream.alloc(saveData.length);
            var cryptStream = new libvantage_1.CryptoStream(ms, libvantage_1.CipherFactory.createEncryptor(libvantage_1.CipherType.TripleDES, this.key, Buffer.from(RecoreSaveStream.tid), false), libvantage_1.CryptoStreamMode.Write);
            cryptStream.write(saveData, 0, saveData.length);
            cryptStream.close();
            return ms.getBuffer();
        };
        RecoreSaveStream.deriveKey = function (base, auth) {
            var key = new Buffer(base);
            for (var x = 0; x < auth.length; x++) {
                key[x] ^= auth[x];
            }
            return key;
        };
        RecoreSaveStream.scid = '31ba0100-1d30-40c4-9816-';
        RecoreSaveStream.tid = '85243142';
        return RecoreSaveStream;
    }(libvantage_1.SaveStream));
    exports.RecoreSaveStream = RecoreSaveStream;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUdBO1FBQXNDLDRDQUFVO1FBSzVDLDBCQUFvQixNQUFjLEVBQVUsR0FBVztZQUF2RCxZQUNJLGtCQUFNLElBQUkseUJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUNsQztZQUZtQixZQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVUsU0FBRyxHQUFILEdBQUcsQ0FBUTs7UUFFdkQsQ0FBQztRQUVNLHVCQUFNLEdBQWIsVUFBYyxNQUFjLEVBQUUsVUFBa0I7WUFFNUMsSUFBTSxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7WUFDdkYsSUFBTSxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFZLENBQUMsSUFBSSx5QkFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLDBCQUFhLENBQUMsZUFBZSxDQUFDLHVCQUFVLENBQUMsU0FBUyxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsS0FBSyxDQUFDLEVBQUUsNkJBQWdCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFFM0osSUFBTSxTQUFTLEdBQUcsSUFBSSx5QkFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1lBQzVELE1BQU0sQ0FBQyxJQUFJLGdCQUFnQixDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNoRCxDQUFDO1FBRUQsc0NBQVcsR0FBWDtZQUNJLElBQU0sUUFBUSxHQUFHLGlCQUFNLFNBQVMsV0FBRSxDQUFDO1lBQ25DLElBQU0sRUFBRSxHQUFHLHlCQUFZLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUUvQyxJQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFZLENBQUMsRUFBRSxFQUFFLDBCQUFhLENBQUMsZUFBZSxDQUFDLHVCQUFVLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSw2QkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxSyxXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRWhELFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUVwQixNQUFNLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQzFCLENBQUM7UUFFTSwwQkFBUyxHQUFoQixVQUFpQixJQUFZLEVBQUUsSUFBWTtZQUN2QyxJQUFNLEdBQUcsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQztnQkFDbEMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDO1lBQ0QsTUFBTSxDQUFDLEdBQUcsQ0FBQztRQUNmLENBQUM7UUFuQ00scUJBQUksR0FBVywwQkFBMEIsQ0FBQztRQUMxQyxvQkFBRyxHQUFXLFVBQVUsQ0FBQztRQW1DcEMsdUJBQUM7S0F0Q0QsQUFzQ0MsQ0F0Q3FDLHVCQUFVLEdBc0MvQztJQXRDWSw0Q0FBZ0IiLCJmaWxlIjoic2F2ZWRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHtCaW5hcnlTdHJlYW0sIE1lbW9yeVN0cmVhbSwgRW5kaWFubmVzcywgQ2lwaGVyVHlwZSwgQ3J5cHRvU3RyZWFtLCBTdHJlYW1SZWFkZXIsIENpcGhlckZhY3RvcnksIENyeXB0b1N0cmVhbU1vZGUsIFNhdmVTdHJlYW19IGZyb20gJ2xpYnZhbnRhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlY29yZVNhdmVTdHJlYW0gZXh0ZW5kcyBTYXZlU3RyZWFtIHtcclxuXHJcbiAgICBzdGF0aWMgc2NpZDogc3RyaW5nID0gJzMxYmEwMTAwLTFkMzAtNDBjNC05ODE2LSc7XHJcbiAgICBzdGF0aWMgdGlkOiBzdHJpbmcgPSAnODUyNDMxNDInO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVmZmVyOiBCdWZmZXIsIHByaXZhdGUga2V5OiBCdWZmZXIpIHtcclxuICAgICAgICBzdXBlcihuZXcgTWVtb3J5U3RyZWFtKGJ1ZmZlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUoYnVmZmVyOiBCdWZmZXIsIGRlY2ltYVh1aWQ6IHN0cmluZyk6IFJlY29yZVNhdmVTdHJlYW0ge1xyXG4gICAgICAgIC8vIGRlY3J5cHQgZGF0YVxyXG4gICAgICAgIGNvbnN0IGtleSA9IFJlY29yZVNhdmVTdHJlYW0uZGVyaXZlS2V5KFJlY29yZVNhdmVTdHJlYW0uc2NpZCwgQnVmZmVyLmZyb20oZGVjaW1hWHVpZCkpO1xyXG4gICAgICAgIGNvbnN0IGl2ID0gQnVmZmVyLmZyb20oUmVjb3JlU2F2ZVN0cmVhbS50aWQpOyBcclxuICAgICAgICBjb25zdCBjcnlwdFN0cmVhbSA9IG5ldyBDcnlwdG9TdHJlYW0obmV3IE1lbW9yeVN0cmVhbShidWZmZXIpLCBDaXBoZXJGYWN0b3J5LmNyZWF0ZURlY3J5cHRvcihDaXBoZXJUeXBlLlRyaXBsZURFUywga2V5LCBpdiwgZmFsc2UpLCBDcnlwdG9TdHJlYW1Nb2RlLlJlYWQpOyBcclxuXHJcbiAgICAgICAgY29uc3QgZGVjcnlwdGVkID0gbmV3IFN0cmVhbVJlYWRlcihjcnlwdFN0cmVhbSkucmVhZFRvRW5kKCk7ICAgIFxyXG4gICAgICAgIHJldHVybiBuZXcgUmVjb3JlU2F2ZVN0cmVhbShkZWNyeXB0ZWQsIGtleSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2F2ZURhdGEoKTogQnVmZmVyIHtcclxuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IHN1cGVyLmdldEJ1ZmZlcigpO1xyXG4gICAgICAgIGNvbnN0IG1zID0gTWVtb3J5U3RyZWFtLmFsbG9jKHNhdmVEYXRhLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyeXB0U3RyZWFtID0gbmV3IENyeXB0b1N0cmVhbShtcywgQ2lwaGVyRmFjdG9yeS5jcmVhdGVFbmNyeXB0b3IoQ2lwaGVyVHlwZS5UcmlwbGVERVMsIHRoaXMua2V5LCBCdWZmZXIuZnJvbShSZWNvcmVTYXZlU3RyZWFtLnRpZCksIGZhbHNlKSwgQ3J5cHRvU3RyZWFtTW9kZS5Xcml0ZSk7IFxyXG4gICAgICAgIGNyeXB0U3RyZWFtLndyaXRlKHNhdmVEYXRhLCAwLCBzYXZlRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNyeXB0U3RyZWFtLmNsb3NlKCk7XHJcblxyXG4gICAgICAgIHJldHVybiBtcy5nZXRCdWZmZXIoKTsgICBcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgZGVyaXZlS2V5KGJhc2U6IHN0cmluZywgYXV0aDogQnVmZmVyKTogQnVmZmVyIHtcclxuICAgICAgICBjb25zdCBrZXkgPSBuZXcgQnVmZmVyKGJhc2UpO1xyXG4gICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCBhdXRoLmxlbmd0aDsgeCsrKSB7XHJcbiAgICAgICAgICAgIGtleVt4XSBePSBhdXRoW3hdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!editor.html', ['module'], function(module) { module.exports = "<template><require from=\"libvantage/vantage.css\"></require><header>Save Data</header><card label=\"Set XUID before extracting/injecting (Decimal)\"><v-text value.bind=\"xuid\"></v-text></card><card label=\"Extract\"><v-button click.delegate=\"writeSaveToDisk()\">Extract File</v-button></card><card label=\"Inject\"><input type=\"file\" files.bind=\"selectedFiles\"></card></template>"; });