import { Component, Output, OnInit, ChangeDetectionStrategy, EventEmitter, Input } from '@angular/core';
import { Page } from "ui/page";
import { EventData } from "data/observable";
import {Button} from "ui/button";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'

@Component({
  selector: "my-zone",
  templateUrl: './pages/zone/zone.component.html',
  animations :[]
})
export class ZoneComponent  {
  public myItems: Array<String>;
 
  @Input() selectedZone:string;
  @Output() zoneSelectedEvent:EventEmitter<string> = new EventEmitter<string>();
  constructor() {}
  public onTappedZone(args: EventData) {
     let button = <Button>args.object;
     //Object.keys(args.object)
     //this.state='out' ;
    // console.log(button.id);
    //this.isPressed=true;
    this.zoneSelectedEvent.emit(button.text);
     console.log(button.text);
    
 }
 
  }
 

    
