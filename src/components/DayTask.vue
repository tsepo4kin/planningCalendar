<template>
  <v-row>
    <v-col>
      <v-card>
        <v-card-title>
          <v-checkbox success class="mr-3"></v-checkbox>
          {{title}}
          <v-btn icon class="ml-3">
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <span class="timer ml-auto display-1">{{time}}</span>
          <v-btn icon class="ml-3">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-subtitle>{{tags}}</v-card-subtitle>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: {
    title: {
      required: true
    },
    time: {
      required: true
    },
    id: {
      required: true
    },
    tags: {
      required: true
    }
  }
}
</script>

<style>

</style>