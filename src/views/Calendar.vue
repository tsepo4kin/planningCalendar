<template>
  <div>
    <v-row>
      <v-col class="primary mx-5" lg="3">
        <!-- input calendar component -->
      </v-col>

      <v-col class="amber mx-5" lg="8">
        <calendar-table></calendar-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import CalendarTable from '@/components/CalendarTable'
export default {
  components: {
    CalendarTable
  }
};
</script>
