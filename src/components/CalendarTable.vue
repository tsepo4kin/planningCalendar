<template>
  <div>
    <v-row style="padding-left: 20px;">
      <v-col
        justify="center"
        align="center"
        class="pa-0 ma-0"
        v-for="i in 52"
        :key="i + 'weekHead'"
      >
        <span
          class="d-block"
          style="margin: 1px; font-size: 12px; width: 15px; height: 15px;"
          >{{ i }}</span
        >
      </v-col>
    </v-row>
    <v-row>
      {{getCurrAge}} - curr Age
      {{getPlanAge}} - plan Age
    </v-row>
  </div>
</template>

<script>

export default {
  components: {
  },
  data: () => ({
    currentAge: null,
    planningAge: null
  }),
  computed: {
    getCurrAge() {
      return this.$store.getters.getCurrentAge
    },
    getPlanAge() {
      return this.$store.getters.getPlanningAge
    }
  }
};
</script>

<style></style>
