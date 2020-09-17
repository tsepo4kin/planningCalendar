<template>
  <v-form class="green rounded-sm">
    <v-row class="mx-1">
      <v-col>
        <v-text-field v-model="task.title" placeholder="title" required dense outlined></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="task.time" placeholder="time" required dense outlined></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="tagsStr" placeholder="tags sep. comm." required dense outlined></v-text-field>
      </v-col>
    </v-row>
    <v-row class="pb-2">
      <v-btn width="90%" @click.prevent="addTask" class="d-block mx-auto">Add task</v-btn>
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
      tags: null
    },
    tagsStr: null
  }),
  computed: {
    
  },
  methods: {
    tagsStrToTaskArr() {
      return this.tagsStr.split(',')
    },
    generateId() {
      const str =
        "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
      const length = 8;
      let res = "";
      for (let i = 0; i < length; i++) {
        res += str[Math.round(Math.random() * str.length)];
      }
      return res;
    },
    addTask() {
      this.task.id = this.generateId();
      this.task.tags = this.tagsStrToTaskArr();
      // console.log(this.task)
      this.$store.dispatch('addTask', this.task)
    }
  }
};
</script>

<style>
</style>