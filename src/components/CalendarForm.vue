<template>
  <v-form>
    <v-text-field
      v-model="currentAge"
      label="Current Age"
      required
      dark
      outlined
    ></v-text-field>
    <v-text-field
      v-model="plannigAge"
      label="Plannig Age"
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
    plannigAge: null
  })
}
</script>

<style>

</style>