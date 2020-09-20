<template>
  <div class="pb-2">
    <v-data-table
      style="border: 1px solid black"
      dense
      :headers="headers"
      :items="tableData"
      :item-key="tableData.id"
      v-model='selected'
      show-select
      single-select
    >
    </v-data-table>

    <h3 class="text-center">Input you value</h3>

    <v-form>
      <v-row class="px-2">
        <v-col cols="12" sm="6" lg="6" class="mb-0">
          <v-text-field
            :rules="[rules.required, rules.string]"
            v-model="categoryName"
            clearable
            color="black"
            label="Category name"
            placeholder="Salary"
            outlined
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" lg="6" class="mb-0">
          <v-text-field
            :rules="[rules.required, rules.number]"
            v-model="value"
            color="black"
            label="value"
            placeholder="10000"
            outlined
          ></v-text-field>
        </v-col>
      </v-row>
    </v-form>
    <v-btn @click.prevent="addTableData" class="mx-auto d-block">Add</v-btn>
  </div>
</template>

<script>
export default {
  data: () => ({
    rules: {
      required: value => !!value,
      string: value => {
        const pattern = /[a-zA-Z0-9]/;
        return pattern.test(value) || "Not string";
      },
      number: value => {
        const pattern = /[0-9]/;
        return pattern.test(value) || "Not number";
      },
      counter: value => value.length > 4
    },

    selected: [],

    categoryName: null,
    value: null,
    totalMoney: null,
    headers: [
      { text: "Category name", value: "name", align: "center" },
      { text: "Category value", value: "value", align: "center" }
    ],
    tableData: [
      {
        name: "test1",
        value: 100,
        id: "qwe123"
      },
      {
        name: "test2",
        value: 400,
        id: "qwasf3"
      },
      {
        name: "test3",
        value: 300,
        id: "qasv123"
      },{
        name: "test4",
        value: 200,
        id: "qwasdvz23"
      }
    ]
  }),
  methods: {
    addTableData() {
      if (this.value && this.categoryName) {
        this.tableData.push({
          name: this.categoryName,
          value: this.value,
          id: this.generateId()
        });
      }
      console.log(this.selected)
      this.categoryName = null;
      this.value = null;
      // updateSate
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
  },
  props: {
    data: {
      type: Object
      // required: true
    },
    type: {
      type: String
      // required: true
    }
  }
};
</script>