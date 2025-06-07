import {defineStore} from "pinia";

export const useCartStore = defineStore(
    'cart',
    ()=>{
        // 1. 总的数量 所有项的count之和
        const allCount = computed(() => cartList.value.reduce((a, c) => a + c.count, 0))
// 2. 总价 所有项的count*price之和
        const allPrice = computed(() => cartList.value.reduce((a, c) => a + c.count * c.price, 0))
        const cartList = ref([]);
        const addCart = (goods) => {
            //判断商品是否在购物车
            const findItem = cartList.value.find(item=>goods.skuId === item.skuId);
            if(findItem){
                findItem.count += goods.count;
            }else {
                cartList.value.push(goods)
            }
        }
        const delCart = (skuId) => {
            // 思路：
            // 1. 找到要删除项的下标值 - splice
            // 2. 使用splice删除找到的项，原数组改变
            const idx = cartList.value.findIndex((item) => skuId === item.skuId)
            cartList.value.splice(idx, 1)
        }
        // 单选功能
        const singleCheck = (skuId, selected) => {
            // 通过skuId找到要修改的那一项 然后把它的selected修改为传过来的selected
            const item = cartList.value.find((item) => item.skuId === skuId)
            item.selected = selected
        }
        // 全选功能
        const checkAll = (selected) => {
            // 把cartList中的每一项的selected都设置为当前的全选框状态
            cartList.value.forEach(item => item.selected = selected)
        }

        // 3. 是否全选计算属性
        const isAll = computed(() => cartList.value.every((item) => item.selected))
        // 4. 已选择数量
        const selectedCount = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count, 0))
        // 5. 已选择商品价钱合计
        const selectedPrice = computed(() => cartList.value.filter(item => item.selected).reduce((a, c) => a + c.count * c.price, 0))

        const clearCart = () => {
            cartList.value = []
        }
        return{
            allCount,
            allPrice,
            cartList,
            addCart,
            delCart,
            singleCheck,
            isAll,
            checkAll,
            selectedCount,
            selectedPrice,
            clearCart
        }
    },
    {
        persist:true
    }
)