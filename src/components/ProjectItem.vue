<template>
  <v-col justify="center" align="center">
    <v-card class="deep-purple accent-4 pb-2" dark min-width="300" width="300">
      <v-card-title>
        <span style="max-width: 232px" class="text-center mx-auto">{{
          project.title
        }}</span>
        <v-btn @click="deleteItem" icon>
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle class="text-center d-block ml-4" style="width: 232px">{{
        project.subtitle
      }}</v-card-subtitle>
      <v-card-text>{{ project.description }}</v-card-text>
      <v-btn class="mx-auto d-block">Open</v-btn>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    project: {
      require: true
    }
  },
  methods: {
    deleteItem() {
      this.$store.dispatch("deleteProjectById", this.project.id);
      this.$store.dispatch("saveProjects");
    }
  }
};
</script>

<style></style>
