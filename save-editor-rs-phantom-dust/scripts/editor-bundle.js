define('editor',["require", "exports", "tslib", "./savedata", "./file-utils", "aurelia-framework"], function (require, exports, tslib_1, savedata_1, file_utils_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Editor = (function () {
        function Editor() {
        }
        Editor.prototype.load = function (buffer) {
            this.buffer = buffer;
            this.stream = savedata_1.PDSaveStream.create(buffer);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1FBeUJBLENBQUM7UUFuQlUscUJBQUksR0FBWCxVQUFZLE1BQWM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyx1QkFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN4QyxDQUFDO1FBRU0scUJBQUksR0FBWDtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFDTSxnQ0FBZSxHQUF0QjtZQUNDLHVCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFTSxxQ0FBb0IsR0FBM0I7WUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsK0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNGLENBQUM7UUFwQlc7WUFBWCw4QkFBVTs7cURBQXVCO1FBcUJuQyxhQUFDO0tBekJELEFBeUJDLElBQUE7SUF6Qlksd0JBQU0iLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUERTYXZlU3RyZWFtIH0gZnJvbSAnLi9zYXZlZGF0YSc7XHJcbmltcG9ydCB7c2F2ZUZpbGVBcywgaW5qZWN0RmlsZVRvU3RyZWFtfSBmcm9tICcuL2ZpbGUtdXRpbHMnO1xyXG5pbXBvcnQge29ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xyXG4gICAgcHJpdmF0ZSBidWZmZXI6IEJ1ZmZlcjtcclxuXHJcblx0c3RyZWFtOiBQRFNhdmVTdHJlYW07XHJcblx0QG9ic2VydmFibGVcdHNlbGVjdGVkRmlsZXM6IEZpbGVbXTtcclxuXHJcbiAgICBwdWJsaWMgbG9hZChidWZmZXI6IEJ1ZmZlcikge1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xyXG5cclxuXHRcdHRoaXMuc3RyZWFtID0gUERTYXZlU3RyZWFtLmNyZWF0ZShidWZmZXIpOyBcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2F2ZSgpOiBCdWZmZXIge1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLmdldFNhdmVEYXRhKCk7XHJcblx0fVxyXG5cdHB1YmxpYyB3cml0ZVNhdmVUb0Rpc2soKSB7XHJcblx0XHRzYXZlRmlsZUFzKHRoaXMuc3RyZWFtLmdldEJ1ZmZlcigpKTtcclxuXHR9XHJcblxyXG5cdHB1YmxpYyBzZWxlY3RlZEZpbGVzQ2hhbmdlZCgpOiB2b2lkIHtcclxuXHRcdGlmKHRoaXMuc2VsZWN0ZWRGaWxlcykge1x0XHJcblx0XHRcdGluamVjdEZpbGVUb1N0cmVhbSh0aGlzLnNlbGVjdGVkRmlsZXNbMF0sIHRoaXMuc3RyZWFtKTtcdFx0XHRcclxuXHRcdH1cclxuXHR9XHRcclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

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
    var PDSaveStream = (function (_super) {
        tslib_1.__extends(PDSaveStream, _super);
        function PDSaveStream(buffer, header, iv) {
            var _this = _super.call(this, new libvantage_1.MemoryStream(buffer)) || this;
            _this.buffer = buffer;
            _this.header = header;
            _this.iv = iv;
            return _this;
        }
        PDSaveStream.create = function (buffer) {
            var header = buffer.slice(0x00, 0x18);
            var iv = buffer.slice(0x18, 0x24);
            var tag = buffer.slice(0x24, 0x34);
            var encData = buffer.slice(0x40, buffer.length);
            var cryptStream = new libvantage_1.CryptoStream(new libvantage_1.MemoryStream(encData), libvantage_1.Aes.createDecryptor(libvantage_1.AesMode.GMC, PDSaveStream.key, iv, false, tag), libvantage_1.CryptoStreamMode.Read);
            var decrypted = new libvantage_1.StreamReader(cryptStream).readToEnd();
            return new PDSaveStream(decrypted, header, iv);
        };
        PDSaveStream.prototype.getSaveData = function () {
            var iv = this.iv || libvantage_1.getRandom(0x0C);
            var saveData = _super.prototype.getBuffer.call(this);
            var ms = libvantage_1.MemoryStream.alloc(saveData.length);
            var cryptStream = new libvantage_1.CryptoStream(ms, libvantage_1.Aes.createEncryptor(libvantage_1.AesMode.GMC, PDSaveStream.key, iv, false), libvantage_1.CryptoStreamMode.Write);
            cryptStream.write(saveData, 0, saveData.length);
            cryptStream.close();
            var encrypted = ms.getBuffer();
            return Buffer.concat([this.header, iv, encrypted.slice(encrypted.length - 0x10, encrypted.length), Buffer.alloc(0xC), encrypted.slice(0, encrypted.length - 0x10)]);
        };
        PDSaveStream.key = "----------\nUser '%ws' pushing ou";
        return PDSaveStream;
    }(libvantage_1.SaveStream));
    exports.PDSaveStream = PDSaveStream;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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cnQgeyBnZXRSYW5kb20sIFNhdmVTdHJlYW0sIE1lbW9yeVN0cmVhbSwgQ3J5cHRvU3RyZWFtLCBBZXMsIEFlc01vZGUsIENyeXB0b1N0cmVhbU1vZGUsIFN0cmVhbVJlYWRlciB9IGZyb20gJ2xpYnZhbnRhZ2UnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBEU2F2ZVN0cmVhbSBleHRlbmRzIFNhdmVTdHJlYW0ge1xyXG4gICAgc3RhdGljIGtleTogc3RyaW5nID0gXCItLS0tLS0tLS0tXFxuVXNlciAnJXdzJyBwdXNoaW5nIG91XCI7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGJ1ZmZlcjogQnVmZmVyLCBwcml2YXRlIGhlYWRlcjogQnVmZmVyLCBwcml2YXRlIGl2PzogQnVmZmVyKSB7XHJcbiAgICAgICAgc3VwZXIobmV3IE1lbW9yeVN0cmVhbShidWZmZXIpKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGF0aWMgY3JlYXRlKGJ1ZmZlcjogQnVmZmVyKSB7XHJcbiAgICAgICAgLy8gcGFyc2UgZW5jcnlwdGVkIGRhdGFcclxuICAgICAgICBjb25zdCBoZWFkZXIgPSBidWZmZXIuc2xpY2UoMHgwMCwgMHgxOCk7XHJcbiAgICAgICAgY29uc3QgaXYgPSBidWZmZXIuc2xpY2UoMHgxOCwgMHgyNCk7XHJcbiAgICAgICAgY29uc3QgdGFnID0gYnVmZmVyLnNsaWNlKDB4MjQsIDB4MzQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGVuY0RhdGEgPSBidWZmZXIuc2xpY2UoMHg0MCwgYnVmZmVyLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgY3J5cHRTdHJlYW0gPSBuZXcgQ3J5cHRvU3RyZWFtKG5ldyBNZW1vcnlTdHJlYW0oZW5jRGF0YSksIEFlcy5jcmVhdGVEZWNyeXB0b3IoQWVzTW9kZS5HTUMsIFBEU2F2ZVN0cmVhbS5rZXksIGl2LCBmYWxzZSwgdGFnKSwgQ3J5cHRvU3RyZWFtTW9kZS5SZWFkKTsgXHJcbiAgICAgICAgLy8gZGVjcnlwdCBkYXRhICBcclxuICAgICAgICBjb25zdCBkZWNyeXB0ZWQgPSBuZXcgU3RyZWFtUmVhZGVyKGNyeXB0U3RyZWFtKS5yZWFkVG9FbmQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQRFNhdmVTdHJlYW0oZGVjcnlwdGVkLCBoZWFkZXIsIGl2KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZ2V0U2F2ZURhdGEoKTogQnVmZmVyIHtcclxuICAgICAgICBjb25zdCBpdiA9IHRoaXMuaXYgfHwgZ2V0UmFuZG9tKDB4MEMpO1xyXG4gICAgICAgIGNvbnN0IHNhdmVEYXRhID0gc3VwZXIuZ2V0QnVmZmVyKCk7IFxyXG4gICAgICAgIGNvbnN0IG1zID0gTWVtb3J5U3RyZWFtLmFsbG9jKHNhdmVEYXRhLmxlbmd0aCk7XHJcbiBcclxuICAgICAgICBjb25zdCBjcnlwdFN0cmVhbSA9IG5ldyBDcnlwdG9TdHJlYW0obXMsIEFlcy5jcmVhdGVFbmNyeXB0b3IoQWVzTW9kZS5HTUMsIFBEU2F2ZVN0cmVhbS5rZXksIGl2LCBmYWxzZSksIENyeXB0b1N0cmVhbU1vZGUuV3JpdGUpOyBcclxuICAgICAgICBjcnlwdFN0cmVhbS53cml0ZShzYXZlRGF0YSwgMCwgc2F2ZURhdGEubGVuZ3RoKTtcclxuICAgICAgICBjcnlwdFN0cmVhbS5jbG9zZSgpO1xyXG5cclxuICAgICAgICBjb25zdCBlbmNyeXB0ZWQgPSBtcy5nZXRCdWZmZXIoKTsgICAgICAgIFxyXG4gIFxyXG4gICAgICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFt0aGlzLmhlYWRlciwgaXYsIGVuY3J5cHRlZC5zbGljZShlbmNyeXB0ZWQubGVuZ3RoIC0gMHgxMCwgZW5jcnlwdGVkLmxlbmd0aCksIEJ1ZmZlci5hbGxvYygweEMpLCBlbmNyeXB0ZWQuc2xpY2UoMCwgZW5jcnlwdGVkLmxlbmd0aCAtIDB4MTApXSk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!editor.html', ['module'], function(module) { module.exports = "<template><require from=\"libvantage/vantage.css\"></require><header>Save Data</header><card label=\"Extract\"><v-button click.delegate=\"writeSaveToDisk()\">Extract File</v-button></card><card label=\"Inject\"><input type=\"file\" files.bind=\"selectedFiles\"></card></template>"; });