<template>
  <!-- Card Container -->
  <div class="mx-8 grid grid-flow-row xl:grid-flow-col">
    <!-- Card One -->
    <div class="">
      <div class="card-image">
        <img class="" src="@/assets/icon-01.svg" />
      </div>
      <div class="">
        <div class="card-title title-dark">
          사파리 여행 전문가와 함께하는 플래닝
        </div>
        <div class="card-text content-light">
          여행 상담부터 여행 다녀오실 때까지<br />
          전문 사파리 여행 컨설턴트가 고객님을 도와드립니다.<br />
          복잡하고 어렵게만 느껴졌던 사파리 여행이 간편해집니다.
        </div>
      </div>
    </div>
    <!-- Card Two -->
    <div class="">
      <div class="card-image">
        <img class="" src="@/assets/icon-02.svg" />
      </div>
      <div class="">
        <div class="card-title title-dark">
          100% 맞춤형 사파리 여행
        </div>
        <div class="card-text content-light">
          심플 사파리는 누구나를 위해 만들어진<br />
          패키지 여행은 판매하지 않습니다.<br />
          고객의 취향을 반영해  맞춤 여행을 기획해드립니다.
        </div>
      </div>
    </div>
    <!-- Card Three -->
    <div class="">
      <div class="card-image">
        <img class="" src="@/assets/icon-03.svg" />
      </div>
      <div class="">
        <div class="card-title title-dark">
          Adventure & Relaxation
        </div>
        <div class="card-text content-light">
          사파리 여행 동안 모험과 휴양을 동시에 즐길 수 있도록<br />
          심플 사파리의 자존심을 걸고<br />
          가장 훌륭한 숙소에서 지내실 수 있도록 하겠습니다.
        </div>
      </div>
    </div>
  <!-- End of Card Container -->
  </div>
</template>

<style>
.card-image {
  @apply h-48 flex justify-center items-end;
}
.card-title {
  @apply py-4 font-bold text-center text-3xl;
}
.card-text {
  line-height: 1.5;
  @apply italic text-center px-6 text-xl;
}
@media (min-width: 1280px) { 
  .card-text {
    @apply h-48;
  }
}
</style>