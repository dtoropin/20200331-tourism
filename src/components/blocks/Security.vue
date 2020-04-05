<template lang="pug">
  .list__content
    .list__row
      h3 Change name and password
      form(@submit.prevent='change').list__form
        label.list__item
          span.list__title New name
          input.list__input(
            type='text'
            v-model='user.name'
          )
          span.list__error(
            v-show='validation.firstError("user.name")'
          ) {{ validation.firstError("user.name") }}
        label.list__item
          span.list__title New password
          input.list__input(
            type='text'
            v-model='user.pass'
          )
          span.list__error(
            v-show='validation.firstError("user.pass")'
          ) {{ validation.firstError("user.pass") }}
        label.list__item
          span.list__title Confirm password
          input.list__input(
            type='text'
            v-model='user.confpass'
          )
          span.list__error(
            v-show='validation.firstError("user.confpass")'
          ) {{ validation.firstError("user.confpass") }}
        label.list__item
          button.list__btn(type='submit') change
          button.list__btn(type='reset') reset
    .list__popup(v-show='error') {{ error }}
</template>

<script>
import { mapActions, mapState } from "vuex";
import axios from "axios";
import { Validator } from "simple-vue-validator";
export default {
  data: () => ({
    user: {
      pass: "",
      confpass: "",
      name: "admin"
    },
    submitted: false,
    error: ""
  }),
  methods: {
    ...mapActions("base", ["setIsLogin"]),
    async change() {
      this.submitted = true;
      if (await this.$validate()) {
        try {
          const response = await axios.post("/login/change", this.user);
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          this.setIsLogin(false);
          localStorage.removeItem("token");
          this.$router.push('/login');
        } catch (error) {
          this.error = error;
          setTimeout(() => (this.error = ""), 1500);
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
    "user.pass": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .regex(/^[a-z0-9_-]{3,16}$/, "неверный формат пароля");
    },
    "user.confpass, user.pass": function(confpass, pass) {
      if (this.submitted || this.validation.isTouched("user.confpass")) {
        return Validator.value(confpass)
          .required("заполните поле")
          .match(pass);
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
.list__content {
  position: relative;
}
.list__row {
  margin-bottom: 10px;
  padding: 10px;
  border-bottom: 1px solid #cccccc;
  &:last-child {
    border: none;
    margin-bottom: 0;
  }
  & h3 {
    font-weight: 500;
    margin-bottom: 10px;
  }
  & p {
    font-weight: 300;
    margin-bottom: 30px;
  }
}
.list__form {
  max-width: 300px;
  margin: 0 auto;
}
.list__item {
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 300;
  & + .list__item {
    margin-top: 30px;
  }
}
.list__title {
  display: block;
  margin-bottom: 10px;
}
.list__input {
  border: 1px solid #ccc;
  border-radius: 7px;
  outline: none;
  padding: 0.625rem 0.9375rem;
}
.list__btn {
  padding: 7px 15px;
  font-weight: 300;
  border-radius: 3px;
  transition: 0.3s background-color ease;
  & + .list__btn {
    margin-left: 7px;
  }
  &:hover {
    background: #bebebe;
  }
}
.list__error {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  color: #ff2a2a;
  text-align: center;
}
.list__popup {
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