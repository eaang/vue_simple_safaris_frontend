<template>
  <nav class="bg-transparent py-6 fixed w-screen">
    <div class="container mx-auto flex justify-between">
      <!-- Left Side of Navbar -->
      <div class="flex items-center">
        <!-- Hamburger Icon -->
        <div class="block lg:hidden menu-icon text-gray-100 text-3xl ml-4 w-4 sm:w-24">
          <font-awesome-icon :icon="['fas', 'bars']"/>
        </div>
        <!-- Logo -->
        <div class="logo flex flex-1 lg:flex-none items-center justify-around lg:mr-8">
          <img class="w-64" src="@/assets/logo-ft.png" />
        </div>
        <!-- Spacer to centre logo on mobile screens -->
        <div class="w-8 sm:hidden"></div>
        <!-- Menu Links -->
        <ul id="menu-links" class="hidden lg:flex items-center font-bold">
          <li class="mr-8">
            <a class="text-gray-100 hover:text-gray-400" href="#">About</a>
          </li>
          <li class="mr-8">
            <a class="text-gray-100 hover:text-gray-400" href="#">Destinations</a>
          </li>
          <li class="mr-8">
            <a class="text-gray-100 hover:text-gray-400" href="#">Trip Ideas</a>
          </li>
          <li class="mr-8">
            <a class="text-gray-100 hover:text-gray-400" href="#">Blog</a>
          </li>
          <li>
            <button
              class="border-2 border-gray-100 font-bold text-gray-100 hover:bg-white hover:text-black px-4 py-2 rounded-lg"
              href="#"
            >Contact Us</button>
          </li>
        </ul>
      </div>
      <!-- Social Media Icons -->
      <ul id="social-media-buttons" class="flex items-center hidden sm:flex">
        <span class="font-bold text-gray-100 mr-6 hidden xl:block">Call us at 070-4517-0225</span>
        <li class="mr-8">
          <a class="" href="#">
            <img class="w-8 hover:opacity-75" src="@/assets/ic-instargram.svg" />
          </a>
        </li>
        <li class="">
          <a class="" href="#">
            <img class="w-8 hover:opacity-75" src="@/assets/ic-blog.svg" />
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<style>
</style>
