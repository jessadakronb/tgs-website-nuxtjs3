<template>
  <v-text-field ref="passwordInput" v-bind="$attrs" :type="showPassword ? 'text' : 'password'" placeholder="Password">
    <template v-slot:append-inner>
      <div class="custom-input-password">
        <img v-if="passwordInput" src="~/assets/mobile-site/icons/login/ic-clear@2x.png" width="16" height="16"
          class="clear-icon mr-2" @click="clearPassword" />
        <img v-if="!showPassword" src="~/assets/mobile-site/icons/login/ic-eyeclose.svg" width="16" height="16"
          class="eyeclose" @click="toggleShowPassword" />
        <img v-else src="~/assets/mobile-site/icons/login/ic-eyeopen.svg" width="16" height="16" class="eyeclose"
          @click="toggleShowPassword" />
      </div>
    </template>
  </v-text-field>
</template>

<script lang="ts" setup>
import { ref, Ref } from 'vue';

const showPassword = ref(false);
const passwordInput: Ref<HTMLInputElement | null> = ref(null);

const toggleShowPassword = () => {
  showPassword.value = !showPassword.value;
  if (passwordInput.value) {
    passwordInput.value.blur();
  }
};
const clearPassword = () => {
  if (passwordInput.value) {
    passwordInput.value.value = ''; // Clear the input element's value
  }
};
</script>

<style>
.custom-input-password {
  display: flex;
  align-items: flex-start;
  gap: 10px;

  img {
    cursor: pointer;
  }
}
</style>
