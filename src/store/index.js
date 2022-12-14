import {createStore} from 'vuex'

const SET_USER = "SET_USER"

export default createStore({
    state:{

    },
    mutations:{
        [SET_USER](state, user){
            state.user = user
        }
    },
    actions:{
        setUser({commit}, user){
            //call API

            commit(SET_USER, user)
        }
    },
    modules:{

    },
    getters:{
        isUserAdmin: state =>{
            return state.user.role === 'admin'
        }
    }
})