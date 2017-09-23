import { Component, OnInit } from '@angular/core';
import { Page } from "ui/page";
import { EventData } from "data/observable";
import {Button} from "ui/button";
import { Router } from "@angular/router";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'; 
import { android, AndroidApplication, AndroidActivityBundleEventData,AndroidActivityEventData,AndroidActivityResultEventData,AndroidActivityBackPressedEventData } from "application";
@Component({
  selector: "my-home",
  templateUrl: './pages/home/home.component.html',
  animations :[
    trigger("buttons", [
      state("in", style({
         // "background-color": "red",
         // transform :'scale(1)'
         transform :'rotate(0 deg)'
         // "opacity": 1,
      })),
      state("out", style({
          //"background-color": "white",
         // transform :'scale(0)'
         transform :'rotate(360 deg)'
          //"opacity": 0,
      })),
      transition("out => *", [ animate("600ms ease-out") ]),
      transition("in => out", [ animate("1000ms ease-in")])
  ])
  ]
})
export class HomeComponent implements OnInit{
  // Your TypeScript logic goes here
  state='in'
  counter : number = 0;
  constructor(private _page: Page,private router: Router) { 
    console.log("in constracutor");
  }
  android=true;
      ngOnInit() {
          this._page.actionBarHidden = true;
         // this.state='in';
        // console.log(this.state);
         if (this.android) {
          android.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
              console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
          });
      
          android.on(AndroidApplication.activityDestroyedEvent, function (args: AndroidActivityEventData) {
              console.log("Event: " + args.eventName + ", Activity: " + args.activity);
          });
      
          android.on(AndroidApplication.activityStartedEvent, function (args: AndroidActivityEventData) {
              console.log("Event: " + args.eventName + ", Activity: " + args.activity);
          });
      
          android.on(AndroidApplication.activityPausedEvent, function (args: AndroidActivityEventData) {
              console.log("Event: " + args.eventName + ", Activity: " + args.activity);
          });
      
          android.on(AndroidApplication.activityResumedEvent, function (args: AndroidActivityEventData) {
              console.log("Event: " + args.eventName + ", Activity: " + args.activity);
          });
      
          android.on(AndroidApplication.activityStoppedEvent, function (args: AndroidActivityEventData) {
              console.log("Event: " + args.eventName + ", Activity: " + args.activity);
          });
      
          android.on(AndroidApplication.saveActivityStateEvent, function (args: AndroidActivityBundleEventData) {
              console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
          });
      
          android.on(AndroidApplication.activityResultEvent, function (args: AndroidActivityResultEventData) {
              console.log("Event: " + args.eventName + ", Activity: " + args.activity +
                  ", requestCode: " + args.requestCode + ", resultCode: " + args.resultCode + ", Intent: " + args.intent);
          });
      
          android.on(AndroidApplication.activityBackPressedEvent, function (args: AndroidActivityBackPressedEventData) {
              console.log("Event: " + args.eventName + ", Activity: " + args.activity);
              //console.log(this.state);
              if (this.router.isActive("", false)) {
                console.log(this.state);
              }
              // Set args.cancel = true to cancel back navigation and do something custom.
          });
      }
      
      }

      onTap(eventData){
        console.log(eventData);
    } 
    onTappedFun(args: EventData) {
      let button = <Button>args.object;
      //Object.keys(args.object)
      this.state='out' ;
     // console.log(button.id);
     // console.log(this.state);
     //delay 
     setTimeout(()=>{ 
      this.router.navigate(["/list"]);}, 1000);
    // this.router.navigate(["/list"]);
      //alert("You’re using: ");
  }
      
}



