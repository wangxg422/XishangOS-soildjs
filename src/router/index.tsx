import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const routes: RouteDefinition[] = [
  {
    path: "/",
    children: [
      {
        path: "/",
        component: lazy(() => import("../pages/home/index")),
      },
      {
        path: "/system",
        children: [
          {
            path: "/",
            component: lazy(() => import("../pages/system/home/index")),
          },
          {
            path: "/home",
            component: lazy(() => import("../pages/system/home/index")),
          },
          {
            path: "/user",
            component: lazy(() => import("../pages/system/SysUser/index")),
          },
          {
            path: "/role",
            component: lazy(() => import("../pages/system/SysRole/index")),
          },
        ],
      },
    ]
  },
];

export default routes;
