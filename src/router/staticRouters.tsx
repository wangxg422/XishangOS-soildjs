import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const staticRoute: RouteDefinition[] = [
    {
        path: "/login",
        component: lazy(() => import("../views/login"))
    },
]

export default staticRoute