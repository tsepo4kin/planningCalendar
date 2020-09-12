<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-checkbox v-model="task.done" success class="mr-3"></v-checkbox>
          {{task.title}}
          <v-btn icon class="ml-3">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <span class="timer ml-auto display-1">{{task.time}}</span>
          <v-btn icon class="ml-3" @click="deleteTaskById(task.id)">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>{{tag}}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    task: {
      required: true
    }
  },
  computed: {
    tag() {
      return this.task.tags.join(", ");
    }
  },
  methods: {
    deleteTaskById(id) {
      console.log(id);
    }
  }
};
</script>

<style>
</style>