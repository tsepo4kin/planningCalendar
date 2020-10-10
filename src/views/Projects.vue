<template>
  <div>
    <v-row>
      <project-item
        v-for="p in projects"
        :key="p.id"
        :project="p"
      ></project-item>
      <v-col justify="center" align="center">
        <v-card
          @click="addProject"
          style="cursor:pointer"
          class="deep-grey accent-4 pb-2"
          dark
          min-width="300"
          width="300"
          height="236"
        >
          <v-icon size="180" class="d-block pt-3">mdi-plus-circle</v-icon>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProjectItem from "@/components/ProjectItem";
export default {
  components: {
    ProjectItem
  },
  data: () => ({}),
  computed: {
    projects() {
      return this.$store.getters.getProjects;
    }
  },
  created() {
    this.$store.dispatch("setProjects");
  },
  methods: {
    addProject() {
      this.$store.dispatch("addProject", {
        title: null,
        subtitle: null,
        description: null,
        id: this.generateId()
      });
      this.$store.dispatch("saveProjects");
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
    }
  }
};
</script>

<style></style>
