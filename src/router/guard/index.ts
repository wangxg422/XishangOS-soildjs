import { useUserInfoStore } from "@/store/system/user";

const userInfo = useUserInfoStore(state => state.userInfo);

// 路由守卫
export default function routerGuard() {
    if (!userInfo.token) {
        // alert("请先登录");
        return true;
    }
    return true;
}