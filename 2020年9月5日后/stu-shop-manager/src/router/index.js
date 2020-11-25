import Login from "../components/page/login";
import NotFound from "../components/page/notFound";
import Index from "../components/page/admin";
import Product from "../components/page/admin/product";
import Edit from "../components/page/admin/edit";
import Notices from "../components/page/admin/notices";
import {AreaChartOutlined, ShopOutlined} from '@ant-design/icons'

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
    isShow: true,
    icon: AreaChartOutlined
},{
    path: "/admin/products",
    component: Product,
    title: "商品列表",
    exact: true,
    isShow: true,
    icon: ShopOutlined
},{
    path: "/admin/products/edit/:id?",
    component: Edit,
    isShow: false
},{
    path: "/admin/notices",
    component: Notices,
    isShow: false
}]