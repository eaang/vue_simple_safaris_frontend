<template>
  <div class="bg-local about-pic h-screen/2 lg:h-screen">
    <div class="h-screen/2 text-white text-5xl text-center flex justify-center items-center">
      About
    </div>
    <div class="about-description flex flex-col justify-center items-center h-screen/2">
      <div class="about-text">
        심플 사파리(Simple Safaris) John 과 Jin입니다.<br />
        2019년 설립된 심플 사파리는 여행을 사랑하고, 수준 높은 여행 경험 및 정보를 주변 친구들과<br />
        공유하는 것에 대한 우리의 열정에서부터 시작되었습니다.
      </div>
      <div class="about-text">
        서울, 뉴욕, 시카고, 홍콩, 싱가포르 등 글로벌 도시에 거주하며,전 세계 100개 이상의 도시를 방문한 우리는<br />
        어느 날 바쁜 도심에서 벗어나고 싶은 마음에 용기를 내어 사파리 여행을 선택하였습니다.
      </div>
      <div class="about-text">
        우리는 인간의 손길이 닿지 않은 아프리카와 인도 대자연에서 큰 감동을 받았으며,<br />
        이러한 감동을 많은 사람들과 공유하고 싶어 심플사파리를 시작하게 되었습니다.<br />
        럭셔리한 사파리 여행 경험와 여행 계획 과정에서 발생할 수 있는 고객 여러분들의 어려움을 해결해 드리겠습니다.
      </div>
    </div>
  </div>
</template>

<style>
.about-pic {
  background: url('../assets/images/hero.png') no-repeat center center / cover;
}
.about-description {
  background: linear-gradient(0deg, rgba(104,100,84,1) 0%, rgba(104,100,84,1) 50%, rgba(104,100,84,0.8) 100%);
}
.about-text {
  @apply text-white text-center text-xl m-4;
}
</style>