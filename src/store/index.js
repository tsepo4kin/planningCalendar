import Vue from "vue";
import Vuex from "vuex";
import GeneralModule from "./general";
import UserModule from "./user";
import DayPlanModule from "./dayPlan";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    GeneralModule,
    UserModule,
    DayPlanModule
  }
});
