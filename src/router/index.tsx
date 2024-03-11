import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const routes: RouteDefinition[] = [
    {
        path: "/",
        children: [
            {
                path: "/",
                component: lazy(() => import("../views/desktop"))
            },
            {
                path: "/desktop",
                component: lazy(() => import("../views/desktop"))
            }
        ]
    },
];

export default routes;
