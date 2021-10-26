<template>
    <form @submit.prevent>
        <h4>Создание нового пользователя</h4>
        <my-input 
            v-focus
            v-model="user.name"
            type="text" 
            placeholder="Имя"></my-input>
        <my-input 
            v-model="user.age" 
            type="text" 
            placeholder="Возраст"></my-input>
        <my-button
            class="btn" 
            @click="createUser"
            style="align-self: flex-end; margin-top: 15px"
            >
            Создать
        </my-button>
    </form>
</template>

<script>
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-avataaars-sprites';


import axios from 'axios';

import MyButton from '@/components/UI/MyButton';
export default {
    name: 'user-form',
  components: { MyButton },
    data(){
        return {
            user: {
                id: '',
                photo: '',
                name: '',
                age: '',
                status: '',
            },
        }
    },
    methods: {
        async createUser() {
            this.user.id = Date.now();    
            var vm = this;
            await axios.get('https://yesno.wtf/api')
                .then(function (res){
                    if(res.data.answer === 'yes'){
                        vm.user.status = 'Активен';
                    } else {
                        vm.user.status = '---';
                    }
                })
                .catch(function (err){
                    vm.user.status = 'err';
                });

            vm.user.photo = createAvatar(style, {
            seed: vm.user.name + vm.user.age,
            size: 100,
            topChance: 100,
            // ... and other options
            });
            
            this.$emit('create', this.user);
            this.user = {
                name: '',
                age: '',     
            }
        }
    }
}
</script>

<style scoped>
form {
    display: flex;
    flex-direction: column;
}

</style>
