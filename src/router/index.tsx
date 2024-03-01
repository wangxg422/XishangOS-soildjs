import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: lazy(() => import("../pages/home/index")),
  },
  {
    path: "/login",
    component: lazy(() => import("../pages/login/index")),
  },
  {
    path: "/system",
    component: lazy(() => import("../pages/system/index")),
    children: [
      {
        path: "/home",
        component: lazy(() => import("../pages/system/home/index")),
      },
    ],
  }
];

export default routes;
