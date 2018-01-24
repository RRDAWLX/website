export default function user(state = {}, action) {
  switch (action.type) {
    case 'request_user_info':   // 开始请求用户信息
      return Object.assign({}, state, {
        fetching: true
      })
    case 'receive_user_info':   // 请求用户信息成功
      return Object.assign({}, state, action.info, {
        fetching: false,
        validated: true,
        updateTime: Date.now()
      })
    case 'invalidated_user_info':   // 请求用户信息失败
      return Object.assign({}, state, {
        fetching: false,
        validated: false
      })
    default:
      return state
  }
}