<template>
  <div>
    <!-- search -->

    <day-task></day-task>
    
    <day-plan-form></day-plan-form>
  </div>
</template>

<script>
import DayPlanForm from '@/components/DayPlanForm'
import DayTask from '@/components/DayTask'
export default {
  components: {
    DayPlanForm,
    DayTask
  }
};
</script>