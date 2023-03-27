import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

import FormCategory from "@/views/FormCategory.vue";
import Home from "@/views/Home.vue"
import ProductForm from "@/views/ProductForm.vue"
import BuyProduct from "@/views/BuyProduct.vue"

const route: RouteRecordRaw[] = [
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/category',
        name: 'FormCategory',
        component: FormCategory
    },
    {
        path: '/product',
        name: 'ProductForm',
        component: ProductForm
    },
    {
        path: '/buyproduct',
        name: 'BuyProduct',
        component: BuyProduct
    },
    
]


const router = createRouter({
    history: createWebHashHistory(),
    routes: route
})


export default router;