<template>
  <div>
    <v-row>
      <v-form @submit="addHabit">
        <v-text-field
          placeholder=""
        ></v-text-field>
        <v-btn>submit</v-btn>
      </v-form>
    </v-row>
    <v-row>
      <v-col>
        <habit-item v-for="habit in habits" :key="habit.id" :data='habit'></habit-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HabitItem from '@/components/HabitItem'
export default {
  components: {
    HabitItem
  },
  data: () => ({
    title: null,
    count: null,
    description: null,
    habits: [{
      title: 'testHab',
      count: 2,
      description: 'test description test description test description test description'
    }]
  }),
  methods: {
    addHabit() {
      this.$store.dispatch("addHabit", {
        title: this.title,
        count: this.count,
        description: this.description,
        id: this.generateId(),
      });
      this.$store.dispatch("saveHabits");
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
  },
};
</script>
