import Login from "../components/page/login";
import NotFound from "../components/page/notFound";
import Index from "../components/page/admin";
import Product from "../components/page/admin/product";
import Edit from "../components/page/admin/edit";


// 本项目分成两个路由
export const mainRoutes = [{
    path: '/login',
    component: Login
},{
    path: '/404',
    component: NotFound
}]

export const adminRoute = [{
    path: "/admin/dashboard",
    component: Index,
    title: "看板",
    isShow: true
},{
    path: "/admin/products",
    component: Product,
    title: "商品列表",
    isShow: true
},{
    path: "/admin/products/edit/:id",
    component: Edit
}]