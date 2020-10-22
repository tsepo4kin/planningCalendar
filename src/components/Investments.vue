<template>
  <div class="investments component">
    <v-row>
      <share-table></share-table>
      <v-col class="pb-2">
        <pie-chart :chartData="dataChart"></pie-chart>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ShareTable from "./ShareTable";
import PieChart from "./LineChart";
export default {
  data: () => ({
    dataChart: {
      datasets: [
        {
          data: [10, 20, 30],
          backgroundColor: ["red", "yellow", "blue"],
        },
      ],

      labels: ["Red", "Yellow", "Blue"],
    },
  }),
  components: {
    ShareTable,
    PieChart,
  },
};
</script>

<style></style>
