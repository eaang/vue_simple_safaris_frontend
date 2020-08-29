<template>
  <nav class="bg-transparent py-6 fixed w-screen">
    <div class="container mx-auto flex justify-between">
      <!-- Left Side of Navbar -->
      <div class="flex">
        <!-- Logo -->
        <div class="logo flex items-center mr-6">
          <img class="w-64" src="@/assets/logo-ft.png" />
        </div>
        <!-- Menu Links -->
        <ul id="menu-links" class="flex items-center">
          <li class="mr-6">
            <a class="text-gray-100 hover:text-gray-400" href="#">About</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-100 hover:text-gray-400" href="#">Destinations</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-100 hover:text-gray-400" href="#">Trip Ideas</a>
          </li>
          <li class="mr-6">
            <a class="text-gray-100 hover:text-gray-400" href="#">Blog</a>
          </li>
          <li>
            <button
              class="border-2 border-gray-100 text-gray-100 hover:bg-white hover:text-black px-4 py-2 rounded-lg"
              href="#"
            >Contact Us</button>
          </li>
        </ul>
      </div>
      <!-- Social Media Icons -->
      <ul id="social-media-buttons" class="flex items-center">
        <span class="text-gray-100 mr-6">Call us at 070-4517-0225</span>
        <li class="mr-6">
          <a class="" href="#">
            <img class="w-8 hover:opacity-75" src="@/assets/ic-instargram.svg" />
          </a>
        </li>
        <li class="mr-6">
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
