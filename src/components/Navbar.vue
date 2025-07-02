<template>
    <nav class="flex items-center w-full justify-between px-2">
        <div>
            <img class="size-24" src="../assets/coke-logo.png" alt="coke-logo">
        </div>
        <div class="flex items-center justify-center space-x-1 bg-black *:bg-zinc-800 *:p-1 text-white n-func p-2 w-fit">
            <RouterLink activeClass="bg-zinc-700!" class="func" to="/">About</RouterLink>
            <RouterLink activeClass="bg-zinc-700!" class="func" to="/timeline">Timeline</RouterLink>
        </div>
        <div>
            <button @click="theme = !theme" class="func text-white bg-black p-2 px-4">
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

const theme = ref(false);
</script>