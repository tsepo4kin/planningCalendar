<template>
  <div>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>
            Habbit name
            <v-btn icon class="ml-3">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
            <div class="ml-auto d-block">
              <v-row><span class="total-days">0</span></v-row>
              <v-row><span class="display-10">Total days</span></v-row>
            </div>
            <v-btn icon class="ml-3">
              <v-icon>mdi-close</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-subtitle>Description</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {

}
</script>
