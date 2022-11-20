import { createStore } from 'vuex'
import data from './modules/data.js'

const storeOptions = {
    strict: true,
    state: {
        
    },
    mutations: {
        
    },
    getters:{
        
    },
    modules:{
        data
    }
}
const store = createStore(storeOptions)
export default store