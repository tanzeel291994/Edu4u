"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ZoneComponent = (function () {
    function ZoneComponent() {
        this.zoneSelectedEvent = new core_1.EventEmitter();
    }
    ZoneComponent.prototype.onTappedZone = function (args) {
        var button = args.object;
        //Object.keys(args.object)
        //this.state='out' ;
        // console.log(button.id);
        //this.isPressed=true;
        this.zoneSelectedEvent.emit(button.text);
        console.log(button.text);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ZoneComponent.prototype, "selectedZone", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], ZoneComponent.prototype, "zoneSelectedEvent", void 0);
    ZoneComponent = __decorate([
        core_1.Component({
            selector: "my-zone",
            templateUrl: './pages/zone/zone.component.html',
            animations: []
        }),
        __metadata("design:paramtypes", [])
    ], ZoneComponent);
    return ZoneComponent;
}());
exports.ZoneComponent = ZoneComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiem9uZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ6b25lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF3RztBQWlCeEc7SUFLRTtRQURVLHNCQUFpQixHQUF3QixJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUMvRCxDQUFDO0lBQ1Qsb0NBQVksR0FBbkIsVUFBb0IsSUFBZTtRQUNoQyxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ2pDLDBCQUEwQjtRQUMxQixvQkFBb0I7UUFDckIsMEJBQTBCO1FBQzFCLHNCQUFzQjtRQUN0QixJQUFJLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUU3QixDQUFDO0lBWlM7UUFBUixZQUFLLEVBQUU7O3VEQUFxQjtJQUNuQjtRQUFULGFBQU0sRUFBRTtrQ0FBbUIsbUJBQVk7NERBQXNDO0lBSm5FLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsVUFBVSxFQUFFLEVBQUU7U0FDZixDQUFDOztPQUNXLGFBQWEsQ0FpQnZCO0lBQUQsb0JBQUM7Q0FBQSxBQWpCSCxJQWlCRztBQWpCVSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBPbkluaXQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBFdmVudEVtaXR0ZXIsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7QnV0dG9ufSBmcm9tIFwidWkvYnV0dG9uXCI7XHJcbmltcG9ydCB7XHJcbiAgdHJpZ2dlcixcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIGFuaW1hdGVcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktem9uZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlcy96b25lL3pvbmUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnMgOltdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBab25lQ29tcG9uZW50ICB7XHJcbiAgcHVibGljIG15SXRlbXM6IEFycmF5PFN0cmluZz47XHJcbiBcclxuICBASW5wdXQoKSBzZWxlY3RlZFpvbmU6c3RyaW5nO1xyXG4gIEBPdXRwdXQoKSB6b25lU2VsZWN0ZWRFdmVudDpFdmVudEVtaXR0ZXI8c3RyaW5nPiA9IG5ldyBFdmVudEVtaXR0ZXI8c3RyaW5nPigpO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBwdWJsaWMgb25UYXBwZWRab25lKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gICAgIGxldCBidXR0b24gPSA8QnV0dG9uPmFyZ3Mub2JqZWN0O1xyXG4gICAgIC8vT2JqZWN0LmtleXMoYXJncy5vYmplY3QpXHJcbiAgICAgLy90aGlzLnN0YXRlPSdvdXQnIDtcclxuICAgIC8vIGNvbnNvbGUubG9nKGJ1dHRvbi5pZCk7XHJcbiAgICAvL3RoaXMuaXNQcmVzc2VkPXRydWU7XHJcbiAgICB0aGlzLnpvbmVTZWxlY3RlZEV2ZW50LmVtaXQoYnV0dG9uLnRleHQpO1xyXG4gICAgIGNvbnNvbGUubG9nKGJ1dHRvbi50ZXh0KTtcclxuICAgIFxyXG4gfVxyXG4gXHJcbiAgfVxyXG4gXHJcblxyXG4gICAgXHJcbiJdfQ==