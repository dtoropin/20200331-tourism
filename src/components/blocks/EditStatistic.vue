<template lang="pug">
  .edit
    form.edit__form(@submit.prevent='edit')
      .edit__close(@click='close') x
      .edit__title \#{{ stat.id }}
      label.edit__item
        span.edit__title number
        input.edit__input(
          type='number'
          min='1'
          v-model='stat.number'
        )
        span.edit__error(
          v-show='validation.firstError("stat.number")'
        ) {{ validation.firstError("stat.number") }}
      label.edit__item
        span.edit__title name
        input.edit__input(
          type='text'
          v-model='stat.name'
        )
        span.edit__error(
          v-show='validation.firstError("stat.name")'
        ) {{ validation.firstError("stat.name") }}
      .edit__item
        button.edit__btn(type='submit') change
    .edit__popup(v-show='error') {{ error }}
</template>

<script>
import { mapState, mapActions } from "vuex";
import { Validator } from "simple-vue-validator";
import axios from "axios";
export default {
  props: {
    stat: {
      id: Number,
      number: Number,
      name: String
    }
  },
  data: () => ({
    error: ""
  }),
  methods: {
    ...mapActions("base", ["setIsEditedStat"]),
    ...mapActions("statistic", ["getStatistic"]),
    async edit() {
      if (await this.$validate()) {
        try {
          const response = await axios.post("/edit/statistic", this.stat);
          if (response.data.error) {
            throw new Error(response.data.error);
          }
          this.getStatistic();
          this.setIsEditedStat(false);
        } catch (error) {
          this.error = error;
        }
      }
    },
    close() {
      this.setIsEditedStat(false);
      this.getStatistic();
    }
  },
  validators: {
    "stat.number": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .regex(/^[0-9]{1,16}$/, "неверный номер");
    },
    "stat.name": function(value) {
      return Validator.value(value)
        .required("заполните поле")
        .regex(/^[a-z0-9_-]{3,16}$/, "неверный формат имени");
    }
  }
}
</script>

<style lang="postcss" scoped>
.edit {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.705);
  display: flex;
  justify-content: center;align-items: center;
}
.edit__form {
  position: relative;
  max-width: 300px;
  padding: 10px;
  border-radius: 7px;
  background: #ffffff;
}
.edit__close {
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
  background: #ffffff;
  transition: .3s background-color ease;
  &:hover {
    background: #ffaaaa;
  }
}
.edit__item {
  position: relative;
  display: block;
  font-size: 18px;
  font-weight: 300;
  & + .edit__item {
    margin-top: 30px;
  }
}
.edit__title {
  display: block;
  margin-bottom: 10px;
}
.edit__input {
  border: 1px solid #ccc;
  border-radius: 7px;
  outline: none;
  padding: 0.625rem 0.9375rem;
}
.edit__btn {
  padding: 7px 15px;
  font-weight: 300;
  border-radius: 3px;
  transition: 0.3s background-color ease;
  &:hover {
    background: #bebebe;
  }
}
.edit__error {
  position: absolute;
  top: 100%;
  left: 0;
  font-size: 13px;
  font-weight: 300;
  width: 100%;
  color: #ff2a2a;
  text-align: center;
}
.edit__popup {
  position: absolute;
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