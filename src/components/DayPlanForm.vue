<template>
  <v-form class="green rounded-sm">
    <v-row class="mx-1">
      <v-col>
        <v-text-field placeholder="title" required dense outlined></v-text-field>
      </v-col>
      <v-col>
        <v-text-field placeholder="time" required dense outlined></v-text-field>
      </v-col>
      <v-col>
        <v-text-field placeholder="tags sep. comm." required dense outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row class="pb-2">
      <v-btn width="90%" class="d-block mx-auto">Add task</v-btn>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data: () => ({
    task: {
      title: null,
      done: false,
      time: null,
      id: null,
      tags: []
    }
  }),
  methods: {
    generateId() {
      const str =
        "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
      const length = 8;
      let res = "";
      for (let i = 0; i < length; i++) {
        res += str[Math.round(Math.random() * str.length)];
      }
      return res;
    }
  }
};
</script>

<style>
</style>