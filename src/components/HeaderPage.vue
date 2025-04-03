<template>
  <div class="main">
    <div class="header-bar">
      <nav>
        <div class="search flex mx-auto flex-wrap items-center justify-between">
          <div class="relative hidden md:block">
            <button
              class="relative flex items-center w-70 h-10 text-sm border-2 border-black px-4"
              style="padding-left: 1cm"
            >
              <div
                style="padding-left: 0.3cm"
                class="absolute inset-y-0 left-0 flex items-center pointer-events-none"
              >
                <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              <span class="text-gray-400">Search for...</span>
            </button>
          </div>
          <div class="logo" style="margin-right: 3.5cm;">
            <p class="text-4xl text-pink-400 font-bold">KANDRA</p>
          </div>
          <div class=" icon-nav flex items-center justify-between">
           <div>
            <i class="fa-solid fa-bag-shopping text-2xl"></i>
           </div>
            <div class=" mx-10">
              <i class="fa-solid fa-heart text-2xl" style="margin: 0 0.5cm 0 0.5cm;"></i>
            </div>
           <div>
            <i class="fa-solid fa-user text-2xl"></i>
           </div>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "HeaderPage",
};
</script>

<style scoped></style>
