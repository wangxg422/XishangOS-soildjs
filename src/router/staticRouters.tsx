import { RouteDefinition } from "@solidjs/router";
import { lazy } from "solid-js";

const routes: RouteDefinition[] = [
  {
    path: "/login",
    component: lazy(() => import("../pages/login/index")),
  },
  {
    path: "/forgetPassword",
    component: lazy(() => import("../pages/forgetPassword/index")),
  },{
    path: "/register",
    component: lazy(() => import("../pages/register/index")),
  }
]

export default routes