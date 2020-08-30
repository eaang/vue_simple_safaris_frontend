<template>
  <div class="flex items-end justify-center space-x-2 mb-8 ">
    <div class="dot filled"></div>
    <div class="dot empty" v-for="idx in numLabels">
    </div>
  </div>
</template>

<script>;
export default {
    props: {
        numLabels: {
            type: Number, // type of the property
            required: (true|false), // is this prop required or not?
            default: 1 // default value for this prop
        }
    }
}
</script>

<style scoped>
  .dot {
    @apply rounded-full h-3 w-3;
  }
  .empty {
    @apply border border-gray-100;
  }
  .empty:hover {
    @apply bg-gray-100;
  }
  .filled {
    @apply bg-gray-100;
  }
</style>