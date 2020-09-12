<template>
  <v-row align="center" justify="center">
    <v-col cols="12" sm="8" md="5">
      <v-card class="elevation-12">
        <v-toolbar color="green darken-3" dark>
          <v-toolbar-title>Регистрация</v-toolbar-title>
        </v-toolbar>
        <v-alert :value="error" type="warning">{{error}}</v-alert>
        <v-card-text>
          <v-form v-model="valid">
            <v-text-field
              v-model="email"
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="email"
              required
              :rules="emailRules"
            ></v-text-field>

            <v-text-field
              color="blue"
              v-model="password"
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              required
              :rules="passwordRules"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-3"
            dark
            @click.prevent="signUp"
            :disabled="proccessing || !valid"
          >Зарегистрироваться</v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Signup",
  data: () => ({
    email: null,
    password: null,
    valid: false,
    emailRules: [
      v => !!v || "Пожалуйста введите логин",
      v =>
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
        "Неправильный логин"
    ],
    passwordRules: [
      v => !!v || "Пожалуйста введи пароль",
      v => (v && v.length >= 6) || "Пароль слишком короткий"
    ]
  }),
  computed: {
    error() {
      return this.$store.getters.getError;
    },
    proccessing() {
      return this.$store.getters.getProccessing;
    },
    isAuth() {
      return this.$store.getters.isAuth;
    }
  },
  watch: {
    isAuth(val) {
      if (val === true) {
        this.$router.push("/");
      }
    }
  },
  methods: {
    signUp() {
      this.$store.dispatch("signUp", {
        email: this.email,
        password: this.password
      });
    }
  }
};
</script>