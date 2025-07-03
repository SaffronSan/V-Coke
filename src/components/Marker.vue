<template>
    <div class="text-center w-full ">
        <div class="flex flex-col md:flex-row space-y-2 ml-auto mx-auto justify-center">
            <img class="size-96 lap:size-[30rem] n-func mx-auto object-fill bg-zinc-800 p-2" :src="props.data.img"
                :alt="props.data.name">
            <div class="md:mt-auto md:ml-5 md:w-full flex flex-col justify-center">
                <h2
                    class="bg-zinc-950 text-white text-xl n-func my-2 p-4 w-64 mx-auto tablet:w-7/12 tablet:mx-0 tablet:ml-2 tablet:text-left tablet:text-2xl laptop:text-3xl">
                    {{
                        props.data.name }}</h2>
                <div
                    class="*:bg-zinc-800 *:text-white *:w-fit *:h-fit *:px-4 *:py-2 flex space-y-2 space-x-2 mx-auto md:mx-0 md:ml-2 text-center md:text-left">
                    <h5 class="n-func">
                        {{ props.data.date }}
                    </h5>
                    <h5 class="n-func">
                        {{ props.data.type }}
                    </h5>
                </div>
            </div>
        </div>

        <p class="my-4 text-xl p-4 text-justify laptop:text-left laptop:text-2xl ">
            {{ longText }}
        </p>


    </div>
</template>

<script setup>
import { getLongText } from "@/static/data-handle";
/// WORK ON THE FLEX STUFF
const props = defineProps(["data"]),
    longText = await getLongText(props.data.id);
</script>