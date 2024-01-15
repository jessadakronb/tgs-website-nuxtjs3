<template>
  <v-container>
    <div class="login">
      <MobileSiteLayoutsTopNavBar />
      <div class="logo-login d-flex align-center justify-center mt-7">
        <VImg src="/img/logo-login.png" alt="login" width="100" height="100" class="d-flex align-center justify-center"
          style="max-width: 100px; max-height: 100px;" />
      </div>
      <div class="login-form">
        <div class="login-phone-email">
          <VTextField label="เบอร์โทรศัพท์ / อีเมล์" hide-details />
          <p>เข้าสู่ระบบด้วย Face/Touch ID</p>
        </div>
        <br />
        <div class="login-bottom">
          <VBtn type="submit" block min-height="50" class="login-bottom custom">ถัดไป</VBtn>
        </div>
        <div class="login-social">
          <p>เข้าสู่ระบบด้วยวิธีอื่น</p>
        </div>
        <div class="banner-login">
          <!-- <VImg src="/img/banner-true.png" alt="login" class="banner-img" /> -->
        </div>
      </div>
    </div>
  </v-container>
</template>
<style scoped>
.login-form {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
}

.login-phone-email {
  padding: 0 16px;

  p {
    display: flex;
    justify-content: flex-end;
    padding-top: 6px;
    color: #61657E;
  }
}

.login-bottom {
  padding: 0 16px;
}

.login-social {
  margin: 54px 0px;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #61657E;
  }
}

.banner-login {}
</style>