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
  data: () => ({
    tasks: [
      {
        id: "qwdasfqwaf123451234",
        title: "testTitle",
        time: "20:25",
        done: false,
        tags: ["Studing", "Programming", "DailyLife"]
      }
    ]
  }),
  methods: {}
};
</script>