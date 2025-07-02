<template>
    <div class="flex mx-auto justify-between md:justify-evenly items-center px-2 bg-zinc-800 n-func w-11/12 *:text-white">
        <div>
            <img class="size-24" src="../assets/coke-logo.png" alt="coke-logo">
        </div>

        <div class="flex space-x-2 *:bg-black *:text-white *:p-2">
            <RouterLink class="func" to="/">About</RouterLink>
            <RouterLink class="func" to="/timeline">Timeline</RouterLink>
        </div>

        <div class="text-center">
            <h5>Social</h5>
            <div class="flex space-x-2 *:text-xl items-center">
                <a v-for="item in social" :key="item.name" :href="item.path" target="blank" class="bg-black text-white func p-1">
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
const social = [{ name: "Facebook", icon: Facebook,path:"https://www.facebook.com/TheCocaColaCo" }, { name: "Instagram", icon: Instagram,path:"https://www.instagram.com/TheCocaColaCo/" }, { name: "Linkedin", icon: Linkedin, path:"https://www.linkedin.com/company/the-coca-cola-company/"}];

</script>