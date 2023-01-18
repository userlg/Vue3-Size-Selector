<script setup lang="ts">
import { onUpdated, ref } from 'vue';
import SizeSelector from './components/SizeSelector.vue';

const selectedSize = ref('M');



onUpdated(() => {
  console.log("Size Selected --> " + selectedSize.value);
})

</script>

<template>
  <div class="mx-auto p-4">
    <img src="../public/shirt.png" alt="" class="h-[150px] block mx-auto">
  </div>

  <div class="bg-amber-200 p-10 mx-auto rounded border border-black shadow-md shadow-gray-500 w-full sm:w-3/4 lg:w-1/2 max-w-md">
    <div class="flex flex-col justify-around items-center gap-4">
      <h2 class="sm:text-2xl font-bold text-center text-xl font-RockSalt">Choose your size</h2>
        <div class="bg-white rounded p-2 w-20 border border-black">
          <h3 class="text-amber-700 text-center font-extrabold text-2xl">{{ selectedSize }}</h3>
        </div>


      <SizeSelector :selected-size="selectedSize" @on-changed-size="selectedSize = $event" />
    </div>
  </div>

</template>

<style scoped>

</style>
