import user from 'api/user'

const request_user_info = {
  type: 'request_user_info'
}

function receiveUserInfo(info) {
  return {
    type: 'receive_user_info',
    info
  }
}

const invalidated_user_info = {
  type: 'invalidated_user_info'
}

export function updateUserInfoIfNeeded() {
  return (dispatch, getState) => {
    // 存在以下情况之一，则不做处理
    // 1、正在请求数据；
    // 2、当前数据是得到验证且未过期的(距离上次得到验证数据在10s以内)。
    let { fetching, validated, updateTime} = getState().user
    if (fetching || (validated && Date.now() - updateTime < 10000)) {
      return Promise.resolve()
    }

    dispatch(request_user_info)

    return user.info().then(res => {
      if (res.status === 1 && !res.error) {
        return dispatch(receiveUserInfo(res.data))
      } else {
        return dispatch(invalidated_user_info)
      }
    }, error => {
      return dispatch(invalidated_user_info)
    })
  }
}