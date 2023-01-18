<script lang="ts" setup>
import { ref } from 'vue'

const possibleSizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

const props = defineProps<{
    selectedSize: string
}>();

const emits = defineEmits<{
    (event: 'onChangedSize', value: string): void,
}>();

</script>

<template>

    <div class="flex flex-row gap-2 items-center justify-center mx-auto">
        <button v-for="( size, index ) in possibleSizes" :key="index" :class="{ 'active': props.selectedSize == size }" class="bg-white w-10 sm:w-12 border border-black rounded p-2"
            @click="emits('onChangedSize', size)">
            <h3 class="text-center">{{ size }}</h3>
        </button>
    </div>

</template>