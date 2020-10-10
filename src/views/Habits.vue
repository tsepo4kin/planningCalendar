<template>
  <div>
    <v-form>
      <v-row>
        <v-col>
          <v-text-field v-model="title" placeholder="Habit name"></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="description"
            placeholder="Habit description"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-text-field
            v-model="count"
            placeholder="Habit count"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-btn @click="addHabit" width="80%" class="mx-auto d-block"
        >submit</v-btn
      >
    </v-form>
    <v-row>
      <v-col>
        <habit-item
          v-for="habit in habits"
          :key="habit.id"
          :data="habit"
        ></habit-item>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import HabitItem from "@/components/HabitItem";
export default {
  components: {
    HabitItem
  },
  data: () => ({
    title: null,
    count: null,
    description: null
  }),
  created() {
    this.$store.dispatch("setHabits");
  },
  computed: {
    habits() {
      return this.$store.getters.getHabits;
    }
  },
  methods: {
    addHabit() {
      this.$store.dispatch("addHabit", {
        title: this.title,
        count: this.count,
        description: this.description,
        id: this.generateId()
      });
      this.$store.dispatch("saveHabits");
      this.title = null;
      this.count = null;
      this.description = null;
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
