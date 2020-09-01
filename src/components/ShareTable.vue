<template>
  <v-col lg='6' class="share-table">
    <v-card>
      <v-card-title class="text-center d-block">Investments table</v-card-title>
      <share-item v-for="shareItem in shareItems" :key='shareItem + "shareItem"'></share-item>
      <v-row class="mx-4 ">
        <v-btn @click='addShare' width="100%">Add share</v-btn>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
import ShareItem from './ShareItem'
export default {
  components: {
    ShareItem
  },
  data: ()=> ({
    shareItems: 1
  }),
  methods: {
    addShare() {
      this.shareItems++;
    }
  }
}
</script>

<style>

</style>