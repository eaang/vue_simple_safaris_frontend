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
    <CarouselButtons :num-labels="5" />
  </div>
</template>

<script>
</script>

<style>
  .hero-pic {
    background: url('../assets/images/hero-pic.jpg') no-repeat center center / cover;
  }
</style>