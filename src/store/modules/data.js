import { dataService } from '../../dataService.js'
export default {
    state: {
        data: [],
        searchTerm: ''
    },
    mutations: {
        setData(state, { loadedData }) {
            state.data = loadedData
        },
        setSearchTerm(state, { searchTerm }) {
            state.searchTerm = searchTerm
        }
    },
    actions: {
        async loadData(context) {
            const loadedData = await dataService.getData()
            context.commit({ type: 'setData', loadedData })
        },
        searchData(context, { searchTerm }) {
            context.commit({ type: 'setSearchTerm', searchTerm })
        },
    },
    getters: {
        data(state) {
            return state.data
        },
        searchTerm(state) {
            return state.searchTerm
        }
    }
}