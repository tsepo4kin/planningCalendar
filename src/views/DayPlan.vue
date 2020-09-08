<template>
  <div>
    <!-- search -->

    <day-task v-for="task in tasks" :key='task.id' :title='taks.title' :time='task.time' :id='task.id' :tags='task.tags'></day-task>
    
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
  },
  data: () => ({
    tasks: [{
      id: this.generateId(),
      title: 'testTitle',
      time: '20:25',
      tags: ['Studing','Programming','DailyLife']
    }]
  }),
  methods: {
    generateId() {
      const str = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
      const length = 8
      let res = ''
      for(let i = 0; i<length;i++) {
        res+=str[Math.round(Math.random()*str.length)]
      }
      return res
    }
  }
};
</script>