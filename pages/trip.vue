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

    <!-- Map Here -->
    <div class="">
      <!-- Map Itself -->
      <div class="container mx-auto my-24 flex">
        <div class="map-container flex-1 h-screen/2 lg:h-screen/75">
          <img class="" src="@/assets/ic-pin.svg">
          <img class="" src="@/assets/ic-pin2.svg">
          <img class="" src="@/assets/ic-pin3.svg">
        </div>
        <!-- Map Buttons -->
        <div class="space-y-4 ml-4 mb-32 self-end">
          <div class="circle-icon">
            <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'angle-double-up']"/>
          </div>
          <div class="circle-icon">
            <font-awesome-icon class="text-2xl text-white" :icon="['fas', 'comment-dots']"/>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style>
  .hero-pic {
    background: url('../assets/images/tanzania01.jpg') no-repeat center center / cover;
  }
  .map-container {
    background-color: #ececec;
  }
  .circle-icon {
    background-color: #897c66;
    @apply h-12 w-12 rounded-full flex justify-center items-center;
  }
</style>