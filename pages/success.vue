<template>
  <div>
    <NavbarWhite />

    <!-- Header Section -->
    <div class="">
      <div class="bg-local contact-pic h-screen/75 relative">
        <div class="h-screen/2 text-white text-5xl text-center flex justify-center items-center pt-8">
          Contact us
        </div>

        <!-- Success Container Top Half -->
        <div class="container mx-auto success-box absolute inset-x-0 bottom-0 pt-16 px-8">
          <div class="text-2xl lg:text-3xl text-center dark-text">
            사파리 여행 문의가 성공적으로  접수되었습니다!
          </div>
          <!-- Line Break -->
          <div class="flex justify-center mt-8">
            <div class="divider-line"></div>
          </div>
        </div>
      </div>
      <!-- Success Container Bottom Half -->
      <div class="container mx-auto success-box inset-x-0 bottom-0 pb-16 pt-8 px-8">
        <div class="text-xl lg:text-2xl text-center success-message">
            <div>
              문의주신 내용을 바탕으로 <span class="dark-text font-bold">24시간 이내</span>에 
              사파리여행 컨설턴트가 연락 드릴 예정입니다.
            </div>
            <div class="italic">
              인생에서 가장 기억에 남을 만한 사라피여행을 만들어 드리겠습니다.
            </div>
        </div>
      </div>
      
      <!-- Confirm Button -->
      <div class="h-64 flex justify-center items-center">
        <a href="" class="success-button text-white text-3xl ">
          확인
        </a>
      </div>

    </div>
  </div>
</template>

<style>
  .success-message {
    color: #535043;
  }
  .success-box {
    background-color: #f0f0ec;
  }
  .success-button {
    @apply rounded px-16 py-4;
    background-color: #646152;
  }
  .success-button:hover {
    background-color: #1a1915;
  }
  .contact-pic {
    background: url('../assets/images/hero.png') no-repeat center center / cover;
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