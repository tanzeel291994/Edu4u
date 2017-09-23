import { NgModule ,NO_ERRORS_SCHEMA} from "@angular/core";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { NativeScriptAnimationsModule } from "nativescript-angular/animations";
import { HomeComponent } from "./pages/home/home.component";
import { routes, navigatableComponents } from "./app.routing";
import {AppComponent} from "./app.component";
import {SchoolComponent} from "./pages/schools/school.component"
import {ZoneComponent} from "./pages/zone/zone.component"
import {SchoolListComponent} from "./pages/schoolList/schoolList.component"
import {SuburbComponent} from "./pages/suburbs/suburb.component"
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    NativeScriptRouterModule,
    NativeScriptAnimationsModule,
    NativeScriptRouterModule.forRoot(routes),
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    })
  ],
  declarations: [
    AppComponent,
    SchoolComponent,
    SuburbComponent,
    ZoneComponent,
    SchoolListComponent,
    ...navigatableComponents
  ],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}