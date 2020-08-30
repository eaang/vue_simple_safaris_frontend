<template>
  <div class="bg-local hero-pic h-screen/2 lg:h-screen grid grid-flow-col grid-cols-1 grid-rows-3">
    <!-- Top Spacer Grid -->
    <div class=""></div>
    <!-- Carousel Navigation -->
    <CarouselHeronav />
    <!-- Carousel Dots -->
    <CarouselDots :num-labels="5" />
  </div>
</template>

<script>
</script>

<style>
  .hero-pic {
    background: url('../assets/images/hero-pic.jpg') no-repeat center center / cover;
  }
</style>