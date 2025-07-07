<template>
  <section class="w-10/12 md:6/12 mx-auto relative flex flex-col justify-between laptop:h-[80vh]">
    <div class="flex flex-col justify-center md:justify-normal overflow-x-hidden">
      <Transition v-if="skeleton" name="fade" mode="out-in" appear>
         <Suspense>
          <MarkerSkeleton />
         </Suspense>
      </Transition>
      <Transition v-else :name="directionL ? 'fade-slideXL' : 'fade-slideXR'" mode="out-in" appear>
        <Suspense>
          <Marker :data="data[currentEve]" :key="data[currentEve].id" />
        </Suspense>
      </Transition>
    </div>
    <Control v-model:cIndex="currentEve" :data="data" v-model:direction="directionL" />
  </section>
</template>
<script setup>
import { onMounted, ref,watch } from "vue"
import { getData } from "@/static/data-handle";
import Marker from "/src/components/Marker.vue"
import Control from "@/components/Control.vue";
import MarkerSkeleton from "@/components/MarkerSkeleton.vue";
const currentEve = ref(0),
  data = ref(getData()),
  directionL = ref(true),
  skeleton = ref(true);
onMounted(() => {
  setTimeout(() => {
    skeleton.value = false;
  }, 2000)
})
watch(currentEve, ()=>{
  skeleton.value = true;
    setTimeout(() => {
    skeleton.value = false;
  }, 1500)
})
</script>