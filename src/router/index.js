import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Calendar from "../views/Calendar.vue";
import DayPlan from "../views/DayPlan.vue";
import GoalList from "../views/GoalList.vue";
import Profile from "../views/Profile.vue";
import CashRecord from "../views/CashRecord.vue";
import Projects from "../views/Projects.vue";
import Habits from "../views/Habits.vue";
import SignIn from "../views/SignIn.vue";
import SignUp from "../views/SignUp.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/calendar",
    name: "Calendar",
    component: Calendar
  },
  {
    path: "/dayPlan",
    name: "DayPlan",
    component: DayPlan
  },
  {
    path: "/goalList",
    name: "GoalList",
    component: GoalList
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "/cashRecord",
    name: "CashRecord",
    component: CashRecord
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/habits",
    name: "Habits",
    component: Habits
  },
  {
    path: "/signIn",
    name: "SignIn",
    component: SignIn
  },
  {
    path: "/signUp",
    name: "SignUn",
    component: SignUp
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
