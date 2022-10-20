import analyze from './mock/analyze'
import authorize from './mock/authorize'
import user from './mock/user'

const proxy = Object.assign({}, analyze, authorize, user)

export default proxy;