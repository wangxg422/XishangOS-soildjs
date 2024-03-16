import { SysMenu } from "@/interface/system/menu";
import { MenuTypeEnum } from "./enums/menu";

/**
 * 保存所有菜单的面包屑,要求菜单name全局唯一
 * @param menus 菜单树
 * @returns 
 */
export const getMenuBreadcrumb = (menus: SysMenu.MenuLayout[], parent: SysMenu.IBreadcrumb[] = [], result: SysMenu.IAllBreadcrumb = {}) => {
    if (!menus || menus.length === 0) {
        return {}
    }
    for(const m of menus) {
        result[m.name] = [...parent, {
            name: m.name,
            path: m.path,
            title: m.meta.title,
            icon: m.meta.icon,
            type: m.children && m.children.length > 0 ? MenuTypeEnum.DIR : MenuTypeEnum.MENU
        }]
        if(m.children && m.children.length > 0) {
            result = getMenuBreadcrumb(m.children, result[m.name], result)
        }
    }
    
    return result;
}