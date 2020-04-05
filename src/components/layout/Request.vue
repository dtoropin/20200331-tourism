<template lang="pug">
  section.request
    .request__block.container
      .request__head
        h2.request__title Request for a hike
      form(@submit.prevent='request').request__form
        label.request__item
          span.request__name your name
          input.request__input(
            type="text"
            v-model='participant.name'
          )
          span.request__error(
            v-show='validation.firstError("participant.name")'
          ) {{ validation.firstError("participant.name") }}
        label.request__item
          span.request__name your email
          input.request__input(
            type="email"
            v-model='participant.email'
          )
          span.request__error(
            v-show='validation.firstError("participant.email")'
          ) {{ validation.firstError("participant.email") }}
        label.request__item
          span.request__name your phone
          input.request__input(
            type="phone"
            placeholder="89997776655"
            v-model='participant.phone'
          )
          span.request__error(
            v-show='validation.firstError("participant.phone")'
          ) {{ validation.firstError("participant.phone") }}
        .request__item.request__item--btn
          button.request__btn(type="submit") request
          button.request__btn(type="reset") reset
    .request__popup.request__popup--error(v-show='error') {{ error }}
    .request__popup.request__popup--success(v-show='success')
      span(v-html='success')
      span.request__close(@click='close') x
</template>

<script>
import { Validator } from "simple-vue-validator";
import axios from "axios";
export default {
  data: () => ({
    participant: {
      name: "",
      email: "",
      phone: ""
    },
    error: "",
    success: ""
  }),
  methods: {
    async request() {
      if (await this.$validate()) {
        try {
          const response = await axios.post("/put/request", this.participant);
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          if (response.data.success) {
            let text =
              "Thank you " +
              this.participant.name +
              " for your request!<br>We will contact you as soon as possible.";
            this.success = text;
          }
        } catch (error) {
          this.error = error;
          setTimeout(() => (this.error = ""), 2000);
        }
      }
    },
    close() {
      document.querySelector(".request__form").reset();
      this.success = false;
    }
  },
  validators: {
    "participant.name": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .regex(/^[a-zA-Zа-яА-Я0-9_-]{3,30}$/, "неверный формат имени");
    },
    "participant.email": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .email("неверный формат email");
    },
    "participant.phone": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .integer("неверный формат phone")
        .maxLength(11, "длина не более 11 цифр");
    }
  }
};
</script>

<style lang="postcss" scoped>
.request {
  position: relative;
  padding: 100px 0;
  font-weight: 300;
  color: #000;
}
.request__title {
  font-size: 30px;
  text-align: center;
  margin-bottom: 70px;
}
.request__form {
  max-width: 300px;
  margin: 0 auto;
}
.request__item {
  position: relative;
  display: block;
  font-size: 18px;
  & + .request__item {
    margin-top: 30px;
  }
  &--btn {
    display: flex;
    justify-content: center;
  }
}
.request__name {
  display: block;
  padding: 0 10px 10px;
}
.request__input {
  border: 1px solid #cccccc;
  border-radius: 7px;
  outline: none;
  padding: 10px 15px;
  font-weight: 300;
  &:focus {
    border: 1px solid #a1a1a1;
  }
}
.request__error {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  color: #ff2a2a;
  text-align: center;
}
.request__btn {
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
  & + .request__btn {
    margin-left: 10px;
  }
}
.request__popup {
  max-width: 500px;
  left: 50%;
  padding: 10px 50px;
  color: #000;
  border-radius: 7px;
  &--error {
    position: fixed;
    bottom: 5px;
    transform: translateX(-50%);
    background: #ff7171;
  }
  &--success {
    position: absolute;
    padding: 20px 40px;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #a5ff71;
    box-shadow: 0 0 50px #5e5e5e;
  }
}
.request__close {
  position: absolute;
  top: 7px;
  right: 10px;
  padding: 0 5px;
  border-radius: 4px;
  display: block;
  cursor: pointer;
  font-size: 18px;
  font-weight: bold;
  color: #ff2a2a;
  background: transparent;
  transition: 0.3s background-color ease;
  &:hover {
    background: #ffaaaa;
  }
  &:active {
    box-shadow: inset 0 0 3px #ebebeb;
  }
}
</style>