<template>
  <div>
    <v-form class="grey rounded-t-xl pb-1">
      <v-row>
        <v-col sm="2" lg="2">
          <v-btn class="mx-auto d-block" @click.prevent="visible = !visible"
            >{{ visible ? "Hide" : "Show" }} form</v-btn
          >
        </v-col>
        <v-col sm="8" lg="8">
          <h3 class="text-center">Add goal</h3>
        </v-col>
        <v-col sm="2" lg="2">
          <v-btn @click.prevent="addPoint" class="mx-auto d-block"
            >add point</v-btn
          >
        </v-col>
      </v-row>
      <div v-if="visible">
        <v-row class="px-2">
          <v-col style="min-width: 200px">
            <v-text-field
              dense
              v-model="addedGoal.title"
              outlined
              placeholder="goal"
            ></v-text-field>
          </v-col>
          <v-col style="min-width: 200px">
            <v-text-field
              dense
              v-model="addedGoal.date"
              outlined
              placeholder="date"
            ></v-text-field>
          </v-col>
          <v-col
            v-for="(point, i) in addedGoal.pointsCount"
            :key="i + 'addedPoint'"
            style="min-width: 200px"
          >
            <v-text-field
              v-model="addedGoal.goalPoints[i]"
              dense
              outlined
              placeholder="goal point"
            ></v-text-field>
          </v-col>
        </v-row>
        <v-btn width="300" class="mx-auto d-block" @click.prevent="addGoal"
          >Add</v-btn
        >
      </div>
    </v-form>

    <v-row class="red accent-3 mt-1">
      <goal v-for="(goal, i) in goals" :key="i + 'goal'" :goal="goal"></goal>
    </v-row>
  </div>
</template>

<script>
import Goal from "@/components/Goal";

export default {
  data: () => ({
    visible: true,
    addedGoal: {
      title: null,
      date: null,
      goalPoints: [],
      pointsCount: 1,
      id: null,
    },
  }),
  components: {
    Goal,
  },
  computed: {
    goals() {
      return this.$store.getters.getGoals;
    },
  },
  methods: {
    addGoal() {
      this.addGoal.id = this.generateId();
      this.$store.dispatch("addGoal", this.addedGoal);
      this.addedGoal = {
        title: null,
        date: null,
        goalPoints: [],
        pointsCount: 1,
        id: null,
      };
      this.$store.dispatch("saveGoals");
    },
    addPoint() {
      this.addedGoal.pointsCount++;
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
  },
  created() {
    this.$store.dispatch("setGoals");
  },
};
</script>
