<template>
    <nav class="flex items-center w-full justify-between px-2">
        <div>
            <img class="size-24 laptop:size-36 text-white object-contain" :src="!theme? light : dark" alt="coke-logo"/>
        </div>
        <div class="flex items-center justify-center space-x-1 bg-zinc-800 *:bg-zinc-700 *:p-1 text-white
         n-func p-2 w-fit laptop:w-64 laptop:justify-evenly *:laptop:py-2 *:laptop:px-4 *:laptop:hover:bg-zinc-600">
            <RouterLink activeClass="bg-black!" class="func" to="/">About</RouterLink>
            <RouterLink activeClass="bg-black!" class="func" to="/timeline">Timeline</RouterLink>
        </div>
        <div>
            <button @click="toggleTheme()" class="func text-white bg-black p-2 px-4 laptop:py-4 laptop:px-8 ">
                <Transition name="slide-fade" mode="out-in" appear>
                    <Moon v-if="theme" />
                    <Sun v-else />
                </Transition>
            </button>
        </div>
    </nav>

</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import Moon from './icons/Moon.vue';
import Sun from './icons/Sun.vue';
import light from "../assets/coke-light.png";
import dark from "../assets/coke-dark.png";
const theme = ref(false);

function toggleTheme() {
    if (localStorage.getItem(btoa('theme')) === btoa('dark')) {
        localStorage.setItem(btoa('theme'), btoa('light'));
        document.querySelector('html').classList.remove('dark')
    } else {
        localStorage.setItem(btoa('theme'), btoa('dark'));
        document.querySelector('html').classList.add('dark')
    }
    theme.value = !theme.value;
};
</script>