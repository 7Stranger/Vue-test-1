<template>
    <div>
        <h1>Страница пользователя с ID {{ $route.params.id }}</h1>
        
                
    </div>
</template>

<script>
import UserItemInList from '@/components/UserItemInList.vue';
export default {
    data() {
        return {
            newUsers: [],
        }
    },
    components: {
        UserItemInList
    },
    methods: {
        
    },
    mounted(){
        if(localStorage.getItem('users')){
            try {
                this.newUsers = JSON.parse(localStorage.getItem('users'));
            } catch(e) {
                localStorage.removeItem('users');
            }
        }
    },
}
</script>

<style scoped>

</style>