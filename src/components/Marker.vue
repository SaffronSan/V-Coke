<template>
    <div class="text-center w-full ">
        <div class="flex flex-col md:flex-row space-y-2 ml-auto mx-auto justify-center">
            <img class="size-96 lap:size-[30rem] n-func shadow-sm object-cover mx-auto" :src="props.data.img"
                :alt="props.data.name">
            <div class="md:mt-auto md:ml-5 md:w-full flex flex-col justify-center">
                <h2 class="bg-zinc-950 text-white text-xl n-func my-2 p-4 w-64 mx-auto tablet:w-7/12 tablet:mx-0 tablet:ml-2 tablet:text-left tablet:text-2xl laptop:text-3xl">{{
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

        <p class="my-4 text-xl ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
            nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
        </p>

    </div>
</template>

<script setup>
/// WORK ON THE FLEX STUFF
const props = defineProps(["data"]);
</script>