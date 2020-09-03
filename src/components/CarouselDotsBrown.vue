<template>
  <div class="flex items-end justify-center space-x-2 mb-8 ">
    <div class="dot filled"></div>
    <div class="dot empty" v-for="idx in numLabels" :key="idx">
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
    border-color: #b1ab91;
    @apply border;
  }
  .empty:hover {
    background-color: #b1ab91;
  }
  .filled {
    background-color: #b1ab91;
  }
</style>