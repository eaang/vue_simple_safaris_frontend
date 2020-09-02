<template>
  <div>
    <NavbarWhite />
    <!-- Carousel Here -->
    <div class="bg-local hero-pic h-screen/75 grid grid-flow-col grid-cols-1 grid-rows-3">
      <!-- Top Spacer Grid -->
      <div class="h-screen/75 text-white text-5xl text-center flex justify-center items-center">
          Taste of Tanzania
      </div>
      <!-- Carousel Navigation -->
      <CarouselBignav />
      <!-- Carousel Dots -->
      <CarouselDots :num-labels="2" />
    </div>

<script>
</script>

  </div>
</template>

<style>
  .hero-pic {
    background: url('../assets/images/tanzania01.jpg') no-repeat center center / cover;
  }
</style>