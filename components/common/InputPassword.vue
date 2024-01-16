<template>
  <v-text-field ref="passwordInput" v-bind="$attrs" :type="showPassword ? 'text' : 'password'" placeholder="Password">
    <template v-slot:append-inner>
      <img v-if="!showPassword" src="~/assets/mobile-site/icons/login/ic-eyeclose.svg" width="16" height="16"
        class="eyeclose" @click="toggleShowPassword" />
      <img v-else src="~/assets/mobile-site/icons/login/ic-eyeopen.svg" width="16" height="16" class="eyeclose"
        @click="toggleShowPassword" />
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
</script>

<style>
.eyeclose {
  cursor: pointer;
}
</style>
