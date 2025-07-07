<template>
    <div
        class="w-full my-1 space-y-1 mx-auto sticky bottom-0 bg-zinc-800 n-func p-1 z-1 tablet:w-9/12 laptop:w-4/12 tablet:mx-auto laptop:realtive laptop:mt-auto">
        <div class="overflow-hidden grid grid-cols-5 gap-x-2 p-2">
            <!-- Add Some Animation Here-->
            <button class="text-white func px-2 py-2 text-center transition ease-in hover:bg-zinc-700"
                v-for="(item, index) in handleDataAmt()" :key="item.id"
                @click="() => { cIndex = half === 'First' ? index : index + 5 }"
                :class="index === (half === 'First' ? cIndex : cIndex - 5) ? 'bg-zinc-700' : 'bg-black'">
                {{ item.date }}
            </button>
        </div>

        <div
            class="func bg-black *:text-white p-1 *:py-1 *:px-2 items-center text-2xl flex justify-between w-fit ml-2 laptop:text-4xl">
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
import { ref, watch } from 'vue';
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
        //direction.value = false;
        place = cIndex.value - 1 < 0 ? 0 : cIndex.value--;
    } else {
        //direction.value = true;
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
// This Watched for any changes to cIndex, and if its positive then it will make direction left to right, else left to right
watch(cIndex, (nIndex, oIndex) => {
    if ((nIndex - oIndex) < 0) {
        direction.value = false;
    } else {
        direction.value = true;
    }
})
</script>