<template>
  <div>
    <v-btn @click="investments = !investments">{{
      investments ? "Cash stats" : "Investments"
    }}</v-btn>

    <investments v-if="investments"></investments>
    <cash-stats v-else></cash-stats>
  </div>
</template>

<script>
import Investments from "@/components/Investments";
import CashStats from "@/components/CashStats";
export default {
  data: () => ({
    investments: true
  }),
  components: {
    CashStats,
    Investments
  },
  computed: {}
};
</script>

<style>
</style>