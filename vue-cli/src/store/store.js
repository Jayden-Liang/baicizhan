import Vue from 'vue'
import Vuex  from 'vuex'

Vue.use(Vuex)


export const store =new Vuex.Store({
    state:{
        showProfile: false,
        current: true     
    },
    mutations: {
        showp: state =>{
            state.showProfile =true;
        },
        hidep: state => {
            state.showProfile =false
        },
        currentp: state =>{
            state.current =true;
        },
        notcurrentp: state => {
            state.current =false
        }
    }
})