<template>
  <div class="">
    <div class="w-100 flex justify-center space-x-2">
      <img class="" src="@/assets/ic-like.svg" />
      <img class="" src="@/assets/ic-like.svg" />
      <img class="" src="@/assets/ic-like.svg" />
      <img class="" src="@/assets/ic-like.svg" />
      <img class="" src="@/assets/ic-like.svg" />
    </div>
    <!-- Carousel Navigation -->
    <div class="relative px-8 md:px-20 lg:px-56 my-8 h-16 overflow-hidden md:h-auto text-center">
      <CarouselBignav class="hidden lg:flex absolute inset-0 flex items-center" />
      <span class="text-white text-xl lg:text-2xl">
      글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 
      글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 
      글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용 글내용
      </span>
    </div>
    <div class="text-white text-xl lg:text-2xl text-center font-bold">작성자</div>
    <CarouselDots class="mt-24" :num-labels="3" />
  </div>
</template>