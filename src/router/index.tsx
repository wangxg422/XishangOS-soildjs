import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const routes: RouteDefinition[] = [
    {
        path: "/login",
        component: lazy(() => import("../views/login"))
    },
    {
        path: "/desktop",
        component: lazy(() => import("../views/desktop"))
    }
];

export default routes;
