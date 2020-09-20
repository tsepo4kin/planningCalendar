<template>
  <div>
    <!-- search -->

    <day-task v-for="task in tasks" :key="task.id" :task="task"></day-task>

    <day-plan-form></day-plan-form>
  </div>
</template>

<script>
import DayPlanForm from "@/components/DayPlanForm";
import DayTask from "@/components/DayTask";
export default {
  components: {
    DayPlanForm,
    DayTask
  },
  data: () => ({}),
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    }
  },
  created() {
    this.$store.dispatch("setTasks");
  },
  methods: {}
};
</script>
