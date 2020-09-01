<template>
  <div>
    <v-row style='padding-left: 20px;'>
      <v-col justify="center" align="center" class="pa-0 ma-0" v-for='i in 52' :key='i + "weekHead"'>
        <span
          class="d-block"
          style="margin: 1px; font-size: 12px; width: 15px; height: 15px;"
         >{{i}}</span>
      </v-col>
    </v-row>
    <calendar-year-in-week :year='i'
      v-for="i in 80" :key='i + "year"'
    ></calendar-year-in-week>
  </div>
</template>

<script>
import CalendarYearInWeek from './CalendarYearInWeek'

export default {
  components: {
    CalendarYearInWeek
  }
}
</script>

<style>

</style>