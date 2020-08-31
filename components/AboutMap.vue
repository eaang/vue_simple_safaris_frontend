<template>
  <div class="container mx-auto my-24">
    <div class="relative map-container h-screen/2 lg:h-screen/75">
      <img class="map-pin absolute" src="@/assets/pin.svg">
    </div>
  </div>
</template>

<style scoped>
  .map-container {
    background-color: #ececec;
  }
  .map-pin {
    right: 200px;
    top: 100px;
  }
</style>