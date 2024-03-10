// import desktopApp from "@/assets/json/desktopApp.json";
import { App } from "@/interface/app";
import http from "../../index";

export function desktopAppApi() {
    return http.get<App.Instance[]>(`/api/app/v1/instance/list`);
    // return desktopApp
}

export function allAppApi() {
    return http.get<App.Instance[]>(`/api/app/v1/instance/list`);
    //return desktopApp
}