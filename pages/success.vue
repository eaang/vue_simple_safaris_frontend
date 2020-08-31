<template>
  <div>
    <NavbarWhite />

    <!-- Header Section -->
    <div class="">
      <div class="bg-local contact-pic h-screen/2 relative">
        <div class="h-screen/2 text-white text-5xl text-center flex justify-center items-center pt-8">
          Contact us
        </div>
        <div class="container mx-auto bg-gray-300 absolute inset-x-0 bottom-0 pt-16 px-8 space-y-4">
          <div class="text-3xl text-center dark-text">
            사파리 여행 문의가 성공적으로  접수되었습니다!
          </div>
          <!-- Line Break -->
          <div class="flex justify-center mt-16">
            <div class="divider-line"></div>
          </div>
        </div>
      </div>
      <div class="container mx-auto bg-gray-300 inset-x-0 bottom-0 pb-16 px-8">
        <div class="text-2xl text-center light-text">
            문의주신 내용을 바탕으로 24시간 이내에 사파리여행 컨설턴트가 연락 드릴 예정입니다.<br />
            인생에서 가장 기억에 남을 만한 사라피여행을 만들어 드리겠습니다.
        </div>
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
  .dark-text {
    color: #1a1915;
  }
  .divider-line {
    width: 80px;
    height: 3px;
    background-color: #9c9780;
  }
</style>