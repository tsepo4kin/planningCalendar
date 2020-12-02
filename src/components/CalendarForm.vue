<template>
  <v-form>
    <v-text-field
      @change='onChangeCurr'
      v-model="currentAge"
      label="Current Age"
      required
      dark
      outlined
    ></v-text-field>
    <v-text-field
      @change='onChangePlan'
      v-model="plannigAge"
      label="Plannig Age"
      required
      dark
      outlined
    ></v-text-field>
    <v-text-field
      v-model="birthDate"
      label="Birth date"
      required
      dark
      outlined
    ></v-text-field>
  </v-form>
</template>

<script>
export default {
  data: ()=> ({
    currentAge: null,
    plannigAge: null,
    birthDate: null
  }),
  methods: {
    onChangeCurr() {
      console.log(1)
      this.$store.dispatch('setCurrAge', this.currentAge)   
    },
    onChangePlan() {
      this.$store.dispatch('setPlanAge', this.plannigAge) 
    }
  }
}
</script>

<style>

</style>