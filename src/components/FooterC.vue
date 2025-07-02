<template>
    <div
        class="flex mx-auto justify-between items-center my-2 px-2 bg-zinc-800 n-func w-11/12 desktop:px-4 desktop:w-6/12 *:text-white">
        <div>
            <img class="size-24" src="../assets/coke-dark.png" alt="coke-logo">
        </div>
        <div class="text-center space-y-1">
            <h5>Pages</h5>
            <div class="flex items-center space-x-2 *:bg-black *:text-white *:px-2 *:py-1">
                <RouterLink class="func" to="/">About</RouterLink>
                <RouterLink class="func" to="/timeline">Timeline</RouterLink>
            </div>
        </div>
        <div class="text-center space-y-1">
            <h5>Social</h5>
            <div class="flex space-x-2 *:text-xl items-center">
                <a v-for="item in social" :key="item.name" :href="item.path" target="blank"
                    class="bg-black text-white func p-1 laptop:py-2 laptop:px-4">
                    <component :is="item.icon"></component>
                </a>
            </div>
        </div>
    </div>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import Facebook from './icons/Facebook.vue';
import Instagram from './icons/Instagram.vue';
import Linkedin from './icons/Linkedin.vue';
// FACEBOOk Link not Working 
const social = [{ name: "Facebook", icon: Facebook, path: "https://www.facebook.com/TheCocaColaCo" }, { name: "Instagram", icon: Instagram, path: "https://www.instagram.com/TheCocaColaCo/" }, { name: "Linkedin", icon: Linkedin, path: "https://www.linkedin.com/company/the-coca-cola-company/" }];

</script>