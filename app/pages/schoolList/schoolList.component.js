"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SchoolListComponent = (function () {
    function SchoolListComponent() {
    }
    SchoolListComponent.prototype.ngOnInit = function () {
        // this.zoneArg=this.zoneParam;
        console.log(this.boardParam);
        if (this.boardParam != null)
            this.schoolsList = schools;
    };
    SchoolListComponent.prototype.onSchoolItemTap = function (args) {
        // let lbl = <Label>args.view.getViewById("sub" + args.index);
        console.log("in");
        //this.suburbSelectedEvent.emit(lbl.text);
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], SchoolListComponent.prototype, "boardParam", void 0);
    SchoolListComponent = __decorate([
        core_1.Component({
            selector: 'my-school-list',
            templateUrl: './pages/schoolList/schoolList.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], SchoolListComponent);
    return SchoolListComponent;
}());
exports.SchoolListComponent = SchoolListComponent;
var schools = [
    "Rajhans Vidayalaya",
    "Jhanki Devi",
    "Oberio International",
    "Ryan International",
    "Gyan Kendra",
    "Wadia"
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sTGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzY2hvb2xMaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBLHNDQUFnRTtBQU1oRTtJQUdFO0lBQWUsQ0FBQztJQUNoQixzQ0FBUSxHQUFSO1FBQ0UsK0JBQStCO1FBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQzVCLEVBQUUsQ0FBQSxDQUFDLElBQUksQ0FBQyxVQUFVLElBQUUsSUFBSSxDQUFDO1lBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUMsT0FBTyxDQUFDO0lBQzdCLENBQUM7SUFDTSw2Q0FBZSxHQUF0QixVQUF1QixJQUFrQjtRQUV4Qyw4REFBOEQ7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsQiwwQ0FBMEM7SUFDNUMsQ0FBQztJQWJNO1FBQVIsWUFBSyxFQUFFOzsyREFBbUI7SUFGZCxtQkFBbUI7UUFKL0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDhDQUE4QztTQUM1RCxDQUFDOztPQUNXLG1CQUFtQixDQWdCL0I7SUFBRCwwQkFBQztDQUFBLEFBaEJELElBZ0JDO0FBaEJZLGtEQUFtQjtBQWtCaEMsSUFBTSxPQUFPLEdBQVU7SUFDckIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsb0JBQW9CO0lBQ3BCLGFBQWE7SUFDYixPQUFPO0NBQ1IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEl0ZW1FdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL2xpc3Qtdmlldyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT3V0cHV0LCBPbkluaXQsIElucHV0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbXktc2Nob29sLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9zY2hvb2xMaXN0L3NjaG9vbExpc3QuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hvb2xMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0ICB7XHJcbnNjaG9vbHNMaXN0OnN0cmluZ1tdO1xyXG5ASW5wdXQoKSBib2FyZFBhcmFtOnN0cmluZztcclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyB0aGlzLnpvbmVBcmc9dGhpcy56b25lUGFyYW07XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJvYXJkUGFyYW0pO1xyXG4gICAgIGlmKHRoaXMuYm9hcmRQYXJhbSE9bnVsbCkgXHJcbiAgICAgIHRoaXMuc2Nob29sc0xpc3Q9c2Nob29scztcclxuICB9XHJcbiAgcHVibGljIG9uU2Nob29sSXRlbVRhcChhcmdzOkl0ZW1FdmVudERhdGEpXHJcbiAge1xyXG4gICAvLyBsZXQgbGJsID0gPExhYmVsPmFyZ3Mudmlldy5nZXRWaWV3QnlJZChcInN1YlwiICsgYXJncy5pbmRleCk7XHJcbiAgICBjb25zb2xlLmxvZyhcImluXCIpO1xyXG4gICAgLy90aGlzLnN1YnVyYlNlbGVjdGVkRXZlbnQuZW1pdChsYmwudGV4dCk7XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBzY2hvb2xzOnN0cmluZ1tdPVtcclxuICBcIlJhamhhbnMgVmlkYXlhbGF5YVwiLFxyXG4gIFwiSmhhbmtpIERldmlcIixcclxuICBcIk9iZXJpbyBJbnRlcm5hdGlvbmFsXCIsXHJcbiAgXCJSeWFuIEludGVybmF0aW9uYWxcIixcclxuICBcIkd5YW4gS2VuZHJhXCIsXHJcbiAgXCJXYWRpYVwiXHJcbl07Il19