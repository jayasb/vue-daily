import Vue from "vue";
import VueRouter from "vue-router";
import MyForm from "../views/MyForm.vue";
import MyTable from "../views/MyTable.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/form",
    name: "Form",
    component: MyForm
  },
  {
    path: "/table",
    name: "Table",
    component: MyTable
  }
];

const router = new VueRouter({
  routes
});

export default router;
