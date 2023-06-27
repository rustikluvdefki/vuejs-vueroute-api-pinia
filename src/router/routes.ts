import { RouteRecordRaw } from "vue-router"
import Header from "../components/Header.vue";
import Product from "../pages/Product.vue";
import Cards from "../pages/Cards.vue";

const routes:readonly RouteRecordRaw[] =[
    {path: '/', component: Header, children:[
            {path:'', name:'Cards', component:Cards},
            {path:'/:id', name:'Product', component:Product}
        ]}
]

export default routes