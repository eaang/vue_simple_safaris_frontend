<template>
  <div>
    <NavbarWhite />

    <!-- Header Section -->
    <div class="">
      <div class="bg-local contact-pic h-screen/75 relative">
        <div class="h-screen/2 text-white text-5xl text-center flex justify-center items-center">
          Contact us
        </div>
        <div class="container mx-auto bg-white absolute inset-x-0 bottom-0 pt-16 px-8 space-y-4">
          <div class="italic text-3xl text-center dark-text">
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

    <!-- Contact Form -->
    <div class="container mx-auto">
      <div class="text-center text-2xl dark-text my-16">
        심플사파리에서 당신을 위한 100% 맞춤 사파리 여행을 계획해 드립니다.<br />
        아래 사항들을 기재해 심플사파리에게 보내주세요.
      </div>
      <ContactForm class="my-16" />
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
  .dark-text {
    color: #1a1915;
  }
  .divider-line {
    width: 80px;
    height: 3px;
    background-color: #9c9780;
  }
</style>