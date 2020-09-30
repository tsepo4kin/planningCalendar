<template>
  <v-row class="mx-4 share-component">
    <v-col
      v-for="(textField, i) in textFields"
      :key="i + 'text-field'"
      :lg="textField.size"
    >
      <v-text-field
        v-model="fieldsValue[Object.getOwnPropertyNames(fieldsValue)[i]]"
        hide-details
        dense
        outlined
        :placeholder="textField.placeholder"
      ></v-text-field>
    </v-col>
    <v-btn icon @click="deleteShareById">
      <v-icon>mdi-close</v-icon>
    </v-btn>
  </v-row>
</template>

<script>
export default {
  data: () => ({
    textFields: [
      { placeholder: "Name", size: 2 },
      { placeholder: "Ticker", size: 2 },
      { placeholder: "Price", size: 2 },
      { placeholder: "Amnt", size: 2 },
      { placeholder: "Total", size: 2 }
    ],
    fieldsValue: {
      name: null,
      ticker: null,
      price: null,
      anmt: null,
      total: null,
      id: "123asfcvbs123dsb35423q4r"
    }
  }),
  computed: {},
  methods: {
    deleteShareById() {}
  }
};
</script>

<style>
</style>