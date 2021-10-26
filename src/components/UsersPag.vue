<template>
    <div>
        
        <h1>Страница со списком пользователей</h1>
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >
                Создать пользователя
            </my-button>
            <my-select
                v-model="selectedSort"
                :options="sortOptions"/>
        </div>
        
        <my-dialog v-model:show="dialogVisible">
            <user-form @create="createUser"/>
        </my-dialog>
        <users-list :users="sortedUsers"
        @remove="removeUser"
        v-if="!isUsersLoading"/>
        <div v-else>Идет загрузка</div>
    </div>
</template>

<script>
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';

import UserForm from "@/components/UserForm.vue"
import UsersList from "@/components/UsersList.vue"
import MyButton from '@/components/UI/MyButton.vue'
import MyDialog from '@/components/UI/MyDialog.vue'
import axios from 'axios'
import MySelect from '@/components/UI/MySelect.vue'

export default {
    components: {
        UserForm, UsersList,
        MyDialog,
        MyButton,
        MySelect
    },
    data() {
        return {
            users: [],
            dialogVisible: false,
            isUsersLoading: false,
            selectedSort: '',
            sortOptions: [
                {value: 'name', name: 'По имени'},
                {value: 'age', name: 'По возрасту'},
            ]
        }
    },
    methods: {
        saveUsers(){
            const parsed = JSON.stringify(this.users);
            localStorage.setItem('users', parsed);
        },
        createUser(user){
            if (user.name === "" || user.age === ""){
                alert("Введите имя и возраст!");
            } else {
                this.users.push(user);
                this.dialogVisible = false;
            }
            this.saveUsers();
        },
        removeUser(user){
            this.users = this.users.filter(p => p.id != user.id);
            this.saveUsers();
        },
        showDialog(){
            this.dialogVisible = true;
        },
        async fetchUsers(){
            try {
                this.isUsersLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=20');
                this.users = response.data; 
                for (var i=0; i<this.users.length;i++){
                    this.users[i].name = Math.floor(Math.random()*100);
                    this.users[i].age = Math.floor(Math.random()*90);
                    var vm = this.users[i];
                    await axios.get('https://yesno.wtf/api')
                        .then(function (res){
                            if(res.data.answer === 'yes'){
                                vm.status = 'Активен';
                            } else {
                                vm.status = '---';
                            }
                        })
                        .catch(function (err){
                            vm.status = 'err';
                        })
                    vm.photo = createAvatar(style, {
                        seed: Math.floor(Math.random()*100),
                        size: 100,
                        accessoriesChance: Math.floor(Math.random()*100),
                        // ... and other options
                        });
                }
                
                
            } catch (e){
                alert('Ошибка');
            } finally {
                this.isUsersLoading = false;
            }
        }
    },
    mounted(){
        if(localStorage.getItem('users')){
            try {
                this.users = JSON.parse(localStorage.getItem('users'));
            } catch(e) {
                localStorage.removeItem('users');
            }
        }
            
        /*if (localStorage.getItem('users')) {
            this.users = localStorage.users;
            
        }
       /* this.fetchUsers();*/
    },
    
    watch: {
        /*users: function() {
            const parsed = JSON.stringify(this.users);
            localStorage.setItem('users', parsed);
        }*/
    },
    computed: {
        sortedUsers(){
            return [...this.users].sort ((user1, user2) => user1[this.selectedSort]?.localeCompare(user2[this.selectedSort]))
        }
    },
}
</script>

<style>
.app__btns{
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
</style>