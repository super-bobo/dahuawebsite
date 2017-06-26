import axios from 'axios'
import qs from 'qs'

// axios 配置
axios.defaults.timeout = 5000;
axios.defaults.headers.post['accept'] = 'application/json, text/plain, */*';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = 'http://localhost:8080/';

//POST传参序列化
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = qs.stringify(config.data);
    }
    return config;
},(error) =>{
    return Promise.reject(error);
});

//返回状态判断
axios.interceptors.response.use((res) =>{
    if(!res.data.success){
        // _.toast(res.data.msg);
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    return Promise.reject(error);
});

export function fetch(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response.data);
            })
            .catch((error) => {
               reject(error)
            })
    })
}

export default {

    /**
     * 获取产品菜单栏
     */
    productMenu() {
        return fetch('indexApi/home/products_menu')
    },

    /**
     * 获取约跑步详情
     */
    SportsDetail(id) {
        return fetch('/api/sportDetail', {sportId: id})
    }
}