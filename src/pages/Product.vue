<template>
    <el-space direction="vertical">
        <el-skeleton style="margin-left: 35vw" :loading="loading" animated>
            <template #template>
                <div>
                    <el-skeleton-item variant="image" style="width: 500px; height: 500px"/>
                    <div style="padding: 14px;">
                        <el-skeleton-item variant="h3" style="width: 50%"/>
                        <div
                                style="
              display: flex;
              align-items: center;
              margin-top: 16px;
              height: 16px;
            "
                        >
                            <el-skeleton-item variant="text" style="margin-right: 16px"/>
                            <el-skeleton-item variant="text" style="width: 30%"/>
                        </div>
                    </div>
                </div>
            </template>
            <template #default>
                <div class="card">
                    <el-card :key="productStore.products.id">
                        <img
                                :src="productStore.products.images[0]"
                                class="image"
                        />
                        <div style="padding: 14px">
                            <h3>{{ productStore.products.title }}</h3>
                            <br>
                            <p>Описание: {{ productStore.products.description }}</p>
                            <br>
                            <p>{{ productStore.products.price }} руб.</p>
                        </div>
                    </el-card>
                </div>
            </template>
        </el-skeleton>
    </el-space>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import {useRoute} from "vue-router";
import httpClient from "../services/api/httpClient.ts";
import {ref} from "vue";
import {ProductsTypes} from "../types/productsTypes.ts";
import {useProductStore} from "../store/product-store.ts";

const productStore=useProductStore()


const loading = ref(true)
const route = useRoute()

const setLoading = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 2000)
}

const offset: number = +route.params.id
productStore.fetchDetail(offset)
setLoading()


</script>

<style lang="scss" scoped>
.card {
  width: 500px;
  margin-left: 35vw;
}
</style>