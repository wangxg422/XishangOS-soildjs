// 用户管理模块
export namespace SysMenu {
  export interface MenuLayoutMeta {
    icon: string;
    title: string;
    activeMenu: string;
    isLink: string;
    isHide: boolean;
    isFull: boolean;
    isAffix: boolean;
    isKeepAlive: boolean;
  }
  export interface MenuLayout {
    path: string;
    name: string;
    redirect: string;
    component: string;
    meta: MenuLayoutMeta;
    children: MenuLayout[];
  }
  export interface IBreadcrumb {
    name: string;
    path: string;
    title: string;
    type: string;
  }
  export interface SysMenuStore {
    breadcrumb: IBreadcrumb[];
    setBreadcrumb: (breadcrumb: SysMenu.IBreadcrumb[]) => void
  }
}
