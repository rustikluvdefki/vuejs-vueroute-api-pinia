import httpClient from "../httpClient.ts";

export const fetchProducts = () =>
    httpClient({
        method: "get",
        url: `https://api.escuelajs.co/api/v1/products`,
        params: {
            offset: 0,
            limit: 9
        }
    })

export const loadProds = () =>
    httpClient({
        method: "get",
        url: "https://api.escuelajs.co/api/v1/products",
        params: {
            offset: +9,
            limit: 9
        }
    })

export const selectedCategory = (id, pr) =>
    httpClient({
        method: "get",
        url: `https://api.escuelajs.co/api/v1/products/`,
        params: {
            limit: pr,
            categoryId: id
        }
    })

export const search = (e) =>
    httpClient({
        method: "get",
        url: "https://api.escuelajs.co/api/v1/products/",
        params: {
            title: e
        }
    })

export const fetchDetail=(id)=>
    httpClient({
        method: "get",
        url: `https://api.escuelajs.co/api/v1/products/${id}`
    })