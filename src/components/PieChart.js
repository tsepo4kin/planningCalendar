import Vue from "vue";
import { Pie, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default Vue.component("pie-chart", {
  extends: Pie,
  props: {
    chartData: Object,
  },
  mixins: [reactiveProp],
  mounted() {
    this.renderChart(this.chartData);
  },
});
