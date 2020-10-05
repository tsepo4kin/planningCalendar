<template>
  <div>
    <v-row>
      <project-item v-for="p in projects" :key='p.id' :project='p'></project-item>
      <v-col justify="center" align="center">
        <v-card @click='addProject' style="cursor:pointer" class="deep-grey accent-4 pb-2" dark min-width="300" width="300" height="236">
          <v-icon size="180" class="d-block pt-3">mdi-plus-circle</v-icon>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ProjectItem from '@/components/ProjectItem'
export default {
  components: {
    ProjectItem
  },
  data: () => ({
    projects: [
      {
        title: 'test1',
        subtitle: 'subtitle',
        description: 'some description for test proj',
        id: 'lkasjdhfg'
      },
      {
        title: 'test2',
        subtitle: 'subtitle',
        description: 'some description for test proj2',
        id: '3478tqofhg'
      },
      {
        title: 'test3',
        subtitle: 'subtitle',
        description: 'some description for test proj3',
        id: 'w43s6dc'
      }
    ]
  }),
  methods: {
    addProject() {
      this.projects.push({
        title: null,
        subtitle: null,
        description: null,
        id: this.generateId()
      })
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

<style>
</style>