<template>
  <v-row>
    <span style="width: 20px;" class="text-center">
      {{year}}
    </span>
    <v-col  justify="center" align="center" class="pa-0 ma-0" v-for='i in 52' :key='i + "week"'>
      <v-sheet
        style="margin: 1px;"
        width="15"
        height="15"
        color="red"
      ></v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    year: {
      type: Number
    }
  }
}
</script>

<style>

</style>