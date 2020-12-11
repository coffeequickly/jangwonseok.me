'use strict'
import axios from 'axios';
import Vue from 'vue'

const baseUrl = 'https://api.jangwonseok.me/wp-json/wp/v2',
    fetchProtocol = axios.create();


Vue.prototype.fetchAPI = function(method, endpoint, data = null) {
    // axios 설정 기본값
    let axiosOptions = {
        method: method,
        url: endpoint,
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
        },
        timeout: 10000
    }

    // 데이터가 있을 경우
    if (data) {
        axiosOptions.data = data
    }

    return new Promise((resolve, reject) => {
        fetchProtocol(axiosOptions).then(response => {
            if(response.data.length === 0){
                return $nuxt.error({ statusCode: 404, message: 'post not found' })
            }else{
                resolve(response)
            }
        }).catch(error => {
            if(error.response.status === 404){
                return $nuxt.error({ statusCode: 404, message: 'post not found' })
            }else{
                alert('이런! 오류가 발생한 것 같아요 🤔\n버그와 싸우러 갈 불쌍한 개발자를 응원해 주세요 ㅠㅠ\n※ '+error.response.data.message);
                return false;
            }
        })
    })
}
