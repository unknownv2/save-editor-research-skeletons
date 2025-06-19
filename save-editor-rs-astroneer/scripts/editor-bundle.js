define('editor',["require", "exports", "tslib", "./savedata", "./file-utils", "aurelia-framework"], function (require, exports, tslib_1, savedata_1, file_utils_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Editor = (function () {
        function Editor() {
        }
        Editor.prototype.load = function (buffer) {
            this.buffer = buffer;
            this.stream = savedata_1.AstroSaveStream.create(buffer);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1FBMEJBLENBQUM7UUFwQlUscUJBQUksR0FBWCxVQUFZLE1BQWM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFM0IsSUFBSSxDQUFDLE1BQU0sR0FBRywwQkFBZSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxDQUFDO1FBRVMscUJBQUksR0FBWDtZQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3hDLENBQUM7UUFFTSxnQ0FBZSxHQUF0QjtZQUNDLHVCQUFVLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUM7UUFFTSxxQ0FBb0IsR0FBM0I7WUFDQyxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztnQkFDdkIsK0JBQWtCLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDeEQsQ0FBQztRQUNGLENBQUM7UUFyQlc7WUFBWCw4QkFBVTs7cURBQXVCO1FBc0JuQyxhQUFDO0tBMUJELEFBMEJDLElBQUE7SUExQlksd0JBQU0iLCJmaWxlIjoiZWRpdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXN0cm9TYXZlU3RyZWFtIH0gZnJvbSAnLi9zYXZlZGF0YSc7XHJcbmltcG9ydCB7c2F2ZUZpbGVBcywgaW5qZWN0RmlsZVRvU3RyZWFtfSBmcm9tICcuL2ZpbGUtdXRpbHMnO1xyXG5pbXBvcnQge29ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xyXG4gICAgcHJpdmF0ZSBidWZmZXI6IEJ1ZmZlcjtcclxuXHJcblx0c3RyZWFtOiBBc3Ryb1NhdmVTdHJlYW07XHJcblx0QG9ic2VydmFibGVcdHNlbGVjdGVkRmlsZXM6IEZpbGVbXTtcclxuXHJcbiAgICBwdWJsaWMgbG9hZChidWZmZXI6IEJ1ZmZlcikge1xyXG4gICAgICAgIHRoaXMuYnVmZmVyID0gYnVmZmVyO1xyXG5cclxuXHRcdHRoaXMuc3RyZWFtID0gQXN0cm9TYXZlU3RyZWFtLmNyZWF0ZShidWZmZXIpOyBcclxuXHR9XHJcblx0XHJcbiAgICBwdWJsaWMgc2F2ZSgpOiBCdWZmZXIge1xyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RyZWFtLmdldFNhdmVEYXRhKCk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgd3JpdGVTYXZlVG9EaXNrKCkge1xyXG5cdFx0c2F2ZUZpbGVBcyh0aGlzLnN0cmVhbS5nZXRCdWZmZXIoKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0ZWRGaWxlc0NoYW5nZWQoKTogdm9pZCB7XHJcblx0XHRpZih0aGlzLnNlbGVjdGVkRmlsZXMpIHtcdFxyXG5cdFx0XHRpbmplY3RGaWxlVG9TdHJlYW0odGhpcy5zZWxlY3RlZEZpbGVzWzBdLCB0aGlzLnN0cmVhbSk7XHRcdFx0XHJcblx0XHR9XHJcblx0fVx0XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
    var AstroSaveStream = (function (_super) {
        tslib_1.__extends(AstroSaveStream, _super);
        function AstroSaveStream(buffer, header) {
            var _this = _super.call(this, new libvantage_1.MemoryStream(buffer)) || this;
            _this.buffer = buffer;
            _this.header = header;
            return _this;
        }
        AstroSaveStream.create = function (buffer) {
            var header = buffer.slice(0, 0x10);
            var compressed = buffer.slice(0x10, buffer.length);
            var ms = new libvantage_1.MemoryStream();
            var deflateStream = new libvantage_1.DeflateStream(new libvantage_1.MemoryStream(compressed), libvantage_1.CompressionMode.Decompress);
            deflateStream.copyTo(ms);
            deflateStream.close();
            return new AstroSaveStream(ms.getBuffer(), header);
        };
        AstroSaveStream.prototype.getSaveData = function () {
            var ms = new libvantage_1.MemoryStream();
            var deflateStream = new libvantage_1.DeflateStream(new libvantage_1.MemoryStream(_super.prototype.getBuffer.call(this)), libvantage_1.CompressionMode.Compress, { windowBits: 12 });
            deflateStream.copyTo(ms);
            deflateStream.close();
            return Buffer.concat([this.header, ms.getBuffer()]);
        };
        return AstroSaveStream;
    }(libvantage_1.SaveStream));
    exports.AstroSaveStream = AstroSaveStream;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNhdmVkYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztJQUVBO1FBQXFDLDJDQUFVO1FBRTNDLHlCQUFvQixNQUFjLEVBQVUsTUFBYztZQUExRCxZQUNJLGtCQUFNLElBQUkseUJBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxTQUNsQztZQUZtQixZQUFNLEdBQU4sTUFBTSxDQUFRO1lBQVUsWUFBTSxHQUFOLE1BQU0sQ0FBUTs7UUFFMUQsQ0FBQztRQUVNLHNCQUFNLEdBQWIsVUFBYyxNQUFjO1lBRXhCLElBQU0sTUFBTSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JDLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVyRCxJQUFNLEVBQUUsR0FBRyxJQUFJLHlCQUFZLEVBQUUsQ0FBQztZQUM5QixJQUFNLGFBQWEsR0FBRyxJQUFJLDBCQUFhLENBQUMsSUFBSSx5QkFBWSxDQUFDLFVBQVUsQ0FBQyxFQUFFLDRCQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDbEcsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUN6QixhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDdEIsTUFBTSxDQUFDLElBQUksZUFBZSxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN2RCxDQUFDO1FBQ0QscUNBQVcsR0FBWDtZQUVJLElBQU0sRUFBRSxHQUFHLElBQUkseUJBQVksRUFBRSxDQUFDO1lBQzlCLElBQU0sYUFBYSxHQUFHLElBQUksMEJBQWEsQ0FBQyxJQUFJLHlCQUFZLENBQUMsaUJBQU0sU0FBUyxXQUFFLENBQUMsRUFBRSw0QkFBZSxDQUFDLFFBQVEsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUMsQ0FBQyxDQUFDO1lBQzFILGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDekIsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ3RCLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDTCxzQkFBQztJQUFELENBekJBLEFBeUJDLENBekJvQyx1QkFBVSxHQXlCOUM7SUF6QlksMENBQWUiLCJmaWxlIjoic2F2ZWRhdGEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdHJlYW0sIFNhdmVTdHJlYW0sIE1lbW9yeVN0cmVhbSwgRGVmbGF0ZVN0cmVhbSwgQ29tcHJlc3Npb25Nb2RlIH0gZnJvbSAnbGlidmFudGFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXN0cm9TYXZlU3RyZWFtIGV4dGVuZHMgU2F2ZVN0cmVhbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBidWZmZXI6IEJ1ZmZlciwgcHJpdmF0ZSBoZWFkZXI6IEJ1ZmZlcikge1xyXG4gICAgICAgIHN1cGVyKG5ldyBNZW1vcnlTdHJlYW0oYnVmZmVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhdGljIGNyZWF0ZShidWZmZXI6IEJ1ZmZlcik6IEFzdHJvU2F2ZVN0cmVhbSB7XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGJ1ZmZlci5zbGljZSgwLCAweDEwKTtcclxuICAgICAgICBjb25zdCBjb21wcmVzc2VkID0gYnVmZmVyLnNsaWNlKDB4MTAsIGJ1ZmZlci5sZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCBtcyA9IG5ldyBNZW1vcnlTdHJlYW0oKTtcclxuICAgICAgICBjb25zdCBkZWZsYXRlU3RyZWFtID0gbmV3IERlZmxhdGVTdHJlYW0obmV3IE1lbW9yeVN0cmVhbShjb21wcmVzc2VkKSwgQ29tcHJlc3Npb25Nb2RlLkRlY29tcHJlc3MpO1xyXG4gICAgICAgIGRlZmxhdGVTdHJlYW0uY29weVRvKG1zKTtcclxuICAgICAgICBkZWZsYXRlU3RyZWFtLmNsb3NlKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBBc3Ryb1NhdmVTdHJlYW0obXMuZ2V0QnVmZmVyKCksIGhlYWRlcik7XHJcbiAgICB9XHJcbiAgICBnZXRTYXZlRGF0YSgpOiBCdWZmZXIge1xyXG5cclxuICAgICAgICBjb25zdCBtcyA9IG5ldyBNZW1vcnlTdHJlYW0oKTtcclxuICAgICAgICBjb25zdCBkZWZsYXRlU3RyZWFtID0gbmV3IERlZmxhdGVTdHJlYW0obmV3IE1lbW9yeVN0cmVhbShzdXBlci5nZXRCdWZmZXIoKSksIENvbXByZXNzaW9uTW9kZS5Db21wcmVzcywgeyB3aW5kb3dCaXRzOiAxMn0pO1xyXG4gICAgICAgIGRlZmxhdGVTdHJlYW0uY29weVRvKG1zKTtcclxuICAgICAgICBkZWZsYXRlU3RyZWFtLmNsb3NlKCk7XHJcbiAgICAgICAgcmV0dXJuIEJ1ZmZlci5jb25jYXQoW3RoaXMuaGVhZGVyLCBtcy5nZXRCdWZmZXIoKV0pO1xyXG4gICAgfSAgIFxyXG59Il0sInNvdXJjZVJvb3QiOiJzcmMifQ==

define('text!editor.html', ['module'], function(module) { module.exports = "<template><require from=\"libvantage/vantage.css\"></require><header>Save Data</header><card label=\"Extract\"><v-button click.delegate=\"writeSaveToDisk()\">Extract File</v-button></card><card label=\"Inject\"><input type=\"file\" files.bind=\"selectedFiles\"></card></template>"; });