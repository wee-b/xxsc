import {ref, onMounted} from 'vue'
import { defineStore } from 'pinia'
import {getCatetoryApi} from "@/apis/testApi.js";

export const useCategoryStore = defineStore('category', () => {
    const categoryList = ref([]);
    const getCategory = async ()=>{
        const res = await getCatetoryApi();
        categoryList.value = res.result;
    }
    onMounted(()=>{
        getCategory()
    })

    return { categoryList }
})

