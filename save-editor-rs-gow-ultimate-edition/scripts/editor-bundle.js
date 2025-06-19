define('editor',["require", "exports", "tslib", "./savedata", "./file-utils", "aurelia-framework"], function (require, exports, tslib_1, savedata_1, file_utils_1, aurelia_framework_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Editor = (function () {
        function Editor() {
        }
        Editor.prototype.load = function (buffer) {
            this.buffer = buffer;
            this.stream = savedata_1.GoWUltimateStream.create(buffer);
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXRvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFJQTtRQUFBO1FBeUJBLENBQUM7UUFuQlUscUJBQUksR0FBWCxVQUFZLE1BQWM7WUFDdEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFFM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyw0QkFBaUIsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsQ0FBQztRQUVNLHFCQUFJLEdBQVg7WUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN4QyxDQUFDO1FBQ00sZ0NBQWUsR0FBdEI7WUFDQyx1QkFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQztRQUNyQyxDQUFDO1FBRU0scUNBQW9CLEdBQTNCO1lBQ0MsRUFBRSxDQUFBLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZCLCtCQUFrQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ3hELENBQUM7UUFDRixDQUFDO1FBcEJXO1lBQVgsOEJBQVU7O3FEQUF1QjtRQXFCbkMsYUFBQztLQXpCRCxBQXlCQyxJQUFBO0lBekJZLHdCQUFNIiwiZmlsZSI6ImVkaXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdvV1VsdGltYXRlU3RyZWFtIH0gZnJvbSAnLi9zYXZlZGF0YSc7XHJcbmltcG9ydCB7c2F2ZUZpbGVBcywgaW5qZWN0RmlsZVRvU3RyZWFtfSBmcm9tICcuL2ZpbGUtdXRpbHMnO1xyXG5pbXBvcnQge29ic2VydmFibGV9IGZyb20gJ2F1cmVsaWEtZnJhbWV3b3JrJztcclxuXHJcbmV4cG9ydCBjbGFzcyBFZGl0b3Ige1xyXG4gICAgcHJpdmF0ZSBidWZmZXI6IEJ1ZmZlcjtcclxuXHJcblx0c3RyZWFtOiBHb1dVbHRpbWF0ZVN0cmVhbTtcclxuXHRAb2JzZXJ2YWJsZVx0c2VsZWN0ZWRGaWxlczogRmlsZVtdO1xyXG5cclxuICAgIHB1YmxpYyBsb2FkKGJ1ZmZlcjogQnVmZmVyKSB7XHJcbiAgICAgICAgdGhpcy5idWZmZXIgPSBidWZmZXI7XHJcblxyXG5cdFx0dGhpcy5zdHJlYW0gPSBHb1dVbHRpbWF0ZVN0cmVhbS5jcmVhdGUoYnVmZmVyKTsgXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNhdmUoKTogQnVmZmVyIHtcclxuICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLnN0cmVhbS5nZXRTYXZlRGF0YSgpO1xyXG5cdH1cclxuXHRwdWJsaWMgd3JpdGVTYXZlVG9EaXNrKCkge1xyXG5cdFx0c2F2ZUZpbGVBcyh0aGlzLnN0cmVhbS5nZXRCdWZmZXIoKSk7XHJcblx0fVxyXG5cclxuXHRwdWJsaWMgc2VsZWN0ZWRGaWxlc0NoYW5nZWQoKTogdm9pZCB7XHJcblx0XHRpZih0aGlzLnNlbGVjdGVkRmlsZXMpIHtcdFxyXG5cdFx0XHRpbmplY3RGaWxlVG9TdHJlYW0odGhpcy5zZWxlY3RlZEZpbGVzWzBdLCB0aGlzLnN0cmVhbSk7XHRcdFx0XHJcblx0XHR9XHJcblx0fVx0XHJcbn0iXSwic291cmNlUm9vdCI6InNyYyJ9

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
    var GoWUltimateStream = (function (_super) {
        tslib_1.__extends(GoWUltimateStream, _super);
        function GoWUltimateStream(buffer, endianess) {
            if (endianess === void 0) { endianess = libvantage_1.Endianness.Big; }
            var _this = _super.call(this, new libvantage_1.MemoryStream(buffer)) || this;
            _this.buffer = buffer;
            return _this;
        }
        GoWUltimateStream.create = function (buffer) {
            var signature = buffer.slice(0, 0x80);
            var signedData = buffer.slice(0x80, buffer.length);
            if (!libvantage_1.verifyRsa1Signature(signature, signedData, GoWUltimateStream.rsaPublicKey)) {
                throw Error("Invalid save data");
            }
            var saveData = signedData.slice(0x4, signedData.length);
            var ms = new libvantage_1.MemoryStream();
            var deflateStream = new libvantage_1.DeflateStream(new libvantage_1.MemoryStream(saveData), libvantage_1.CompressionMode.Decompress);
            deflateStream.copyTo(ms);
            deflateStream.close();
            return new GoWUltimateStream(ms.getBuffer());
        };
        GoWUltimateStream.prototype.getSaveData = function () {
            var saveData = _super.prototype.getBuffer.call(this);
            var ms = new libvantage_1.MemoryStream();
            var deflateStream = new libvantage_1.DeflateStream(new libvantage_1.MemoryStream(_super.prototype.getBuffer.call(this)), libvantage_1.CompressionMode.Compress, { windowBits: 12, level: 1 });
            deflateStream.copyTo(ms);
            deflateStream.close();
            var outStream = new libvantage_1.BinaryStream(new libvantage_1.MemoryStream(), libvantage_1.Endianness.Big);
            outStream.writeUInt32(saveData.length);
            outStream.writeBytes(ms.getBuffer());
            var saveBuffer = outStream.getBuffer();
            var signature = libvantage_1.privateKeySign(saveBuffer, GoWUltimateStream.rsaSigningKey);
            return Buffer.concat([signature, saveBuffer]);
        };
        GoWUltimateStream.rsaSigningKey = '-----BEGIN RSA PRIVATE KEY-----\n' +
            'MIICXQIBAAKBgQD4/IKyJiezUtPUsoP+gpkAFhrTtr1gTybrI/XEIVbwBjDSwIU4\n' +
            'BrTS/+JvcPIK+6kBJughKMWMXQ/DlffzVXr2xVwWJ9/QadPiJCAAwtDTCTqhNW3z\n' +
            'oHmFJq1ZCVRd93fiqWx0/VeruwU4K2PA1QfCmnAOOXYp//QHPob2O8n5WQIDAQAB\n' +
            'AoGAFvdLot0MGmlQarUQocAwFqbzUIXxj9mdMGE/wRiGKVuY00e4wgM0WKYLn9Xe\n' +
            'LY8q9pU9IhndpuXKl3LUzRgcYEoerXhK3gDiCycoMV6o4b2hMzeV8okg5MjZ5AvR\n' +
            '7PAPFugwbvKdKhZ9Jh6W/W4afQ3V4GbFa3WGu3S0IRAja4ECQQD9jAO0gKg4fk3K\n' +
            'ckAOrcB7FRacFfQedccMo6UiFMt3jstJGSxGrQ+wR30YZGQolVa9elikKxn9A5P8\n' +
            'ShHmP2/xAkEA+2UzUJa/r5MnSwLk9e/QLDIgJH7pZgDzg8E/dKcrFXx3qox95uWy\n' +
            '96yNurzJ2HN5MHmd1xx4BeVFVXtd3VWH6QJAEjHdBjQBXmR58qA2Rpdja7G8uKC+\n' +
            'rvzmttp7fDGf1EmT/v/mdH/w00aeDIUPxvXIjrpb6BQLvmNmWEF8fVhqEQJBAMjg\n' +
            'SYuYmVxi+h+/FVLLKA1YlER1QGxoUCy0as78kLmfdkNJ9YRdgI7VS36uQZ76ThkE\n' +
            '5LGxJtqXI7q1VAB6ypkCQQDfHe9U+DxND5Z+aJLkotx+rmKbSHX48TLDZUd1B2Up\n' +
            'EpzJrL72OVGHgpng6qPWxOTPlAHBhObb+0QJOaOxKw7C\n' +
            '-----END RSA PRIVATE KEY-----';
        GoWUltimateStream.rsaPublicKey = '-----BEGIN RSA PUBLIC KEY-----\n' +
            'MIGJAoGBAPj8grImJ7NS09Syg/6CmQAWGtO2vWBPJusj9cQhVvAGMNLAhTgGtNL/\n' +
            '4m9w8gr7qQEm6CEoxYxdD8OV9/NVevbFXBYn39Bp0+IkIADC0NMJOqE1bfOgeYUm\n' +
            'rVkJVF33d+KpbHT9V6u7BTgrY8DVB8KacA45din/9Ac+hvY7yflZAgMBAAE=\n' +
            '-----END RSA PUBLIC KEY-----';
        return GoWUltimateStream;
    }(libvantage_1.SaveStream));
    exports.GoWUltimateStream = GoWUltimateStream;
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LG9FQUFvRTtZQUNwRSxnREFBZ0Q7WUFDaEQsK0JBQStCLENBQUM7UUFFakIsOEJBQVksR0FDM0Isa0NBQWtDO1lBQ2xDLG9FQUFvRTtZQUNwRSxvRUFBb0U7WUFDcEUsZ0VBQWdFO1lBQ2hFLDhCQUE4QixDQUFDO1FBdUNuQyx3QkFBQztLQS9ERCxBQStEQyxDQS9Ec0MsdUJBQVUsR0ErRGhEO0lBL0RZLDhDQUFpQiIsImZpbGUiOiJzYXZlZGF0YS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQge0JpbmFyeVN0cmVhbSwgTWVtb3J5U3RyZWFtLCBwcml2YXRlS2V5U2lnbiwgdmVyaWZ5UnNhMVNpZ25hdHVyZSwgU2F2ZVN0cmVhbSwgRGVmbGF0ZVN0cmVhbSwgQ29tcHJlc3Npb25Nb2RlLCBFbmRpYW5uZXNzIH0gZnJvbSAnbGlidmFudGFnZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgR29XVWx0aW1hdGVTdHJlYW0gZXh0ZW5kcyBTYXZlU3RyZWFtIHtcclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyByc2FTaWduaW5nS2V5OiBzdHJpbmcgPSBcclxuICAgICctLS0tLUJFR0lOIFJTQSBQUklWQVRFIEtFWS0tLS0tXFxuJyArXHJcbiAgICAnTUlJQ1hRSUJBQUtCZ1FENC9JS3lKaWV6VXRQVXNvUCtncGtBRmhyVHRyMWdUeWJySS9YRUlWYndCakRTd0lVNFxcbicgK1xyXG4gICAgJ0JyVFMvK0p2Y1BJSys2a0JKdWdoS01XTVhRL0RsZmZ6VlhyMnhWd1dKOS9RYWRQaUpDQUF3dERUQ1RxaE5XM3pcXG4nICtcclxuICAgICdvSG1GSnExWkNWUmQ5M2ZpcVd4MC9WZXJ1d1U0SzJQQTFRZkNtbkFPT1hZcC8vUUhQb2IyTzhuNVdRSURBUUFCXFxuJyArXHJcbiAgICAnQW9HQUZ2ZExvdDBNR21sUWFyVVFvY0F3RnFielVJWHhqOW1kTUdFL3dSaUdLVnVZMDBlNHdnTTBXS1lMbjlYZVxcbicgK1xyXG4gICAgJ0xZOHE5cFU5SWhuZHB1WEtsM0xVelJnY1lFb2VyWGhLM2dEaUN5Y29NVjZvNGIyaE16ZVY4b2tnNU1qWjVBdlJcXG4nICtcclxuICAgICc3UEFQRnVnd2J2S2RLaFo5Smg2Vy9XNGFmUTNWNEdiRmEzV0d1M1MwSVJBamE0RUNRUUQ5akFPMGdLZzRmazNLXFxuJyArXHJcbiAgICAnY2tBT3JjQjdGUmFjRmZRZWRjY01vNlVpRk10M2pzdEpHU3hHclErd1IzMFlaR1FvbFZhOWVsaWtLeG45QTVQOFxcbicgK1xyXG4gICAgJ1NoSG1QMi94QWtFQSsyVXpVSmEvcjVNblN3TGs5ZS9RTERJZ0pIN3BaZ0R6ZzhFL2RLY3JGWHgzcW94OTV1V3lcXG4nICtcclxuICAgICc5NnlOdXJ6SjJITjVNSG1kMXh4NEJlVkZWWHRkM1ZXSDZRSkFFakhkQmpRQlhtUjU4cUEyUnBkamE3Rzh1S0MrXFxuJyArXHJcbiAgICAncnZ6bXR0cDdmREdmMUVtVC92L21kSC93MDBhZURJVVB4dlhJanJwYjZCUUx2bU5tV0VGOGZWaHFFUUpCQU1qZ1xcbicgK1xyXG4gICAgJ1NZdVltVnhpK2grL0ZWTExLQTFZbEVSMVFHeG9VQ3kwYXM3OGtMbWZka05KOVlSZGdJN1ZTMzZ1UVo3NlRoa0VcXG4nICtcclxuICAgICc1TEd4SnRxWEk3cTFWQUI2eXBrQ1FRRGZIZTlVK0R4TkQ1WithSkxrb3R4K3JtS2JTSFg0OFRMRFpVZDFCMlVwXFxuJyArXHJcbiAgICAnRXB6SnJMNzJPVkdIZ3BuZzZxUFd4T1RQbEFIQmhPYmIrMFFKT2FPeEt3N0NcXG4nICtcclxuICAgICctLS0tLUVORCBSU0EgUFJJVkFURSBLRVktLS0tLSc7XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgcnNhUHVibGljS2V5OiBzdHJpbmcgPSBcclxuICAgICctLS0tLUJFR0lOIFJTQSBQVUJMSUMgS0VZLS0tLS1cXG4nICtcclxuICAgICdNSUdKQW9HQkFQajhnckltSjdOUzA5U3lnLzZDbVFBV0d0TzJ2V0JQSnVzajljUWhWdkFHTU5MQWhUZ0d0TkwvXFxuJyArXHJcbiAgICAnNG05dzhncjdxUUVtNkNFb3hZeGREOE9WOS9OVmV2YkZYQlluMzlCcDArSWtJQURDME5NSk9xRTFiZk9nZVlVbVxcbicgK1xyXG4gICAgJ3JWa0pWRjMzZCtLcGJIVDlWNnU3QlRnclk4RFZCOEthY0E0NWRpbi85QWMraHZZN3lmbFpBZ01CQUFFPVxcbicgK1xyXG4gICAgJy0tLS0tRU5EIFJTQSBQVUJMSUMgS0VZLS0tLS0nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYnVmZmVyOiBCdWZmZXIsIGVuZGlhbmVzczpFbmRpYW5uZXNzID0gRW5kaWFubmVzcy5CaWcpIHtcclxuICAgICAgICBzdXBlcihuZXcgTWVtb3J5U3RyZWFtKGJ1ZmZlcikpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBjcmVhdGUoYnVmZmVyOiBCdWZmZXIpOiBHb1dVbHRpbWF0ZVN0cmVhbSB7XHJcbiAgICAgICAgY29uc3Qgc2lnbmF0dXJlID0gYnVmZmVyLnNsaWNlKDAsIDB4ODApO1xyXG5cclxuICAgICAgICBjb25zdCBzaWduZWREYXRhID0gYnVmZmVyLnNsaWNlKDB4ODAsIGJ1ZmZlci5sZW5ndGgpO1xyXG4gICAgICAgIGlmKCF2ZXJpZnlSc2ExU2lnbmF0dXJlKHNpZ25hdHVyZSwgc2lnbmVkRGF0YSwgR29XVWx0aW1hdGVTdHJlYW0ucnNhUHVibGljS2V5KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihcIkludmFsaWQgc2F2ZSBkYXRhXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBzYXZlRGF0YSA9IHNpZ25lZERhdGEuc2xpY2UoMHg0LCBzaWduZWREYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgY29uc3QgbXMgPSBuZXcgTWVtb3J5U3RyZWFtKCk7XHJcbiAgICAgICAgY29uc3QgZGVmbGF0ZVN0cmVhbSA9IG5ldyBEZWZsYXRlU3RyZWFtKG5ldyBNZW1vcnlTdHJlYW0oc2F2ZURhdGEpLCBDb21wcmVzc2lvbk1vZGUuRGVjb21wcmVzcyk7XHJcbiAgICAgICAgZGVmbGF0ZVN0cmVhbS5jb3B5VG8obXMpO1xyXG4gICAgICAgIGRlZmxhdGVTdHJlYW0uY2xvc2UoKTsgXHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgR29XVWx0aW1hdGVTdHJlYW0obXMuZ2V0QnVmZmVyKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFNhdmVEYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHNhdmVEYXRhID0gc3VwZXIuZ2V0QnVmZmVyKCk7XHJcbiAgICAgXHJcbiAgICAgICAgY29uc3QgbXMgPSBuZXcgTWVtb3J5U3RyZWFtKCk7XHJcbiAgICAgICAgY29uc3QgZGVmbGF0ZVN0cmVhbSA9IG5ldyBEZWZsYXRlU3RyZWFtKG5ldyBNZW1vcnlTdHJlYW0oc3VwZXIuZ2V0QnVmZmVyKCkpLCBDb21wcmVzc2lvbk1vZGUuQ29tcHJlc3MsIHt3aW5kb3dCaXRzOjEyLCBsZXZlbDogMX0pO1xyXG4gICAgICAgIGRlZmxhdGVTdHJlYW0uY29weVRvKG1zKTtcclxuICAgICAgICBkZWZsYXRlU3RyZWFtLmNsb3NlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IG91dFN0cmVhbSA9IG5ldyBCaW5hcnlTdHJlYW0obmV3IE1lbW9yeVN0cmVhbSgpLCBFbmRpYW5uZXNzLkJpZyk7XHJcbiAgICAgICAgb3V0U3RyZWFtLndyaXRlVUludDMyKHNhdmVEYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgb3V0U3RyZWFtLndyaXRlQnl0ZXMobXMuZ2V0QnVmZmVyKCkpO1xyXG5cclxuICAgICAgICBjb25zdCBzYXZlQnVmZmVyID0gb3V0U3RyZWFtLmdldEJ1ZmZlcigpO1xyXG4gICAgICAgIGNvbnN0IHNpZ25hdHVyZSA9IHByaXZhdGVLZXlTaWduKHNhdmVCdWZmZXIsIEdvV1VsdGltYXRlU3RyZWFtLnJzYVNpZ25pbmdLZXkpOyAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiBCdWZmZXIuY29uY2F0KFtzaWduYXR1cmUsIHNhdmVCdWZmZXJdKTtcclxuICAgIH1cclxufSJdLCJzb3VyY2VSb290Ijoic3JjIn0=

define('text!editor.html', ['module'], function(module) { module.exports = "<template><require from=\"libvantage/vantage.css\"></require><header>Save Data</header><card label=\"Extract\"><v-button click.delegate=\"writeSaveToDisk()\">Extract File</v-button></card><card label=\"Inject\"><input type=\"file\" files.bind=\"selectedFiles\"></card></template>"; });