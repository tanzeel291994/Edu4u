"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_component_1 = require("./pages/home/home.component");
var zone_component_1 = require("./pages/zone/zone.component");
var school_component_1 = require("./pages/schools/school.component");
exports.routes = [
    { path: "", component: home_component_1.HomeComponent },
    { path: "list", component: school_component_1.SchoolComponent },
    { path: "zone", component: zone_component_1.ZoneComponent }
];
exports.navigatableComponents = [
    home_component_1.HomeComponent,
    zone_component_1.ZoneComponent,
    school_component_1.SchoolComponent
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLnJvdXRpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhEQUE0RDtBQUM1RCw4REFBNEQ7QUFDNUQscUVBQWdFO0FBQ25ELFFBQUEsTUFBTSxHQUFHO0lBQ3BCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsOEJBQWEsRUFBRTtJQUN0QyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUU7SUFDNUMsRUFBRSxJQUFJLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSw4QkFBYSxFQUFFO0NBQzNDLENBQUM7QUFFVyxRQUFBLHFCQUFxQixHQUFHO0lBQ25DLDhCQUFhO0lBQ2IsOEJBQWE7SUFDYixrQ0FBZTtDQUNoQixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSG9tZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHsgWm9uZUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3pvbmUvem9uZS5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtTY2hvb2xDb21wb25lbnR9IGZyb20gJy4vcGFnZXMvc2Nob29scy9zY2hvb2wuY29tcG9uZW50J1xyXG5leHBvcnQgY29uc3Qgcm91dGVzID0gW1xyXG4gIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBIb21lQ29tcG9uZW50IH0sXHJcbiAgeyBwYXRoOiBcImxpc3RcIiwgY29tcG9uZW50OiBTY2hvb2xDb21wb25lbnQgfSxcclxuICB7IHBhdGg6IFwiem9uZVwiLCBjb21wb25lbnQ6IFpvbmVDb21wb25lbnQgfVxyXG5dO1xyXG5cclxuZXhwb3J0IGNvbnN0IG5hdmlnYXRhYmxlQ29tcG9uZW50cyA9IFtcclxuICBIb21lQ29tcG9uZW50LFxyXG4gIFpvbmVDb21wb25lbnQsXHJcbiAgU2Nob29sQ29tcG9uZW50XHJcbl07Il19