import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const routes: RouteDefinition[] = [
    {
        path: "/",
        children: [
            {
                path: "/",
                component: lazy(() => import("@/views/desktop"))
            },
            {
                path: "/desktop",
                component: lazy(() => import("@/views/desktop"))
            }
        ]
    },
    {
        path: "/",
        children: [
            // {
            //     path: "/",
            //     component: lazy(() => import("@/views/desktop"))
            // },
            // {
            //     path: "/desktop",
            //     component: lazy(() => import("@/views/desktop"))
            // },
            {
                path: "/system",
                component: lazy(() => import("@/views/system")),
                children: [
                    {
                        path: "/",
                        component: lazy(() => import("@/views/system/user"))
                    },
                    {
                        path: "/user",
                        component: lazy(() => import("@/views/system/user"))
                    },
                    {
                        path: "/menu",
                        component: lazy(() => import("@/views/system/menu"))
                    },
                    {
                        path: "/role",
                        component: lazy(() => import("@/views/system/role"))
                    },
                    {
                        path: "/dept",
                        component: lazy(() => import("@/views/system/dept"))
                    }
                ]
            },
            {
                path: "/app",
                component: lazy(() => import("@/views/application")),
                children: [
                    {
                        path: "/",
                        component: lazy(() => import("@/views/application"))
                    },
                    {
                        path: "/pkg",
                        component: lazy(() => import("@/views/application/package"))
                    },
                    {
                        path: "/instance",
                        component: lazy(() => import("@/views/application/instance"))
                    },
                ]
            },
        ]
    },
];

export default routes;
