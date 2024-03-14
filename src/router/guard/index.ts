import { useUserInfoStore } from "@/store/system/user";

const userStore = useUserInfoStore();

// 路由守卫
export default function routerGuard() {
    if (!userStore.token) {
        // alert("请先登录");
        return true;
    }
    return true;
}