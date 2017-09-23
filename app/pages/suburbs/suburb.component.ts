import { ItemEventData } from 'tns-core-modules/ui/list-view';
import { View } from 'tns-core-modules/ui/core/view';
import { Component, Output, OnInit, ChangeDetectionStrategy, EventEmitter, Input } from '@angular/core';
import { Page } from "ui/page";
import { EventData } from "data/observable";
import {Label} from "ui/label";
import {
  trigger,
  state,
  style,
  transition,
  animate
} from '@angular/animations'

@Component({
  selector: "my-suburb",
  templateUrl: './pages/suburbs/suburb.component.html',
  animations :[]
})
export class SuburbComponent implements OnInit {
    //zoneArg:string;
    ngOnInit() {
      // this.zoneArg=this.zoneParam;
       if(this.zoneParam!=null) 
        this.myItems=suburbs;
    }
  public myItems: Array<String>;
  @Input() zoneParam:string;
  @Output() suburbSelectedEvent:EventEmitter<string> = new EventEmitter<string>();
  constructor() {
     this.myItems = suburbs;
  }
  public onSuburbItemTap(args:ItemEventData)
  {
    let lbl = <Label>args.view.getViewById("sub" + args.index);
    console.log(lbl.text);
    this.suburbSelectedEvent.emit(lbl.text);
  }
 
  }
 
    const suburbs:string[]=[
      "Malad",
      "Andheri",
      "Powai",
      "Goregaon",
      "Jogeshwari",
      "Vashi"
      
    ];

    
