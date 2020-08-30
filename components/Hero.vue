<template>
  <div class="bg-local hero-pic h-screen/2 lg:h-screen grid grid-flow-col grid-cols-1 grid-rows-3">
    <!-- Top Spacer Grid -->
    <div class=""></div>
    <!-- Carousel Icons -->
    <div class="invisible lg:visible flex px-16 w-screen self-center justify-between">
      <div class="left-icon">
        <img class="" src="@/assets/btn-arrow-left.svg" />
      </div>
      <div class="right-icon">
        <img class="" src="@/assets/btn-arrow-right.svg" />
      </div>
    </div>
    <!-- Carousel Dots -->
    <div class="flex items-end justify-center space-x-2 mb-8 ">
      <div class="dot filled"></div>
      <div class="dot empty"></div>
      <div class="dot empty"></div>
      <div class="dot empty"></div>
      <div class="dot empty"></div>
      <div class="dot empty"></div>
    </div>
  </div>
</template>

<style>
  .hero-pic {
    background: url('../assets/images/hero-pic.jpg') no-repeat center center / cover;
  }
  .dot {
    @apply rounded-full h-3 w-3;
  }
  .empty {
    @apply border border-white;
  }
  .filled {
    @apply bg-gray-100;
  }
</style>