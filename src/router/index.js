import Vue from 'vue'
import Router from 'vue-router'
import _ from 'lodash'
import ITSys from '../Sys-block/ITSys/Router/index'
var route = _.concat(ITSys)
Vue.use(Router)
export default new Router({
  routes: route
})
