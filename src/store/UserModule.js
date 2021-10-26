import axios from 'axios'
export const userModule = {
    state: () => ({
        users: [],
        isUsersLoading: false,
        selectedSort: '',
        sortOptions: [
            {value: 'name', name: 'По имени'},
            {value: 'age', name: 'По возрасту'},
        ]
    }),
    getters: {
        sortedUsers(state){
            return [...state.users].sort((user1, user2) => user1[state.selectedSort]?.localeCompare(user2[state.selectedSort]))
        }
    },
    mutations: {
        setUsers(state, users) {
            state.users = users;
            for (var i = 0; i < state.users.length; i++){
                state.users[i].id = Math.random() * 5;
                state.users[i].name = i * 100;
                state.users[i].age = Math.floor(Math.random()*90);
            }
            
        },
        setLoading(state, bool) {
            state.isUsersLoading = bool;
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort;
        },
    },
    actions: {
        async fetchUsers({state, commit}){
            try {
                commit('setLoading', true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
                commit('setUsers', response.data);
                            
            } catch (e){
                alert(e);
            } finally {
                commit('setLoading', false);
            }
        }
    },
    namespaced: true,
}