"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SchoolComponent = (function () {
    function SchoolComponent() {
        this.zoneSelected = null;
        this.suburbSelected = null;
        this.boardSelected = null;
        this.schoolSelected = null;
        this.menuBackTo = null;
        this.menuTo = null;
        this.menuTo = "zone";
    }
    SchoolComponent.prototype.suburbSelectedEvent = function (suburbSelected) {
        // let button = <Button>args.object;
        //Object.keys(args.object)
        //this.state='out' ;
        // console.log(button.id);
        this.suburbSelected = suburbSelected;
        this.menuTo = 'board';
        // this.zoneSelected=null;
    };
    SchoolComponent.prototype.onTappedBoard = function (args) {
        var button = args.object;
        this.boardSelected = button.text;
        this.menuTo = "school";
        //this.schoolSelected="vz";
    };
    SchoolComponent.prototype.clearZone = function (args) {
        this.menuTo = "zone";
        this.zoneSelected = null;
    };
    SchoolComponent.prototype.clearSuburb = function (args) {
        this.suburbSelected = null;
        // this.zoneSelected=null;
        this.menuTo = "suburb";
        //this.isPressed=false;
    };
    SchoolComponent.prototype.clearBoard = function (args) {
        var lbl = args.object;
        //console.log();
        this.boardSelected = null;
        this.menuTo = "board";
        //console.log(lbl.getpare);
    };
    SchoolComponent.prototype.zoneSelectedEvent = function (zoneSelected) {
        console.log("zone:" + zoneSelected);
        this.zoneSelected = zoneSelected;
        this.menuTo = 'suburb';
        //this.zoneToSuburbSelectionEvent.emit(zoneSelected);
    };
    SchoolComponent = __decorate([
        core_1.Component({
            selector: 'app-school',
            templateUrl: './pages/schools/school.component.html',
            styles: [".mdi {\n    font-family: \"MaterialIcons-Regular\";\n  }"]
        }),
        __metadata("design:paramtypes", [])
    ], SchoolComponent);
    return SchoolComponent;
}());
exports.SchoolComponent = SchoolComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nob29sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNjaG9vbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxzQ0FBb0Q7QUFXcEQ7SUFPQztRQU5BLGlCQUFZLEdBQVEsSUFBSSxDQUFDO1FBQ3pCLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBQzNCLGtCQUFhLEdBQVEsSUFBSSxDQUFDO1FBQzFCLG1CQUFjLEdBQVEsSUFBSSxDQUFDO1FBQzNCLGVBQVUsR0FBUSxJQUFJLENBQUM7UUFDdkIsV0FBTSxHQUFRLElBQUksQ0FBQztRQUVsQixJQUFJLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQztJQUNuQixDQUFDO0lBQ00sNkNBQW1CLEdBQTFCLFVBQTJCLGNBQXNCO1FBQ2hELG9DQUFvQztRQUNuQywwQkFBMEI7UUFDMUIsb0JBQW9CO1FBQ3JCLDBCQUEwQjtRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFDLGNBQWMsQ0FBQztRQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFDLE9BQU8sQ0FBQztRQUNyQiwwQkFBMEI7SUFDM0IsQ0FBQztJQUNNLHVDQUFhLEdBQXBCLFVBQXFCLElBQWM7UUFFaEMsSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNqQyxJQUFJLENBQUMsYUFBYSxHQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUM7UUFDckIsMkJBQTJCO0lBQzlCLENBQUM7SUFDTSxtQ0FBUyxHQUFoQixVQUFpQixJQUFlO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxZQUFZLEdBQUMsSUFBSSxDQUFDO0lBQ3ZCLENBQUM7SUFDTSxxQ0FBVyxHQUFsQixVQUFtQixJQUFlO1FBRTlCLElBQUksQ0FBQyxjQUFjLEdBQUMsSUFBSSxDQUFDO1FBQzFCLDBCQUEwQjtRQUN6QixJQUFJLENBQUMsTUFBTSxHQUFDLFFBQVEsQ0FBQztRQUNyQix1QkFBdUI7SUFDekIsQ0FBQztJQUNJLG9DQUFVLEdBQWpCLFVBQWtCLElBQWU7UUFDL0IsSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLE1BQU0sQ0FBQTtRQUM1QixnQkFBZ0I7UUFDaEIsSUFBSSxDQUFDLGFBQWEsR0FBQyxJQUFJLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sR0FBQyxPQUFPLENBQUM7UUFDcEIsMkJBQTJCO0lBQzVCLENBQUM7SUFDSywyQ0FBaUIsR0FBeEIsVUFBeUIsWUFBb0I7UUFDMUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLEdBQUMsWUFBWSxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLFlBQVksR0FBQyxZQUFZLENBQUM7UUFDL0IsSUFBSSxDQUFDLE1BQU0sR0FBQyxRQUFRLENBQUM7UUFDdEIscURBQXFEO0lBQ3RELENBQUM7SUFqRFcsZUFBZTtRQVAzQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFlBQVk7WUFDdEIsV0FBVyxFQUFDLHVDQUF1QztZQUNuRCxNQUFNLEVBQUMsQ0FBQywwREFFTixDQUFFO1NBQ0wsQ0FBQzs7T0FDVyxlQUFlLENBa0QzQjtJQUFELHNCQUFDO0NBQUEsQUFsREQsSUFrREM7QUFsRFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24gfSBmcm9tICd1aS9idXR0b24nO1xyXG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gJ3VpL2ltYWdlJztcclxuaW1wb3J0IHsgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbXBvbmVudCAsRGlyZWN0aXZlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge1pvbmVDb21wb25lbnR9IGZyb20gXCIuLi96b25lL3pvbmUuY29tcG9uZW50XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1zY2hvb2wnLFxyXG4gIHRlbXBsYXRlVXJsOicuL3BhZ2VzL3NjaG9vbHMvc2Nob29sLmNvbXBvbmVudC5odG1sJyAsXHJcbiAgc3R5bGVzOltgLm1kaSB7XHJcbiAgICBmb250LWZhbWlseTogXCJNYXRlcmlhbEljb25zLVJlZ3VsYXJcIjtcclxuICB9YCBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTY2hvb2xDb21wb25lbnQgIHtcclxuIHpvbmVTZWxlY3RlZDpzdHJpbmc9bnVsbDtcclxuIHN1YnVyYlNlbGVjdGVkOnN0cmluZz1udWxsO1xyXG4gYm9hcmRTZWxlY3RlZDpzdHJpbmc9bnVsbDsgXHJcbiBzY2hvb2xTZWxlY3RlZDpzdHJpbmc9bnVsbDtcclxuIG1lbnVCYWNrVG86c3RyaW5nPW51bGw7XHJcbiBtZW51VG86c3RyaW5nPW51bGw7XHJcbiBjb25zdHJ1Y3RvcigpIHtcclxuICB0aGlzLm1lbnVUbz1cInpvbmVcIjtcclxuICB9XHJcbiAgcHVibGljIHN1YnVyYlNlbGVjdGVkRXZlbnQoc3VidXJiU2VsZWN0ZWQ6IHN0cmluZykge1xyXG4gICAvLyBsZXQgYnV0dG9uID0gPEJ1dHRvbj5hcmdzLm9iamVjdDtcclxuICAgIC8vT2JqZWN0LmtleXMoYXJncy5vYmplY3QpXHJcbiAgICAvL3RoaXMuc3RhdGU9J291dCcgO1xyXG4gICAvLyBjb25zb2xlLmxvZyhidXR0b24uaWQpO1xyXG4gIHRoaXMuc3VidXJiU2VsZWN0ZWQ9c3VidXJiU2VsZWN0ZWQ7XHJcbiAgdGhpcy5tZW51VG89J2JvYXJkJztcclxuIC8vIHRoaXMuem9uZVNlbGVjdGVkPW51bGw7XHJcbn1cclxucHVibGljIG9uVGFwcGVkQm9hcmQoYXJnczpFdmVudERhdGEpXHJcbntcclxuICAgbGV0IGJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XHJcbiAgIHRoaXMuYm9hcmRTZWxlY3RlZD1idXR0b24udGV4dDtcclxuICAgdGhpcy5tZW51VG89XCJzY2hvb2xcIjtcclxuICAgLy90aGlzLnNjaG9vbFNlbGVjdGVkPVwidnpcIjtcclxufVxyXG5wdWJsaWMgY2xlYXJab25lKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG50aGlzLm1lbnVUbz1cInpvbmVcIjtcclxudGhpcy56b25lU2VsZWN0ZWQ9bnVsbDtcclxufVxyXG5wdWJsaWMgY2xlYXJTdWJ1cmIoYXJnczogRXZlbnREYXRhKSB7XHJcbiAgXHJcbiAgICB0aGlzLnN1YnVyYlNlbGVjdGVkPW51bGw7XHJcbiAgIC8vIHRoaXMuem9uZVNlbGVjdGVkPW51bGw7XHJcbiAgICB0aGlzLm1lbnVUbz1cInN1YnVyYlwiO1xyXG4gICAgLy90aGlzLmlzUHJlc3NlZD1mYWxzZTtcclxuICB9XHJcbnB1YmxpYyBjbGVhckJvYXJkKGFyZ3M6IEV2ZW50RGF0YSkge1xyXG4gIGxldCBsYmwgPSA8SW1hZ2U+YXJncy5vYmplY3RcclxuICAvL2NvbnNvbGUubG9nKCk7XHJcbiAgdGhpcy5ib2FyZFNlbGVjdGVkPW51bGw7XHJcbiAgdGhpcy5tZW51VG89XCJib2FyZFwiO1xyXG4gIC8vY29uc29sZS5sb2cobGJsLmdldHBhcmUpO1xyXG4gfVxyXG5wdWJsaWMgem9uZVNlbGVjdGVkRXZlbnQoem9uZVNlbGVjdGVkOiBzdHJpbmcpIHtcclxuICAgY29uc29sZS5sb2coXCJ6b25lOlwiK3pvbmVTZWxlY3RlZCk7XHJcbiAgIHRoaXMuem9uZVNlbGVjdGVkPXpvbmVTZWxlY3RlZDtcclxuICAgdGhpcy5tZW51VG89J3N1YnVyYic7XHJcbiAgLy90aGlzLnpvbmVUb1N1YnVyYlNlbGVjdGlvbkV2ZW50LmVtaXQoem9uZVNlbGVjdGVkKTtcclxuIH1cclxufSJdfQ==