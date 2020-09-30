<template>
  <div class="cash stats component">
    <v-btn @click="isBalance = !isBalance">Use Balance</v-btn>
    <v-row>
      <v-col>
        <v-card class="primary lighten-2 mx-auto">
          <v-card-title class="text-center d-block">{{
            totalIncome
          }}</v-card-title>
          <v-card-subtitle class="text-center">Income</v-card-subtitle>
          <stats-table :tableData="incomeData" :form="'Income'"></stats-table>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="red accent-2 mx-auto">
          <v-card-title class="text-center d-block">{{
            totalOutcome
          }}</v-card-title>
          <v-card-subtitle class="text-center">Outcome</v-card-subtitle>
          <stats-table :tableData="outcomeData" :form="'Outcome'"></stats-table>
        </v-card>
      </v-col>

      <v-col v-if="isBalance">
        <v-card class="green accent-3 mx-auto">
          <v-card-title class="text-center d-block">{{
            totalIncome - totalOutcome
          }}</v-card-title>
          <v-card-subtitle class="text-center">Balance</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import StatsTable from "./StatsTable";
export default {
  data: () => ({
    isBalance: true
  }),
  components: {
    StatsTable
  },
  created() {
    this.$store.dispatch("setIncome");
    this.$store.dispatch("setOutcome");
  },
  computed: {
    incomeData() {
      return this.$store.getters.getIncome;
    },
    outcomeData() {
      return this.$store.getters.getOutcome;
    },
    totalOutcome() {
      let res = 0;
      for (let i of this.outcomeData) {
        res += i.value;
      }
      return res;
    },
    totalIncome() {
      let res = 0;
      for (let i of this.incomeData) {
        res += i.value;
      }
      return res;
    }
  }
};
</script>

<style></style>
