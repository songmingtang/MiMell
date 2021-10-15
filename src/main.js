import Vue from 'vue'
import router from './router'
import axios from 'axios'
import App from './App.vue'

//根据前端的跨域方式做调整
axios.defaults.baseURL = '/api';
//设置超时时间(8s)
axios.defaults.timeout = 8000
    //接口错误拦截
axios.interceptors.request.use(function(response) {
    let res = response.data;
    if (res.status == 0) {
        return res.data;
    } else if (res.status == 10) {
        window.location.href = '/#/login'
    } else {
        alert(res.msg);
    }
})

Vue.prototype.axios = axios
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')