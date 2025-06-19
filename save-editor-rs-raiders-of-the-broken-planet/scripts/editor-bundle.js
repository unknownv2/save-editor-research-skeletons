define('editor',["require", "exports", "tslib", "./savedata", "./file-utils", "aurelia-framework"], function (require, exports, tslib_1, savedata_1, file_utils_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Editor = (function () {
        function Editor() {
        }
        Editor.prototype.load = function (buffer) {
            this.buffer = buffer;
            this.stream = savedata_1.RotBPSaveStream.create(buffer);
        };
        Editor.prototype.save = function () {
            return this.stream.getSaveData();
        };
        Editor.prototype.writeSaveToDisk = function () {
            file_utils_1.saveFileAs(this.stream.getBuffer());
        };
        Editor.prototype.selectedFilesChanged = function () {
            if (this.selectedFiles) {
                file_utils_1.injectFileToStream(this.selectedFiles[0], this.stream);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1FBeUJBLENBQUM7UUFuQlUscUJBQUksR0FBWCxVQUFZLE1BQWM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFM0IsSUFBSSxDQUFDLE1BQU0sR0FBRywwQkFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxDQUFDO1FBRU0scUJBQUksR0FBWDtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFDTSxnQ0FBZSxHQUF0QjtZQUNDLHVCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFTSxxQ0FBb0IsR0FBM0I7WUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsK0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNGLENBQUM7UUFwQlc7WUFBWCw4QkFBVTs7cURBQXVCO1FBcUJuQyxhQUFDO0tBekJELEFBeUJDLElBQUE7SUF6Qlksd0JBQU0iLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUm90QlBTYXZlU3RyZWFtIH0gZnJvbSAnLi9zYXZlZGF0YSc7XHJcbmltcG9ydCB7c2F2ZUZpbGVBcywgaW5qZWN0RmlsZVRvU3RyZWFtfSBmcm9tICcuL2ZpbGUtdXRpbHMnO1xyXG5pbXBvcnQge29ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xyXG4gICAgcHJpdmF0ZSBidWZmZXI6IEJ1ZmZlcjtcclxuXHJcblx0c3RyZWFtOiBSb3RCUFNhdmVTdHJlYW07XHJcblx0QG9ic2VydmFibGVcdHNlbGVjdGVkRmlsZXM6IEZpbGVbXTtcclxuXHJcbiAgICBwdWJsaWMgbG9hZChidWZmZXI6IEJ1ZmZlcikge1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xyXG5cclxuXHRcdHRoaXMuc3RyZWFtID0gUm90QlBTYXZlU3RyZWFtLmNyZWF0ZShidWZmZXIpOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZSgpOiBCdWZmZXIge1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLmdldFNhdmVEYXRhKCk7XHJcblx0fVxyXG5cdHB1YmxpYyB3cml0ZVNhdmVUb0Rpc2soKSB7XHJcblx0XHRzYXZlRmlsZUFzKHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZWxlY3RlZEZpbGVzQ2hhbmdlZCgpOiB2b2lkIHtcclxuXHRcdGlmKHRoaXMuc2VsZWN0ZWRGaWxlcykge1x0XHJcblx0XHRcdGluamVjdEZpbGVUb1N0cmVhbSh0aGlzLnNlbGVjdGVkRmlsZXNbMF0sIHRoaXMuc3RyZWFtKTtcdFx0XHRcclxuXHRcdH1cclxuXHR9XHRcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
    var RotBPSaveStream = (function (_super) {
        tslib_1.__extends(RotBPSaveStream, _super);
        function RotBPSaveStream(buffer) {
            var _this = _super.call(this, new libvantage_1.MemoryStream(buffer)) || this;
            _this.buffer = buffer;
            return _this;
        }
        RotBPSaveStream.create = function (buffer) {
            var cryptStream = new libvantage_1.CryptoStream(new libvantage_1.MemoryStream(buffer), libvantage_1.Aes.createDecryptor(libvantage_1.AesMode.CBC, RotBPSaveStream.key, Buffer.alloc(0x10), false), libvantage_1.CryptoStreamMode.Read);
            var decrypted = new libvantage_1.StreamReader(cryptStream).readToEnd();
            var saveData = decrypted.slice(0, decrypted.length - 0x20);
            var storedHash = decrypted.slice(decrypted.length - 0x20, decrypted.length);
            var saveHash = libvantage_1.sha256(saveData);
            if (!storedHash.equals(saveHash)) {
                throw new Error('invalid save hash');
            }
            return new RotBPSaveStream(saveData);
        };
        RotBPSaveStream.prototype.getSaveData = function () {
            var saveData = _super.prototype.getBuffer.call(this);
            var saveHash = libvantage_1.sha256(saveData);
            var ms = libvantage_1.MemoryStream.alloc(saveData.length + saveHash.length);
            var cryptStream = new libvantage_1.CryptoStream(ms, libvantage_1.Aes.createEncryptor(libvantage_1.AesMode.CBC, RotBPSaveStream.key, Buffer.alloc(0x10), false), libvantage_1.CryptoStreamMode.Write);
            cryptStream.write(saveData, 0, saveData.length);
            cryptStream.write(saveHash, 0, saveHash.length);
            cryptStream.close();
            return ms.getBuffer();
        };
        RotBPSaveStream.isUWP = true;
        RotBPSaveStream.key = Buffer.from('C458429A015D51ED12616515526EE3004BB3DAD22345547D94146D2E3DC172EB', 'hex');
        return RotBPSaveStream;
    }(libvantage_1.SaveStream));
    exports.RotBPSaveStream = RotBPSaveStream;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBQXFDLDJDQUFVO1FBSzNDLHlCQUFvQixNQUFjO1lBQWxDLFlBQ0ksa0JBQU0sSUFBSSx5QkFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQ2xDO1lBRm1CLFlBQU0sR0FBTixNQUFNLENBQVE7O1FBRWxDLENBQUM7UUFFTSxzQkFBTSxHQUFiLFVBQWMsTUFBYztZQUV4QixJQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFZLENBQUMsSUFBSSx5QkFBWSxDQUFDLE1BQU0sQ0FBQyxFQUFFLGdCQUFHLENBQUMsZUFBZSxDQUFDLG9CQUFPLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSw2QkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4SyxJQUFNLFNBQVMsR0FBRyxJQUFJLHlCQUFZLENBQUMsV0FBVyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7WUFFNUQsSUFBTSxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQztZQUM3RCxJQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM5RSxJQUFNLFFBQVEsR0FBRyxtQkFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQSxDQUFDLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlCLE1BQU0sSUFBSSxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUN6QyxDQUFDO1lBQ0QsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLENBQUM7UUFFRCxxQ0FBVyxHQUFYO1lBQ0ksSUFBTSxRQUFRLEdBQUcsaUJBQU0sU0FBUyxXQUFFLENBQUM7WUFDbkMsSUFBTSxRQUFRLEdBQUcsbUJBQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsQyxJQUFNLEVBQUUsR0FBRyx5QkFBWSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVqRSxJQUFNLFdBQVcsR0FBRyxJQUFJLHlCQUFZLENBQUMsRUFBRSxFQUFFLGdCQUFHLENBQUMsZUFBZSxDQUFDLG9CQUFPLENBQUMsR0FBRyxFQUFFLGVBQWUsQ0FBQyxHQUFHLEVBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRSw2QkFBZ0IsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwSixXQUFXLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2hELFdBQVcsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFaEQsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBRXBCLE1BQU0sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDMUIsQ0FBQztRQWxDYyxxQkFBSyxHQUFZLElBQUksQ0FBQztRQUV0QixtQkFBRyxHQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0VBQWtFLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFpQ3hILHNCQUFDO0tBcENELEFBb0NDLENBcENvQyx1QkFBVSxHQW9DOUM7SUFwQ1ksMENBQWUiLCJmaWxlIjoic2F2ZWRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCaW5hcnlTdHJlYW0sIEFlc01vZGUsIENyeXB0b1N0cmVhbU1vZGUsIENyeXB0b1N0cmVhbSwgQWVzLCBTdHJlYW1SZWFkZXIsIHNoYTI1NiwgTWVtb3J5U3RyZWFtLCBTYXZlU3RyZWFtIH0gZnJvbSAnbGlidmFudGFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgUm90QlBTYXZlU3RyZWFtIGV4dGVuZHMgU2F2ZVN0cmVhbSB7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc1VXUDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMga2V5OiBCdWZmZXIgPSBCdWZmZXIuZnJvbSgnQzQ1ODQyOUEwMTVENTFFRDEyNjE2NTE1NTI2RUUzMDA0QkIzREFEMjIzNDU1NDdEOTQxNDZEMkUzREMxNzJFQicsICdoZXgnKTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ1ZmZlcjogQnVmZmVyKSB7XHJcbiAgICAgICAgc3VwZXIobmV3IE1lbW9yeVN0cmVhbShidWZmZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlKGJ1ZmZlcjogQnVmZmVyKSB7XHJcbiAgICAgICAgLy8gZGVjcnlwdCBkYXRhXHJcbiAgICAgICAgY29uc3QgY3J5cHRTdHJlYW0gPSBuZXcgQ3J5cHRvU3RyZWFtKG5ldyBNZW1vcnlTdHJlYW0oYnVmZmVyKSwgQWVzLmNyZWF0ZURlY3J5cHRvcihBZXNNb2RlLkNCQywgUm90QlBTYXZlU3RyZWFtLmtleSwgQnVmZmVyLmFsbG9jKDB4MTApLCBmYWxzZSksIENyeXB0b1N0cmVhbU1vZGUuUmVhZCk7IFxyXG4gICAgICAgIGNvbnN0IGRlY3J5cHRlZCA9IG5ldyBTdHJlYW1SZWFkZXIoY3J5cHRTdHJlYW0pLnJlYWRUb0VuZCgpOyAgIFxyXG4gICAgICAgIC8vIHZlcmlmeSBkYXRhIFxyXG4gICAgICAgIGNvbnN0IHNhdmVEYXRhID0gZGVjcnlwdGVkLnNsaWNlKDAsIGRlY3J5cHRlZC5sZW5ndGggLSAweDIwKTtcclxuICAgICAgICBjb25zdCBzdG9yZWRIYXNoID0gZGVjcnlwdGVkLnNsaWNlKGRlY3J5cHRlZC5sZW5ndGggLSAweDIwLCBkZWNyeXB0ZWQubGVuZ3RoKTsgICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHNhdmVIYXNoID0gc2hhMjU2KHNhdmVEYXRhKTtcclxuICAgICAgICBpZighc3RvcmVkSGFzaC5lcXVhbHMoc2F2ZUhhc2gpKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignaW52YWxpZCBzYXZlIGhhc2gnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBSb3RCUFNhdmVTdHJlYW0oc2F2ZURhdGEpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRTYXZlRGF0YSgpOiBCdWZmZXIge1xyXG4gICAgICAgIGNvbnN0IHNhdmVEYXRhID0gc3VwZXIuZ2V0QnVmZmVyKCk7XHJcbiAgICAgICAgY29uc3Qgc2F2ZUhhc2ggPSBzaGEyNTYoc2F2ZURhdGEpO1xyXG4gICAgICAgIGNvbnN0IG1zID0gTWVtb3J5U3RyZWFtLmFsbG9jKHNhdmVEYXRhLmxlbmd0aCArIHNhdmVIYXNoLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGNyeXB0U3RyZWFtID0gbmV3IENyeXB0b1N0cmVhbShtcywgQWVzLmNyZWF0ZUVuY3J5cHRvcihBZXNNb2RlLkNCQywgUm90QlBTYXZlU3RyZWFtLmtleSwgIEJ1ZmZlci5hbGxvYygweDEwKSwgZmFsc2UpLCBDcnlwdG9TdHJlYW1Nb2RlLldyaXRlKTsgXHJcbiAgICAgICAgY3J5cHRTdHJlYW0ud3JpdGUoc2F2ZURhdGEsIDAsIHNhdmVEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgY3J5cHRTdHJlYW0ud3JpdGUoc2F2ZUhhc2gsIDAsIHNhdmVIYXNoLmxlbmd0aCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3J5cHRTdHJlYW0uY2xvc2UoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG1zLmdldEJ1ZmZlcigpOyAgICAgICAgXHJcbiAgICB9XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

define('text!editor.html', ['module'], function(module) { module.exports = "<template><require from=\"libvantage/vantage.css\"></require><header>Save Data</header><card label=\"Extract\"><v-button click.delegate=\"writeSaveToDisk()\">Extract File</v-button></card><card label=\"Inject\"><input type=\"file\" files.bind=\"selectedFiles\"></card></template>"; });