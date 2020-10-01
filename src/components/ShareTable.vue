<template>
  <v-col lg="6" class="share-table">
    <v-card>
      <v-card-title class="text-center d-block">Investments table</v-card-title>
      <share-item
        v-for="shareItem in shareItems"
        :fieldsValue="shareItem"
        :key="shareItem.id"
      ></share-item>
      <v-row class="mx-4">
        <v-btn @click="addShare" width="100%">Add share</v-btn>
      </v-row>
    </v-card>
  </v-col>
</template>

<script>
import ShareItem from "./ShareItem";
export default {
  components: {
    ShareItem
  },
  data: () => ({
    shareItems: []
  }),
  methods: {
    addShare() {
      this.shareItems.push({
        name: null,
        ticker: null,
        price: null,
        anmt: null,
        total: null,
        id: this.generateId()
      });
    },
    generateId() {
      const str =
        "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
      const length = 8;
      let res = "";
      for (let i = 0; i < length; i++) {
        res += str[Math.round(Math.random() * str.length)];
      }
      return res;
    }
  }
};
</script>

<style>
</style>