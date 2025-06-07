import { loginAPI } from '@/apis/user'
import {useCartStore} from "@/stores/cartStore.js";

export const useUserStore = defineStore(
    'user',
    () => {
    // 1. 定义管理用户数据的state
    const userInfo = ref({})
    // 2. 定义获取接口数据的action函数
    const getUserInfo = async (user) => {
        const res = await loginAPI(user)
        userInfo.value = res.result
    }
    const cartStore = useCartStore();
    const clearUserInfo = () => {
        userInfo.value = {}
        cartStore.clearCart()
    }
    // 3. 以对象的格式把state和action return
    return {
        userInfo,
        getUserInfo,
        clearUserInfo
    }
},
    {
    persist:true
})



export default useUserStore