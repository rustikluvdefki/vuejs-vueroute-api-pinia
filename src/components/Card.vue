<template>
    <el-space direction="vertical">
        <el-select v-show="!loading" clearable v-model="value" @change="productStore.selectedCategory(value)" placeholder="Категория">
            <el-option
                    v-for="product in productStore.categories"
                    :key="product.category.id"
                    :label="product.category.name"
                    :value="product.category.id"
            />
        </el-select>
        <el-input v-show="!loading" v-model="input"  placeholder="Поиск..."/>
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
                <el-row>
                    <el-col
                            v-for="product in productStore.products"
                            :span="4"
                            :offset="3"
                    >
                        <el-card style="margin-bottom: 20px; background-color: aliceblue" :key="product.id">
                            <img
                                    :src="product.images[0]"
                                    class="image"
                            />
                            <div style="padding: 14px">
                                <h3>{{ product.title }}</h3>
                                <br>
                                <p>{{ product.price }} руб.</p>
                                <div class="bottom">
                                    <el-button type="primary" class="button"
                                               @click="router.push({name:'Product', params: { id: product.id} })">
                                        Подробнее
                                    </el-button>
                                </div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
            </template>
        </el-skeleton>
        <div ref="observerEl" class="observer"></div>
    </el-space>
    <router-view></router-view>

</template>

<script lang="ts" setup>
import router from "../router";
import {onMounted, ref, watch} from "vue";
import {useProductStore} from "../store/product-store.ts";
import {useDebounce, useDebounceFn} from "@vueuse/core";

const loading = ref(true)
const value = ref('')
const input = ref('')

const setLoading = () => {
    loading.value = true
    setTimeout(() => {
        loading.value = false
    }, 2000)
}
setLoading()




const observerEl = ref()

const productStore=useProductStore()
productStore.fetchProducts()

watch(input, useDebounceFn(productStore.search, 1000))

onMounted(() => {
    const options = {
        rootMargin: "0px",
        threshold: 1.0,
    };
    const callback = function (entries: any) {
        if (entries[0].isIntersecting && productStore.products.length < 160) {
            productStore.loadProds()
        }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(observerEl.value)
})
</script>

<style lang="scss">
.bottom {
  margin-top: 13px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.button {
  padding: 5px;
  min-height: auto;
}

.image {
  width: 100%;
  display: block;
}

.load {
  height: 50px;
}
</style>
