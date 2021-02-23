import request from '../common/request'

const promisify = function(url, method, data) {
    return new Promise((resolve, reject) => {
        request({
            url: url,
            method: method,
            data
        })
            .then(res => {
                if (res.Code === '0') {
                    resolve(res)
                }
            })
            .catch(err => {
                new Error(err)
                reject(err)
            })
    })
}

/* 获取手机验证码 */
export function getVCode(data) {
  return promisify('/SMS/Send', 'post', data)
}

/* 获取邀请信息 */
export function inviteInfo(data) {
    return promisify('/Team/InviteInfo', 'post', data)
}

/* 提交邀请 */
export function inviteApply(data) {
    return promisify('/Team/InviteInfo', 'post', data)
}