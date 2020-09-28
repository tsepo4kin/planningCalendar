import Vue from "vue";
import Vuex from "vuex";
import GeneralModule from "./general";
import UserModule from "./user";
import DayPlanModule from "./dayPlan";
import CashRecordModule from "./cashRecord";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    GeneralModule,
    UserModule,
    DayPlanModule,
    CashRecordModule,
  },
});
