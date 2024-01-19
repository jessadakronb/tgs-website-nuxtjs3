<template>
  <div class="bottom-nav">
    <!-- Home Link -->
    <NuxtLink to="/m" class="nav-item">
      <img :src="homeActive ? homeActiveIcon : homeIcon" alt="home" />
      หน้าหลัก
    </NuxtLink>
    <NuxtLink to="/m/product" class="nav-item">
      <img :src="productActive ? productActiveIcon : productIcon" alt="product" />
      สินค้า
    </NuxtLink>
    <NuxtLink to="/m/promotion" class="nav-item">
      <img :src="promotionActive ? promotionActiveIcon : promotionIcon" alt="promotion" />
      โปรโมชั่น
    </NuxtLink>
    <NuxtLink to="/m/lives" class="nav-item">
      <img :src="livesActive ? livesActiveIcon : livesIcon" alt="lives" />
      ไลฟ์
    </NuxtLink>
    <NuxtLink to="/m/notification" class="nav-item">
      <img :src="notificationActive ? notificationsActiveIcon : notificationIcon" alt="notification" />
      แจ้งเตือน
    </NuxtLink>
    <NuxtLink to="/m/account" class="nav-item">
      <img :src="accountActive ? accountActiveIcon : accountIcon" alt="account" />
      บัญชี
    </NuxtLink>

  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import homeIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-home.svg';
import homeActiveIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-home-active.svg';
import productIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-product.svg';
import productActiveIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-product-active.svg';
import promotionIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-promotion.svg';
import promotionActiveIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-promotion-active.svg';
import livesIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-live.svg';
import livesActiveIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-live-active.svg';
import notificationIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-notification.svg';
import notificationsActiveIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-notification-active.svg';
import accountIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-account.svg';
import accountActiveIcon from '@/assets/mobile-site/icons/bottom-navigation/ic-account-active.svg';

const route = useRoute();

const isActive = (path: string) => computed(() => route.path === path);

const homeActive = isActive('/m');
const productActive = isActive('/m/product');
const promotionActive = isActive('/m/promotion');
const livesActive = isActive('/m/lives');
const notificationActive = isActive('/m/notification');
const accountActive = isActive('/m/account');

</script>

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
