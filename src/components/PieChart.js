import Vue from "vue";
import { Pie, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;

export default Vue.component("line-chart", {
  extends: Pie,
  props: {
    chartData: Object,
  },
  mixins: [reactiveProp],
  mounted() {
    this.renderChart(this.chartData);
  },
});
