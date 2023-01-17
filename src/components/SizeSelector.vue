<script lang="ts" setup>
import { ref } from 'vue'

const possibleSizes = ['XS','S','M','L','XL','XXL'];



</script>

<template>

<div class="flex flex-row gap-2 items-center justify-center mx-auto mb-4">
<button v-for="( size, index ) in possibleSizes" :key="index">
  {{ size }}
</button>
</div>
   
</template>