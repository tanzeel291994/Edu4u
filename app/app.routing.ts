import { HomeComponent } from "./pages/home/home.component";
import { ZoneComponent } from "./pages/zone/zone.component";
import {SchoolComponent} from './pages/schools/school.component'
export const routes = [
  { path: "", component: HomeComponent },
  { path: "list", component: SchoolComponent },
  { path: "zone", component: ZoneComponent }
];

export const navigatableComponents = [
  HomeComponent,
  ZoneComponent,
  SchoolComponent
];