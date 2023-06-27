<template>
    <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="true"
            style="margin-bottom: 30px; background-color: lavender"
    >
        <el-menu-item index="0" @click="router.push('/')"><h3>E-commerce</h3></el-menu-item>
    </el-menu>
    <router-view></router-view>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import router from "../router";

const activeIndex = ref('1')
</script>

<style lang="scss">
</style>
