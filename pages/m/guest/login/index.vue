<template>
  <v-container>
    <div class="guest-login">
      <MobileSiteLayoutsTopNavBar :title="title" />
      <div class="logo-login d-flex align-center justify-center mt-7">
        <VImg src="/img/logo-login.png" alt="login" width="100" height="100" class="d-flex align-center justify-center"
          style="max-width: 100px; max-height: 100px;" />
      </div>
      <div class="login-phone-email">
        <VTextField label="เบอร์โทรศัพท์ / อีเมล์" hide-details />
      </div>
      <div class="login-face-id">
        <p>เข้าสู่ระบบด้วย Face/Touch ID</p>
      </div>
      <div class="login-submit">
        <VBtn type="submit" block min-height="50" class="login-bottom custom">ถัดไป</VBtn>
        <div class="login-another">
          <div class="d-flex align-center justify-center ">
            เข้าสู่ระบบด้วยวิธีอื่น
          </div>
          <div class="login-social">
            <img src="~/assets/mobile-site/icons/login/ic-otp@2x.png" width="36" height="36" alt="otp" />
            <img src="~/assets/mobile-site/icons/login/ic-line@2x.png" width="36" height="36" alt="line" />
            <img src="~/assets/mobile-site/icons/login/ic-facebook@2x.png" width="36" height="36" alt="facbook" />
            <img src="~/assets/mobile-site/icons/login/ic-google@2x.png" width="36" height="36" alt="google" />
            <img src="~/assets/mobile-site/icons/login/ic-apple@2x.png" width="36" height="36" alt="apple" />
          </div>
        </div>
        <div class="login-banner-img">
          <img src="~/assets/mobile-site/images/login/banner-true.png" alt="banner" />
        </div>
      </div>
    </div>
  </v-container>
</template>
<script setup lang="ts">
const title: string = 'เข้าสู่ระบบ/ลงทะเบียน'
</script>
<style scoped>
.guest-login {
  .login-phone-email {
    display: flex;
    height: 53px;
    align-items: center;
    gap: 10px;
    margin-top: 81px;
  }

  .login-face-id {
    text-align: right;
    margin-top: 6px
  }

  .login-submit {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 26px;
    gap: 54px;
  }

  .login-other {
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .login-social {
    display: flex;
    align-items: center;
    gap: 28px;
    margin-top: 16px;
  }

  .login-banner-img {
    img {
      border-radius: 10px;
    }
  }
}
</style>