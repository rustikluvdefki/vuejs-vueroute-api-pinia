export interface ProductsTypes{
    id: number
    title: string
    price: number
    description: string
    images: [img1: string,img2:string, img3:string]
    category:{
        id:number,
        name:string
    }
}
export interface categories{
    category:{
        id:number,
        name:string
    }
}