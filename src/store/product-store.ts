import {defineStore} from 'pinia'
import {categories, ProductsTypes} from "../types/productsTypes.ts";
import {product} from "../services/api";
import {fetchDetail, search} from "../services/api/rest/product.ts";
import {products} from "../components/products.ts";

export const useProductStore = defineStore('product-store', {
    state: () => ({
        products: [] as ProductsTypes[],
        categories: [] as categories[],
        idd: 1,
        tit: '',
        idpr: 1
    }),
    actions: {
        fetchProducts() {
            product.fetchProducts().then(({data}) => {
                this.products = data
                this.categories = data
            })
        },
        loadProds() {
            product.loadProds().then(({data}) => {
                this.products.push(...data)
            })
        },
        selectedCategory(id) {
            this.idd = id
            product.selectedCategory(this.idd, this.products.length).then(({data}) => {
                this.products=data
            })
        },
        search(title) {
            this.tit = title
            search(this.tit).then(({data}) => {
                this.products = []
                this.products = data
            })
        },
        fetchDetail(idprod){
            this.idpr=idprod
            fetchDetail(this.idpr).then(({data})=>{
                this.products = data
            })

        }
    }
})