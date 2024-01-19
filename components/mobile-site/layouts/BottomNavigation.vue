<template>
  <div class="bottom-nav">
    <NuxtLink to="/m" class="nav-item">
      <img v-if="$route.path === '/m'" src="@/assets/mobile-site/icons/bottom-navigation/ic-home-active.svg"
        alt="home active" />
      <img v-else src="@/assets/mobile-site/icons/bottom-navigation/ic-home.svg" alt="home" />
      หน้าหลัก
    </NuxtLink>
    <NuxtLink to="/m/product" class="nav-item">
      <img v-if="$route.path === '/m/product'" src="@/assets/mobile-site/icons/bottom-navigation/ic-product-active.svg"
        alt="product active" />
      <img v-else src="@/assets/mobile-site/icons/bottom-navigation/ic-product.svg" alt="product" />
      สินค้า
    </NuxtLink>
    <NuxtLink to="/m/promotion" class="nav-item">
      <img v-if="$route.path === '/m/promotion'" src="@/assets/mobile-site/icons/bottom-navigation/ic-promotion-active.svg"
        alt="promotion active" />
      <img v-else src="@/assets/mobile-site/icons/bottom-navigation/ic-promotion.svg" alt="promotion" />
      โปรโมชั่น
    </NuxtLink>
    <NuxtLink to="/m/lives" class="nav-item">
      <img v-if="$route.path === '/m/lives'" src="@/assets/mobile-site/icons/bottom-navigation/ic-live-active.svg"
        alt="live active" />
      <img v-else src="@/assets/mobile-site/icons/bottom-navigation/ic-live.svg" alt="live" />
      ไลฟ์
    </NuxtLink>
    <NuxtLink to="/m/notification" class="nav-item">
      <img v-if="$route.path === '/m/notification'"
        src="@/assets/mobile-site/icons/bottom-navigation/ic-notification-active.svg" alt="notification active" />
      <img v-else src="@/assets/mobile-site/icons/bottom-navigation/ic-notification.svg" alt="notification" />
      แจ้งเตือน
    </NuxtLink>
    <NuxtLink to="/m/account" class="nav-item">
      <img v-if="$route.path === '/m/account'" src="@/assets/mobile-site/icons/bottom-navigation/ic-account-active.svg"
        alt="account active" />
      <img v-else src="@/assets/mobile-site/icons/bottom-navigation/ic-account.svg" alt="account" />
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
  font-size: 10px;
}
</style>
