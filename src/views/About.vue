<template>
  <section class="flex flex-col items-center space-y-4 snap-y">
    <div class="px-2 size-96 tablet:w-7/12 mx-auto snap-center">
      <img class="w-full h-full bg-zinc-950 object-fill tablet:object-cover n-func !shadow-lg"
        src="https://alabamanewscenter.com/wp-content/uploads/2024/05/CCU-Exterior.jpg" alt="hero-img">
      <blockquote class="italic text-xs text-right py-1">
        &#8212; Coke Headquarters in Altanta Georgia
      </blockquote>
    </div>
    <div class="p-2 flex flex-col space-y-2 tablet:space-y-8 tablet:w-7/12 snap-center">
      <h3 class="n-func bg-black text-white text-xl w-fit px-4 py-2 tablet:text-2xl">About us</h3>
      <p class="w-fit italic px-2 text-lg leading-6 tablet:leading-8 tablet:text-xl ">
        At Coca-Cola, we have been refreshing the world and making a difference for over a century, guided by our
        commitment to quality, innovation, and community. Since our humble beginnings in 1886 with a single iconic
        beverage, we have grown into a global leader with a diverse portfolio of more than 200 brands, offering drinks
        that suit every lifestyle and occasion. Our mission is to craft brands and drinks that people love, while also
        creating a more sustainable future for our planet and the communities we serve. From reducing our carbon
        footprint and advancing water stewardship to empowering local economies and promoting active, healthy living,
        everything we do is driven by our passion to inspire moments of optimism and happiness. With employees,
        partners, and consumers in more than 200 countries and territories, Coca-Cola is not just a beverage company —
        we are a global family united by the simple belief that real magic happens when we come together over something
        as universal as a refreshing drink.
      </p>
      <RouterLink to="/timeline" class="func bg-black text-white text-sm px-2 p-1 mx-auto tablet:text-md">Learn More</RouterLink>
    </div>
    <div class="flex flex-col space-y-1 tablet:w-7/12 snap-center">
      <h3 class="n-func bg-black text-white text-xl w-fit px-4 py-2 tablet:text-2xl">Our Brands</h3>
      <div class="grid grid-cols-2 gap-2 place-item-center mx-auto tablet:grid-cols-2 laptop:grid-cols-3 laptop:w-fit tablet:w-full">
        <div class="bg-zinc-800 text-white n-func text-center !shadow-lg flex flex-col items-center size-48 tablet:size-72" v-for="item in getBrands()" :key="item.id">
          <img class="mx-auto size-24 tablet:size-50" :class="item.invert.includes('true')? 'invert' : ''" :src="item.img" :alt="item.name"/>
          <h5 class="tablet:text-xl">{{ item.name }}</h5>
          <a :href="item.brandLoc" target="blank" class="bg-zinc-950 func px-4 py-0.5 my-auto hover:text-zinc-50">Explore</a>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import { RouterLink } from 'vue-router';
import { getBrands } from '@/static/data-handle';
</script>