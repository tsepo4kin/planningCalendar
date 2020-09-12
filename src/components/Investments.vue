<template>
  <div class="investments component">
    <v-row>
      <share-table></share-table>
      <share-circle></share-circle>
    </v-row>
  </div>
</template>

<script>
import ShareTable from "./ShareTable";
import ShareCircle from "./ShareCircle";
export default {
  components: {
    ShareTable,
    ShareCircle
  }
};
</script>

<style>
</style>