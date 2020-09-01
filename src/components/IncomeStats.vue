<template>
  <div class="pb-2">
    <v-data-table style='border: 1px solid black'
      dense
      :headers='headers' 
      :items='tableData'
    ></v-data-table>

    <h3 class="text-center">Input you income</h3>
    <v-form>
      <v-row class="px-2">
        <v-col cols="12" sm="6" lg="6" class="mb-0">
          <v-text-field
            :rules='[rules.required, rules.string]'
            v-model='categoryName'
            clearable
            color="black"
            label="Income name"
            placeholder="Salary"
            outlined
          ></v-text-field>
    
        </v-col>
        <v-col cols="12" sm="6" lg="6" class="mb-0" >
          <v-text-field
            :rules='[rules.required, rules.number]'
            v-model='value'
            color="black"
            label="value"
            placeholder="10000"
            outlined
          ></v-text-field>
          
        </v-col>
      </v-row>
    </v-form>
    <v-btn @click.prevent='uploadTableData' class="mx-auto d-block">Add</v-btn>
    
  </div>
</template>

<script>
export default {
  data: () => ({
    categoryName: null,
    value: null,
    incomeMoney: null,
    rules: {
      required: value => !!value,
      string: value => {
        const pattern = /[a-zA-Z0-9]/
        return pattern.test(value) || 'Not string'
      },
      number: value => {
        const pattern = /[0-9]/
        return pattern.test(value) || 'Not number'
      }
    },
    headers: [
      {text: 'Income name', value: 'name', align: 'start'},
      {text: 'Income value', value: 'value'}
    ],
    tableData: [
      {
        name: 'test',
        value: 100
      }
    ]
  }),
  methods: {
    uploadTableData() {
      if(!this.value || !this.categoryName) {
        this.tableData.push({
          name: this.categoryName,
          value: this.value
        })
      }
      this.categoryName = null
      this.value = null
      // updateSate
    }
  },
  props: {
    data: {
      type: Object,
      // required: true
    },
    type: {
      type: String,
      // required: true
    }
  }
}
</script>