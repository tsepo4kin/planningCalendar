<template>
  <v-col justify="center" align="center">
    <v-card width="300" class="primary">
      <v-card-title class="text-center">
        <v-btn @click.prevent='openGoal()' icon class="mr-auto">
          <v-icon>
            mdi-border-color
          </v-icon>
        </v-btn>
        {{goal.title}}
        <v-btn @click.prevent='deleteGoal()' icon class="ml-auto">
          <v-icon>
            mdi-close
          </v-icon>
        </v-btn>
      </v-card-title>
      <v-card-subtitle>{{goal.date}}</v-card-subtitle>
      <ul style="padding-right: 24px">
        <li style='list-style-type: none' v-for="(goalPoint, i) in goal.goalPoints" :key='i + "goalPoint"'>{{goalPoint}}</li>
      </ul>
    </v-card>
  </v-col>
</template>

<script>
export default {
  props: {
    goal: {
      required: true
    }
  },
  methods: {
    deleteGoal() {
      console.log(1)
    },
    openGoal() {
      console.log(2)
    }
  }
}
</script>

<style scoped>

</style>