<template lang="pug">
  .wrapper__content
    .login
      form(@submit.prevent='login').login__form
        label.login__item
          input.login__input(
            type="text"
            v-model='user.name'
            placeholder="login"
            autofocus
          )
          span.login__error(
            v-show='validation.firstError("user.name")'
          ) {{ validation.firstError("user.name") }}
        label.login__item
          input.login__input(
            type="password"
            v-model='user.password'
            placeholder="password"
          )
          span.login__error(
            v-show='validation.firstError("user.password")'
          ) {{ validation.firstError("user.password") }}
        .login__item
          button.login__btn(type="submit") enter
      .login__popup(v-show='error') {{ error }}
</template>

<script>
import { Validator } from "simple-vue-validator";
import { mapActions } from "vuex";
import axios from "axios";
export default {
  data: () => ({
    user: {
      name: "",
      password: ""
    },
    error: ""
  }),
  methods: {
    ...mapActions("base", ["setIsLogin"]),
    async login() {
      if (await this.$validate()) {
        try {
          const response = await axios.post("/login", this.user);
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          const token = response.data.token;
          localStorage.setItem("token", token);
          axios.defaults.headers.common["Authorization"] = localStorage.getItem("token");
          this.setIsLogin(true);
          this.$router.push('/admin');
        } catch (error) {
          this.error = error;
          setTimeout(() => (this.error = ""), 2000);
        }
      }
    }
  },
  validators: {
    "user.name": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .regex(/^[a-z0-9_-]{3,16}$/, "неверный формат имени");
    },
    "user.password": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .regex(/^[a-z0-9_-]{3,12}$/, "неверный формат пароля");
    }
  }
};
</script>

<style lang="postcss" scoped>
.login {
  position: relative;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login__form {
  max-width: 300px;
}
.login__item {
  position: relative;
  display: block;
  font-size: 18px;
  & + .login__item {
    margin-top: 30px;
  }
}
.login__input {
  border: 1px solid #cccccc;
  border-radius: 7px;
  outline: none;
  padding: 10px 15px;
  font-weight: 300;
  &:focus {
    border: 1px solid #a1a1a1;
  }
}
.login__error {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  color: #ff2a2a;
  text-align: center;
}
.login__btn {
  width: 100%;
  border-radius: 7px;
  outline: none;
  padding: 10px 15px;
  background: #cccccc;
  transition: 0.3s background-color ease;
  &:hover {
    background: #a1a1a1;
  }
  &:active {
    box-shadow: inset 0 0 10px #cccccc;
  }
}
.login__popup {
  position: fixed;
  max-width: 500px;
  bottom: 5px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 50px;
  color: #000;
  background: #ff7171;
  border-radius: 7px;
}
</style>