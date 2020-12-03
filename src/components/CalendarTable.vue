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
    <v-row v-for="year in getCurrAge" :key="year + 'curr years'" style="padding-left: 20px">
      <v-col v-for="i in 52" :key="i + 'week from curr age'" style="margin:1px; padding: 0; width: 12px; height: 12px">
        <span
          class="d-block"
          style="margin: 1px; width: 10px; height: 10px; background-color: red;"
          ></span>
      </v-col>
    </v-row>
    <v-row style="padding-left: 20px">
      <v-col v-for="i in peekWeeks" :key="i + 'peek week from curr year'" style="margin:1px; padding: 0; width: 12px; height: 12px">
        <span
          class="d-block"
          style="margin: 1px; width: 10px; height: 10px; background-color: green;"
          ></span>
      </v-col>
      <v-col v-for="i in unPeekWeeks" :key="i + 'unpeek week from curr year'" style="margin:1px; padding: 0; width: 12px; height: 12px">
        <span
          class="d-block"
          style="margin: 1px; width: 10px; height: 10px; background-color: gray;"
          ></span>
      </v-col>
    </v-row>
    <v-row v-for="year in getPlanAge-getCurrAge-1" :key="year + 'plan years'" style="padding-left: 20px">
      <v-col v-for="i in 52" :key="i + 'week from plan age'" style="margin:1px; padding: 0; width: 12px; height: 12px">
        <span
          class="d-block"
          style="margin: 1px; width: 10px; height: 10px; background-color: white;"
          ></span>
      </v-col>
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
      return parseInt(this.$store.getters.getCurrentAge)
    },
    getPlanAge() {
      return parseInt(this.$store.getters.getPlanningAge)
    }
  }
};
</script>

<style></style>
