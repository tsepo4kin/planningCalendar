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
import Store from '../store/index'


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
    component: Calendar,
    beforeEnter: AuthGuard
  },
  {
    path: "/dayPlan",
    name: "DayPlan",
    component: DayPlan,
    beforeEnter: AuthGuard
  },
  {
    path: "/goalList",
    name: "GoalList",
    component: GoalList,
    beforeEnter: AuthGuard
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: AuthGuard
  },
  {
    path: "/cashRecord",
    name: "CashRecord",
    component: CashRecord,
    beforeEnter: AuthGuard
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects,
    beforeEnter: AuthGuard
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

function AuthGuard(from, to, next) {
  if(Store.getters.isAuth) {
    next()
  }else {
    next('/signin')
  }
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
