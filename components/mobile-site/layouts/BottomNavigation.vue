<template>
  <div class="bottom-nav">
    <NuxtLink to="/m" class="nav-item">
      <v-icon size="24">mdi-home</v-icon>
      หน้าหลัก
    </NuxtLink>
    <NuxtLink to="/m/product" class="nav-item">
      <v-icon size="24">mdi-cart-outline</v-icon>
      สินค้า
    </NuxtLink>
    <NuxtLink to="/mpromotion" class="nav-item">
      <v-icon>mdi-history</v-icon>
      โปรโมชั่น
    </NuxtLink>
    <NuxtLink to="/m/lives" class="nav-item">
      <v-icon>mdi-history</v-icon>
      ไลฟ์
    </NuxtLink>
    <NuxtLink to="/m/notification" class="nav-item">
      <v-icon>mdi-history</v-icon>
      แจ้งเตือน
    </NuxtLink>
    <NuxtLink to="/m/account" class="nav-item">
      <v-icon>mdi-history</v-icon>
      บัญชี
    </NuxtLink>
  </div>
</template>

<style>
.bottom-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: #FFFFFF;
  box-shadow: 0px -0.33px 0px 0px rgba(0, 0, 0, 0.30);
  z-index: 100;
}

.nav-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  text-decoration: none;
  color: #333;
  /* Icon and text color */
  font-size: 10px;
  /* Set font size to 10px */
}

</style>
