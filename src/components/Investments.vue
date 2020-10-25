<template>
  <div class="investments component">
    <v-row>
      <share-table></share-table>
      <v-col class="pb-2" lg="6">
        <pie-chart :chartData="dataChart"></pie-chart>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import ShareTable from "./ShareTable";
import PieChart from "./PieChart";
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
  computed: {
    investSummary() {
      return this.$store.getters.getShareItems.reduce((a,b) => a+b.total);
    },
    shareItemPercent() {
      let percents = []
      let labels = []
      for(let el in this.$store.getters.getShareItems) {
        percents.push(el.total/(this.investSummary/100))
        labels.push(el.ticker)
      }
      return { percents, labels }
    }
  },
  components: {
    ShareTable,
    PieChart,
  },
  mounted() {
    this.dataChart.datasets[0].data = this.shareItemPercent.percents
    this.dataChart.labels = this.shareItemPercent.percents
  }
};
</script>

<style></style>
