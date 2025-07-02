<template>
  <section class="w-10/12 md:6/12 mx-auto relative flex flex-col justify-between laptop:h-[80vh]">
    <div class="flex flex-col justify-center md:justify-normal">
      <Transition :name="directionL? 'fade-slideXL' : 'fade-slideXR'" mode="out-in" appear>
        <Marker :data="data[currentEve]" :key="data[currentEve].id"/>
      </Transition>
    </div>
    <Control v-model:cIndex="currentEve" :data="data" v-model:direction="directionL"/>
  </section>
</template>
<script setup>
import { ref } from "vue"
import { getData } from "@/static/data-handle";
import Marker from "/src/components/Marker.vue"
import Control from "@/components/Control.vue";
const currentEve = ref(0),
  data = ref(getData()),
  directionL = ref(true);
  console.log(data.value)
</script>