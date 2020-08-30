<template>
  <section >
    <NavbarTransparent />
    <HeroCarousel />

    <!-- Introduction -->
    <div class="container mx-auto">
      <div class="mt-16 lg:mt-56 mb-8 flex">
        <span class="text-5xl self-end flex flex-col lg:flex-row flex-1 justify-center font-bold title-dark">
          <div class="flex justify-center">
            <div class="text-center">당신만을 위한</div>
            <div class="hidden lg:block">&nbsp;</div>
          </div>
          <div class="text-center">비스포크 럭셔리 사파리 여행!</div>
        </span>
      </div>
      <div class="text-xl lg:text-2xl px-16 lg:px-32 text-center content-light test">
        사파리(Safari)라는 말은 동물을 구경하거나 사냥하는 여행을 의미합니다.<br />
        심플사파리는 고객님들이 대자연에서의 모험을 쉽고 편안하게 즐길 수 있도록 도와드리고 있습니다.<br />
        최고의 경험을 선사해 드리기 위해 심플사파리는 3가지를 약속합니다.
      </div>
    </div>
    <CardsIntro />

    <!-- Destination Choices -->
    <DestinationMap />

    <!-- What's Your Style -->
    <div class="section-background-dark py-24">
      <div class="text-5xl text-center text-white font-bold pb-24 px-8">
        What's your style?
      </div>
      <CardsStyle />
    </div>
  </section>
</template>

<style>
.title-dark {
  color: #1a1915;
}
.content-light {
  color: #807f7d;
}
.section-background-dark {
  background-color: #646152;
}
</style>