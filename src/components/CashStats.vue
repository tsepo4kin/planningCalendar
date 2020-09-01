<template>
  <div class="cash stats component">
    <v-row>
      <v-col>
        <v-card class="primary lighten-2 mx-auto">
          <v-card-title class="text-center d-block">
            1000
          </v-card-title>
          <v-card-subtitle class="text-center">
            Income
          </v-card-subtitle>
          <income-stats></income-stats>
        </v-card>
      </v-col>

      <v-col>
        <v-card class="red accent-2 mx-auto">
          <v-card-title class="text-center d-block">
            1000
          </v-card-title>
          <v-card-subtitle class="text-center">
            Outcome
          </v-card-subtitle>
          <income-stats></income-stats> 
        </v-card>
      </v-col>

      <v-col v-if="isBalance">
        <v-card class="green accent-3 mx-auto">
          <v-card-title class="text-center d-block">
            1000
          </v-card-title>
          <v-card-subtitle class="text-center">
            Balance
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import IncomeStats from './IncomeStats'
export default {
  components: {
    IncomeStats
  }
}
</script>

<style>

</style>