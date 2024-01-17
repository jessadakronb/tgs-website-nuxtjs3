<template>
  <v-container>
    <div class="login">
      <MobileSiteLayoutsTopNavBar v-if="title" :title="title" />
      <div class="logo-login d-flex align-center justify-center mt-7">
        <VImg src="/img/logo-login.png" alt="login" width="100" height="100" class="d-flex align-center justify-center"
          style="max-width: 100px; max-height: 100px;" />
      </div>
      <div class="login-password">
        <CustomInputPassword/>
        <!-- <VTextField label="รหัสผ่าน" type="password" hide-details /> -->
      </div>
      <div class="forgot-password">
        <p>ลืมรหัสผ่าน?</p>
      </div>
      <div class="login-submit">
        <VBtn type="submit" block min-height="50" class="login-bottom custom">เข้าสู่ระบบ</VBtn>
      </div>
    </div>
  </v-container>
</template>
<script setup lang="ts">
const title: string = 'เข้าสู่ระบบ';

</script>
<style scoped lang="scss">
@import '@/assets/color.scss';

.login {
  .login-password {
    display: flex;
    height: 53px;
    align-items: center;
    gap: 10px;
    margin-top: 81px;
  }

  .forgot-password {
    p {
      color: $color-main-pink;
      font-size: 16px;
      text-align: right;
      margin-top: 6px;
    }
  }

  .login-submit {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 26px;
    gap: 54px;
  }
}
</style>
