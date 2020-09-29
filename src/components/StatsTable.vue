<template>
  <div class="pb-2">
    <v-data-table
      style="border: 1px solid black"
      dense
      :headers="headers"
      :items="tableData"
      :item-key="tableData.id"
    >
      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="editItem(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteById(item.id)">
          mdi-delete
        </v-icon>
      </template>
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
  props: {
    form: {
      required: true,
    },
    tableData: {
      required: true,
    },
  },
  data: () => ({
    rules: {
      required: (value) => !!value,
      string: (value) => {
        const pattern = /[a-zA-Z0-9]/;
        return pattern.test(value) || "Not string";
      },
      number: (value) => {
        const pattern = /[0-9]/;
        return pattern.test(value) || "Not number";
      },
      counter: (value) => value.length > 4,
    },

    categoryName: null,
    value: null,
    totalMoney: null,
    headers: [
      { text: "Category name", value: "name", align: "center" },
      { text: "Category value", value: "value", align: "center" },
      { text: "Actions", value: "actions", align: "center", sortable: false },
    ],
  }),
  methods: {
    addTableData() {
      if (this.value && this.categoryName) {
        if (this.form == "Income") {
          this.$store.dispatch("addIncome", {
            name: this.categoryName,
            value: parseInt(this.value),
            id: this.generateId(),
          });
          this.$store.dispatch("saveIncome");
        } else {
          this.$store.dispatch("addOutcome", {
            name: this.categoryName,
            value: parseInt(this.value),
            id: this.generateId(),
          });
          this.$store.dispatch("saveOutcome");
        }
      }
      this.categoryName = null;
      this.value = null;
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
    },
    
    deleteById(id) {
      if (this.form == "Income") {
        this.$store.dispatch("deleteIncome", id);
        this.$store.dispatch("saveIncome");
      } else {
        this.$store.dispatch("deleteOutcome", id);
        this.$store.dispatch("saveOutcome");
      }
    },
  },
};
</script>
