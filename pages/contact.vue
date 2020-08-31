<template>
  <div>
    <NavbarWhite />

    <!-- Header Section -->
    <div class="h-screen">
      <div class="bg-local contact-pic h-screen/75 relative">
        <div class="h-screen/2 text-white text-5xl text-center flex justify-center items-center">
          Contact us
        </div>
        <div class="container mx-auto bg-white absolute inset-x-0 bottom-0 pt-16 px-8 space-y-4">
          <div class="italic text-3xl text-center">
            “아침에 일어날때 한번도 불쾌한 마음이 들지 않았던 그곳... 그곳이 바로 아프리카였다.”
          </div>
          <div class="text-2xl text-center light-text">
            소설가 Ernest Hemmingway
          </div>
        </div>
      </div>
      <!-- Line Break -->
      <div class="flex justify-center mt-16">
        <div class="divider-line"></div>
      </div>
    </div>

  </div>
</template>

<style>
  .contact-pic {
    background: url('../assets/images/hero.png') no-repeat center center / cover;
  }
  .light-text {
    color: #9c9780;
  }
  .divider-line {
    width: 80px;
    height: 3px;
    background-color: #9c9780;
  }
</style>