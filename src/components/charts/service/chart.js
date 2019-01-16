import axios from 'axios';

import { notification } from 'antd';


// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.code === 1) {window.localStorage.token = response.headers.access_token;}
    else if(response.data.code === -1) {window.location.href = `${window.location.origin}#/login`}
    else if(response.data.code !== undefined){
		notification.warning({
			message: '操作失败',
			description: response.data.msg,
			placement:'bottomRight'
		});
    }
    return response;
}, function (error) {
	notification.error({
		message: '错误！',
		description: `${error.name} ${error.message}`,
		placement:'bottomRight'
	});
    return Promise.reject(error);
});


const _CHART = {
	todoJson(str){
		return new Promise((resolve, reject) => {
			axios.get(`jalaPlanJob/person/planCount`,{headers: {'access_token': window.localStorage['token']}})
			.then((response) => {
				// if (response.data.code === 1) {window.localStorage.token = response.headers.access_token;}
				resolve(response.data)
			})
			.catch(function (error) { 
				reject(error)
			})
		})	
	},
	planJson(str){
		return new Promise((resolve, reject) => {
			axios.get(`jalaPlanJob/project/countData`,{headers: {'access_token': window.localStorage['token']}})
			.then((response) => {
				// if (response.data.code === 1) {window.localStorage.token = response.headers.access_token;}
				resolve(response.data)
			})
			.catch(function (error) { 
				reject(error)
			})
		})	
	},	
}


export default _CHART