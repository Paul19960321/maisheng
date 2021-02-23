import axios from 'axios'
import { message } from 'antd';

axios.defaults.baseURL = process.env.NODE_ENV === 'production'
    ? 'https://api.winksign.com/'
    : 'http://test-api.winksign.com/'
axios.defaults.timeout = 10000; 
axios.defaults.headers = {
    'Content-Type': 'application/json'
};

/* request拦截器 */
axios.interceptors.request.use(
    config => {
        return config;
    }
)

/* response拦截器 */
axios.interceptors.response.use(
    response => {
        if (response.data) {
            if (response.data.code !== 0) {
                message.warning(response.data.msg);
                return Promise.reject(response.data);
            }
        }
        return Promise.resolve(response.data);
    },
    error => {
        message.warning('服务器出现异常，请稍后重试');
        return Promise.reject(error.data);
    }
)

export default axios;