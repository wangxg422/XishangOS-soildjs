import { Login } from "@/interface/login/index";
import http from "../../index";

// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
  return http.post<Login.ResLogin>(`/api/api/system/v1/login`, params, { loading: false });
};

// 获取菜单列表
export const getAuthMenuListApi = () => {
  // return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`, {}, { loading: false });
};

// 用户退出登录
export const logoutApi = () => {
  return http.post(`/logout`);
};
