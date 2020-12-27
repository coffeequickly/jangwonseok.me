'use strict'
import axios from 'axios';
// import Vue from 'vue'

const baseUrl = 'https://api.jangwonseok.me/wp-json/wp/v2',
    fetchProtocol = axios.create();



export default function(method, endpoint, data = null) {
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
            resolve(response)
        }).catch(error => {
            reject(error);
        })
    })
}
