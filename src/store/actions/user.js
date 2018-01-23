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

export function updateUserInfo() {
  return dispatch => {
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