"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var animations_1 = require("@angular/animations");
var application_1 = require("application");
var HomeComponent = (function () {
    function HomeComponent(_page, router) {
        this._page = _page;
        this.router = router;
        // Your TypeScript logic goes here
        this.state = 'in';
        this.counter = 0;
        this.android = true;
        console.log("in constracutor");
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._page.actionBarHidden = true;
        // this.state='in';
        // console.log(this.state);
        if (this.android) {
            application_1.android.on(application_1.AndroidApplication.activityCreatedEvent, function (args) {
                console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
            });
            application_1.android.on(application_1.AndroidApplication.activityDestroyedEvent, function (args) {
                console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.activityStartedEvent, function (args) {
                console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.activityPausedEvent, function (args) {
                console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.activityResumedEvent, function (args) {
                console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.activityStoppedEvent, function (args) {
                console.log("Event: " + args.eventName + ", Activity: " + args.activity);
            });
            application_1.android.on(application_1.AndroidApplication.saveActivityStateEvent, function (args) {
                console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
            });
            application_1.android.on(application_1.AndroidApplication.activityResultEvent, function (args) {
                console.log("Event: " + args.eventName + ", Activity: " + args.activity +
                    ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
            });
            application_1.android.on(application_1.AndroidApplication.activityBackPressedEvent, function (args) {
                console.log("Event: " + args.eventName + ", Activity: " + args.activity);
                //console.log(this.state);
                if (this.router.isActive("", false)) {
                    console.log(this.state);
                }
                // Set args.cancel = true to cancel back navigation and do something custom.
            });
        }
    };
    HomeComponent.prototype.onTap = function (eventData) {
        console.log(eventData);
    };
    HomeComponent.prototype.onTappedFun = function (args) {
        var _this = this;
        var button = args.object;
        //Object.keys(args.object)
        this.state = 'out';
        // console.log(button.id);
        // console.log(this.state);
        //delay 
        setTimeout(function () {
            _this.router.navigate(["/list"]);
        }, 1000);
        // this.router.navigate(["/list"]);
        //alert("You’re using: ");
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "my-home",
            templateUrl: './pages/home/home.component.html',
            animations: [
                animations_1.trigger("buttons", [
                    animations_1.state("in", animations_1.style({
                        // "background-color": "red",
                        // transform :'scale(1)'
                        transform: 'rotate(0 deg)'
                        // "opacity": 1,
                    })),
                    animations_1.state("out", animations_1.style({
                        //"background-color": "white",
                        // transform :'scale(0)'
                        transform: 'rotate(360 deg)'
                        //"opacity": 0,
                    })),
                    animations_1.transition("out => *", [animations_1.animate("600ms ease-out")]),
                    animations_1.transition("in => out", [animations_1.animate("1000ms ease-in")])
                ])
            ]
        }),
        __metadata("design:paramtypes", [page_1.Page, router_1.Router])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxnQ0FBK0I7QUFHL0IsMENBQXlDO0FBQ3pDLGtEQU02QjtBQUM3QiwyQ0FBc0w7QUF1QnRMO0lBSUUsdUJBQW9CLEtBQVcsRUFBUyxNQUFjO1FBQWxDLFVBQUssR0FBTCxLQUFLLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSHRELGtDQUFrQztRQUNsQyxVQUFLLEdBQUMsSUFBSSxDQUFBO1FBQ1YsWUFBTyxHQUFZLENBQUMsQ0FBQztRQUlyQixZQUFPLEdBQUMsSUFBSSxDQUFDO1FBRlgsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRyxnQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBQ25DLG1CQUFtQjtRQUNwQiwyQkFBMkI7UUFDMUIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEIscUJBQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQWtCLENBQUMsb0JBQW9CLEVBQUUsVUFBVSxJQUFvQztnQkFDOUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzFHLENBQUMsQ0FBQyxDQUFDO1lBRUgscUJBQU8sQ0FBQyxFQUFFLENBQUMsZ0NBQWtCLENBQUMsc0JBQXNCLEVBQUUsVUFBVSxJQUE4QjtnQkFDMUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFD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UUFBUTtRQUNSLFVBQVUsQ0FBQztZQUNWLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztRQUFBLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMzQyxtQ0FBbUM7UUFDakMsMEJBQTBCO0lBQzlCLENBQUM7SUF4RVUsYUFBYTtRQXRCekIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxTQUFTO1lBQ25CLFdBQVcsRUFBRSxrQ0FBa0M7WUFDL0MsVUFBVSxFQUFFO2dCQUNWLG9CQUFPLENBQUMsU0FBUyxFQUFFO29CQUNqQixrQkFBSyxDQUFDLElBQUksRUFBRSxrQkFBSyxDQUFDO3dCQUNmLDZCQUE2Qjt3QkFDN0Isd0JBQXdCO3dCQUN4QixTQUFTLEVBQUUsZUFBZTt3QkFDMUIsZ0JBQWdCO3FCQUNsQixDQUFDLENBQUM7b0JBQ0gsa0JBQUssQ0FBQyxLQUFLLEVBQUUsa0JBQUssQ0FBQzt3QkFDZiw4QkFBOEI7d0JBQy9CLHdCQUF3Qjt3QkFDeEIsU0FBUyxFQUFFLGlCQUFpQjt3QkFDM0IsZUFBZTtxQkFDbEIsQ0FBQyxDQUFDO29CQUNILHVCQUFVLENBQUMsVUFBVSxFQUFFLENBQUUsb0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFFLENBQUM7b0JBQ3JELHVCQUFVLENBQUMsV0FBVyxFQUFFLENBQUUsb0JBQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7aUJBQ3hELENBQUM7YUFDRDtTQUNGLENBQUM7eUNBSzJCLFdBQUksRUFBaUIsZUFBTTtPQUozQyxhQUFhLENBMEV6QjtJQUFELG9CQUFDO0NBQUEsQUExRUQsSUEwRUM7QUExRVksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQge0J1dHRvbn0gZnJvbSBcInVpL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7XHJcbiAgdHJpZ2dlcixcclxuICBzdGF0ZSxcclxuICBzdHlsZSxcclxuICB0cmFuc2l0aW9uLFxyXG4gIGFuaW1hdGVcclxufSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJzsgXHJcbmltcG9ydCB7IGFuZHJvaWQsIEFuZHJvaWRBcHBsaWNhdGlvbiwgQW5kcm9pZEFjdGl2aXR5QnVuZGxlRXZlbnREYXRhLEFuZHJvaWRBY3Rpdml0eUV2ZW50RGF0YSxBbmRyb2lkQWN0aXZpdHlSZXN1bHRFdmVudERhdGEsQW5kcm9pZEFjdGl2aXR5QmFja1ByZXNzZWRFdmVudERhdGEgfSBmcm9tIFwiYXBwbGljYXRpb25cIjtcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6IFwibXktaG9tZVwiLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGFuaW1hdGlvbnMgOltcclxuICAgIHRyaWdnZXIoXCJidXR0b25zXCIsIFtcclxuICAgICAgc3RhdGUoXCJpblwiLCBzdHlsZSh7XHJcbiAgICAgICAgIC8vIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcInJlZFwiLFxyXG4gICAgICAgICAvLyB0cmFuc2Zvcm0gOidzY2FsZSgxKSdcclxuICAgICAgICAgdHJhbnNmb3JtIDoncm90YXRlKDAgZGVnKSdcclxuICAgICAgICAgLy8gXCJvcGFjaXR5XCI6IDEsXHJcbiAgICAgIH0pKSxcclxuICAgICAgc3RhdGUoXCJvdXRcIiwgc3R5bGUoe1xyXG4gICAgICAgICAgLy9cImJhY2tncm91bmQtY29sb3JcIjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAvLyB0cmFuc2Zvcm0gOidzY2FsZSgwKSdcclxuICAgICAgICAgdHJhbnNmb3JtIDoncm90YXRlKDM2MCBkZWcpJ1xyXG4gICAgICAgICAgLy9cIm9wYWNpdHlcIjogMCxcclxuICAgICAgfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKFwib3V0ID0+ICpcIiwgWyBhbmltYXRlKFwiNjAwbXMgZWFzZS1vdXRcIikgXSksXHJcbiAgICAgIHRyYW5zaXRpb24oXCJpbiA9PiBvdXRcIiwgWyBhbmltYXRlKFwiMTAwMG1zIGVhc2UtaW5cIildKVxyXG4gIF0pXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcclxuICAvLyBZb3VyIFR5cGVTY3JpcHQgbG9naWMgZ29lcyBoZXJlXHJcbiAgc3RhdGU9J2luJ1xyXG4gIGNvdW50ZXIgOiBudW1iZXIgPSAwO1xyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhZ2U6IFBhZ2UscHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyBcclxuICAgIGNvbnNvbGUubG9nKFwiaW4gY29uc3RyYWN1dG9yXCIpO1xyXG4gIH1cclxuICBhbmRyb2lkPXRydWU7XHJcbiAgICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgICAgdGhpcy5fcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xyXG4gICAgICAgICAvLyB0aGlzLnN0YXRlPSdpbic7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgICAgIGlmICh0aGlzLmFuZHJvaWQpIHtcclxuICAgICAgICAgIGFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5Q3JlYXRlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQW5kcm9pZEFjdGl2aXR5QnVuZGxlRXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5ICsgXCIsIEJ1bmRsZTogXCIgKyBhcmdzLmJ1bmRsZSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgICBhbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eURlc3Ryb3llZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAgIGFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5U3RhcnRlZEV2ZW50LCBmdW5jdGlvbiAoYXJnczogQW5kcm9pZEFjdGl2aXR5RXZlbnREYXRhKSB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFdmVudDogXCIgKyBhcmdzLmV2ZW50TmFtZSArIFwiLCBBY3Rpdml0eTogXCIgKyBhcmdzLmFjdGl2aXR5KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgICAgIGFuZHJvaWQub24oQW5kcm9pZEFwcGxpY2F0aW9uLmFjdGl2aXR5UGF1c2VkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGEpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50OiBcIiArIGFyZ3MuZXZlbnROYW1lICsgXCIsIEFjdGl2aXR5OiBcIiArIGFyZ3MuYWN0aXZpdHkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlSZXN1bWVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGEpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50OiBcIiArIGFyZ3MuZXZlbnROYW1lICsgXCIsIEFjdGl2aXR5OiBcIiArIGFyZ3MuYWN0aXZpdHkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlTdG9wcGVkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlFdmVudERhdGEpIHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkV2ZW50OiBcIiArIGFyZ3MuZXZlbnROYW1lICsgXCIsIEFjdGl2aXR5OiBcIiArIGFyZ3MuYWN0aXZpdHkpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uc2F2ZUFjdGl2aXR5U3RhdGVFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eUJ1bmRsZUV2ZW50RGF0YSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSArIFwiLCBCdW5kbGU6IFwiICsgYXJncy5idW5kbGUpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICAgICAgYW5kcm9pZC5vbihBbmRyb2lkQXBwbGljYXRpb24uYWN0aXZpdHlSZXN1bHRFdmVudCwgZnVuY3Rpb24gKGFyZ3M6IEFuZHJvaWRBY3Rpdml0eVJlc3VsdEV2ZW50RGF0YSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSArXHJcbiAgICAgICAgICAgICAgICAgIFwiLCByZXF1ZXN0Q29kZTogXCIgKyBhcmdzLnJlcXVlc3RDb2RlICsgXCIsIHJlc3VsdENvZGU6IFwiICsgYXJncy5yZXN1bHRDb2RlICsgXCIsIEludGVudDogXCIgKyBhcmdzLmludGVudCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgICAgICBhbmRyb2lkLm9uKEFuZHJvaWRBcHBsaWNhdGlvbi5hY3Rpdml0eUJhY2tQcmVzc2VkRXZlbnQsIGZ1bmN0aW9uIChhcmdzOiBBbmRyb2lkQWN0aXZpdHlCYWNrUHJlc3NlZEV2ZW50RGF0YSkge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRXZlbnQ6IFwiICsgYXJncy5ldmVudE5hbWUgKyBcIiwgQWN0aXZpdHk6IFwiICsgYXJncy5hY3Rpdml0eSk7XHJcbiAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5yb3V0ZXIuaXNBY3RpdmUoXCJcIiwgZmFsc2UpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0YXRlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgLy8gU2V0IGFyZ3MuY2FuY2VsID0gdHJ1ZSB0byBjYW5jZWwgYmFjayBuYXZpZ2F0aW9uIGFuZCBkbyBzb21ldGhpbmcgY3VzdG9tLlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG9uVGFwKGV2ZW50RGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnREYXRhKTtcclxuICAgIH0gXHJcbiAgICBvblRhcHBlZEZ1bihhcmdzOiBFdmVudERhdGEpIHtcclxuICAgICAgbGV0IGJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XHJcbiAgICAgIC8vT2JqZWN0LmtleXMoYXJncy5vYmplY3QpXHJcbiAgICAgIHRoaXMuc3RhdGU9J291dCcgO1xyXG4gICAgIC8vIGNvbnNvbGUubG9nKGJ1dHRvbi5pZCk7XHJcbiAgICAgLy8gY29uc29sZS5sb2codGhpcy5zdGF0ZSk7XHJcbiAgICAgLy9kZWxheSBcclxuICAgICBzZXRUaW1lb3V0KCgpPT57IFxyXG4gICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7fSwgMTAwMCk7XHJcbiAgICAvLyB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbXCIvbGlzdFwiXSk7XHJcbiAgICAgIC8vYWxlcnQoXCJZb3XigJlyZSB1c2luZzogXCIpO1xyXG4gIH1cclxuICAgICAgXHJcbn1cclxuXHJcblxyXG5cclxuIl19