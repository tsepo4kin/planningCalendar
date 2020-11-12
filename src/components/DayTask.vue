<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-checkbox v-model="task.done" success class="mr-3"></v-checkbox>
          {{ task.title }}
          <v-btn @click="editDayTask(task.id)" icon class="ml-3">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <span class="timer ml-auto display-1">{{ task.time }}</span>
          <template>
            <v-btn icon class="ml-3" @click="deleteTaskById(task.id)">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </template>
          <v-form v-if="form" class="headline green rounded-sm">
            <v-row class="mx-1">
              <v-col>
                <v-text-field
                  v-model="task.title"
                  placeholder="title"
                  required
                  dense
                  outlined
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="task.time"
                  placeholder="time"
                  required
                  dense
                  outlined
                ></v-text-field>
              </v-col>
              <v-col>
                <v-text-field
                  v-model="tagsStr"
                  placeholder="tags sep. comm."
                  required
                  dense
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row class="pb-2">
              <v-btn width="90%" @click.prevent="addTask" class="d-block mx-auto"
                >fix task</v-btn
              >
            </v-row>
          </v-form>
        </v-card-title>
        <v-card-subtitle>{{ tag }}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    task: {
      required: true
    },
    tagStr: null
  },
  data: () => ({
    form: false
  }),
  computed: {
    tag() {
      return this.task.tags.join(", ");
    }
  },
  methods: {
    deleteTaskById(id) {
      this.$store.dispatch("deleteTaskById", id);
      this.$store.dispatch("saveTasks");
    },
    editDayTask(id) {
      this.form = !this.form
      console.log(id)
    },
  }
};
</script>

<style></style>
