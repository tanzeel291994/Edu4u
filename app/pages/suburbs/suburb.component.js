"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SuburbComponent = (function () {
    function SuburbComponent() {
        this.suburbSelectedEvent = new core_1.EventEmitter();
        this.myItems = suburbs;
    }
    //zoneArg:string;
    SuburbComponent.prototype.ngOnInit = function () {
        // this.zoneArg=this.zoneParam;
        if (this.zoneParam != null)
            this.myItems = suburbs;
    };
    SuburbComponent.prototype.onSuburbItemTap = function (args) {
        var lbl = args.view.getViewById("sub" + args.index);
        console.log(lbl.text);
        this.suburbSelectedEvent.emit(lbl.text);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SuburbComponent.prototype, "zoneParam", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", core_1.EventEmitter)
    ], SuburbComponent.prototype, "suburbSelectedEvent", void 0);
    SuburbComponent = __decorate([
        core_1.Component({
            selector: "my-suburb",
            templateUrl: './pages/suburbs/suburb.component.html',
            animations: []
        }),
        __metadata("design:paramtypes", [])
    ], SuburbComponent);
    return SuburbComponent;
}());
exports.SuburbComponent = SuburbComponent;
var suburbs = [
    "Malad",
    "Andheri",
    "Powai",
    "Goregaon",
    "Jogeshwari",
    "Vashi"
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VidXJiLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN1YnVyYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxzQ0FBd0c7QUFpQnhHO0lBVUU7UUFEVSx3QkFBbUIsR0FBd0IsSUFBSSxtQkFBWSxFQUFVLENBQUM7UUFFN0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7SUFDMUIsQ0FBQztJQVhDLGlCQUFpQjtJQUNqQixrQ0FBUSxHQUFSO1FBQ0UsK0JBQStCO1FBQzlCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUUsSUFBSSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUMsT0FBTyxDQUFDO0lBQ3pCLENBQUM7SUFPSSx5Q0FBZSxHQUF0QixVQUF1QixJQUFrQjtRQUV2QyxJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFWUTtRQUFSLFlBQUssRUFBRTs7c0RBQWtCO0lBQ2hCO1FBQVQsYUFBTSxFQUFFO2tDQUFxQixtQkFBWTtnRUFBc0M7SUFUckUsZUFBZTtRQUwzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsV0FBVyxFQUFFLHVDQUF1QztZQUNwRCxVQUFVLEVBQUUsRUFBRTtTQUNmLENBQUM7O09BQ1csZUFBZSxDQW9CekI7SUFBRCxzQkFBQztDQUFBLEFBcEJILElBb0JHO0FBcEJVLDBDQUFlO0FBc0J4QixJQUFNLE9BQU8sR0FBVTtJQUNyQixPQUFPO0lBQ1AsU0FBUztJQUNULE9BQU87SUFDUCxVQUFVO0lBQ1YsWUFBWTtJQUNaLE9BQU87Q0FFUixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXRlbUV2ZW50RGF0YSB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvbGlzdC12aWV3JztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvY29yZS92aWV3JztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIE9uSW5pdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEV2ZW50RW1pdHRlciwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEV2ZW50RGF0YSB9IGZyb20gXCJkYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0IHtMYWJlbH0gZnJvbSBcInVpL2xhYmVsXCI7XHJcbmltcG9ydCB7XHJcbiAgdHJpZ2dlcixcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIGFuaW1hdGVcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJ1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktc3VidXJiXCIsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BhZ2VzL3N1YnVyYnMvc3VidXJiLmNvbXBvbmVudC5odG1sJyxcclxuICBhbmltYXRpb25zIDpbXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU3VidXJiQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIC8vem9uZUFyZzpzdHJpbmc7XHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgLy8gdGhpcy56b25lQXJnPXRoaXMuem9uZVBhcmFtO1xyXG4gICAgICAgaWYodGhpcy56b25lUGFyYW0hPW51bGwpIFxyXG4gICAgICAgIHRoaXMubXlJdGVtcz1zdWJ1cmJzO1xyXG4gICAgfVxyXG4gIHB1YmxpYyBteUl0ZW1zOiBBcnJheTxTdHJpbmc+O1xyXG4gIEBJbnB1dCgpIHpvbmVQYXJhbTpzdHJpbmc7XHJcbiAgQE91dHB1dCgpIHN1YnVyYlNlbGVjdGVkRXZlbnQ6RXZlbnRFbWl0dGVyPHN0cmluZz4gPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICB0aGlzLm15SXRlbXMgPSBzdWJ1cmJzO1xyXG4gIH1cclxuICBwdWJsaWMgb25TdWJ1cmJJdGVtVGFwKGFyZ3M6SXRlbUV2ZW50RGF0YSlcclxuICB7XHJcbiAgICBsZXQgbGJsID0gPExhYmVsPmFyZ3Mudmlldy5nZXRWaWV3QnlJZChcInN1YlwiICsgYXJncy5pbmRleCk7XHJcbiAgICBjb25zb2xlLmxvZyhsYmwudGV4dCk7XHJcbiAgICB0aGlzLnN1YnVyYlNlbGVjdGVkRXZlbnQuZW1pdChsYmwudGV4dCk7XHJcbiAgfVxyXG4gXHJcbiAgfVxyXG4gXHJcbiAgICBjb25zdCBzdWJ1cmJzOnN0cmluZ1tdPVtcclxuICAgICAgXCJNYWxhZFwiLFxyXG4gICAgICBcIkFuZGhlcmlcIixcclxuICAgICAgXCJQb3dhaVwiLFxyXG4gICAgICBcIkdvcmVnYW9uXCIsXHJcbiAgICAgIFwiSm9nZXNod2FyaVwiLFxyXG4gICAgICBcIlZhc2hpXCJcclxuICAgICAgXHJcbiAgICBdO1xyXG5cclxuICAgIFxyXG4iXX0=