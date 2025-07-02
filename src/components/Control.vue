<template>
    <div class="w-full tablet:w-6/12 lg:w-3/12 md:mx-0 my-1 space-y-1 mx-auto ">
        <div class="bg-zinc-800 n-func p-4 overflow-hidden grid grid-cols-5 gap-x-2">
            <!-- Add Some Animation Here-->
            <button class=" text-white func px-2 py-2 text-center transition ease-ing"
                v-for="(item, index) in handleDataAmt()" :key="item.id"
                @click="() => { cIndex = half === 'First' ? index : index + 5 }"
                :class="index === (half === 'First' ? cIndex : cIndex - 5) ? 'bg-zinc-700' : 'bg-black'">
                {{ item.date }}
            </button>
        </div>
        <div class="func bg-zinc-800 *:text-white *:py-1 *:px-2 items-center text-2xl flex justify-between w-fit ">
            <button :class="(cIndex === 0) ? 'text-zinc-400!' : ''" @click="() => { handleDir(-1) }">
                <ArrowLeft />
            </button>
            <button :class="(cIndex === props.data.length - 1) ? 'text-zinc-400!' : ''" @click="() => { handleDir(1) }">
                <ArrowRight />
            </button>
        </div>
    </div>

</template>

<script setup>
import ArrowLeft from './icons/ArrowLeft.vue';
import ArrowRight from './icons/ArrowRight.vue';
import { ref } from 'vue';
const props = defineProps(['data']),
    cIndex = defineModel('cIndex'),
    direction = defineModel('direction'),
    half = ref('First');
/**
 * 0 1 2 3 4 5 6 7 8 9 
 * @param {Number} dir 
 */
function handleDir(dir) {
    let place = 0;
    if (dir === -1) {
        direction.value = false;
        place = cIndex.value - 1 < 0 ? 0 : cIndex.value--;
    } else {
        direction.value = true;
        place = cIndex.value + 1 === props.data.length ? props.data.length - 1 : cIndex.value++;
    }
    return place;
}
function handleDataAmt() {
    if (cIndex.value <= 4) {
        half.value = "First";
        return props.data.slice(0, 5)
    } else {
        half.value = "Last";
        return props.data.slice(5, props.data.length)
    }
}
</script>