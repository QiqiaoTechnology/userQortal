import * as TYPES from '../mutation.types'

const state = {
    token: sessionStorage.getItem('token') || ''
}

const actions = {
    
}

const mutations = {
    [TYPES.LOGIN]: (state, loginData) => {
        state.token = loginData.token
        sessionStorage.setItem('token', loginData.token)
    }
}

const getters = {

}

export default {
    state,
    actions,
    mutations,
    getters
}


