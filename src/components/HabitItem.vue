<template>
  <v-card>
    <v-card-title>
      {{ data.title }}
      <v-btn icon class="ml-3">
        <v-icon>mdi-pencil</v-icon>
      </v-btn>
      <div class="ml-auto d-block">
        <v-row>
          <span class="total-days">{{ data.count }}</span>
        </v-row>
        <v-row>
          <span class="display-10">Total days</span>
        </v-row>
      </div>
      <v-btn icon class="ml-3" @click="deleteHabit">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-card-title>
    <v-card-subtitle>{{ data.description }}</v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      required: true
    }
  },
  methods: {
    deleteHabit() {
      this.$store.dispatch("deleteHabitById", this.data.id);
      this.$store.dispatch("saveHabits");
    }
  }
};
</script>

<style></style>
