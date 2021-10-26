<template>
    <div v-if="users.length > 0">
        <h3>Список пользователей</h3>
        <div class="header">
          <div class="header_pos">ID</div>
          <div class="header_pos">Аватар</div>
          <div class="header_pos">Имя</div>
          <div class="header_pos">Возраст</div>
          <div class="header_pos">Статус</div>
          <div class="header_pos">Действия</div>
        </div>
        <transition-group name="user-list">
            <user-item-in-list  
            v-for="user in users"
            :user="user"
            :key="user.id"
            @remove="$emit('remove', user)" />
        </transition-group>
    </div>
    <h2 v-else style="color: red">Список пользователей пуст!</h2>
    
</template> 

<script>
import UserItemInList from '@/components/UserItemInList.vue';
export default {
  name: 'users-list',
  components: { 
    UserItemInList 
    },
  props: {
      users: {
          type: Array,
          required: true
      }
  },
}
</script>

<style scoped>
.header{
  margin-top: 15px;
  padding: 15px;
  border: 2px solid rebeccapurple;
  align-items: center;
  justify-content: space-between;
  display: flex;
  height: 50px;
  background-color: rgb(209, 173, 245);
}

.header_pos{
  width: 200px;
  text-align: center;
}

.user-list-item {
  display: inline-block;
  margin-right: 10px;
}
.user-list-enter-active,
.user-list-leave-active {
  transition: all 0.4s ease;
}
.user-list-enter-from,
.user-list-leave-to {
  opacity: 0;
  transform: translateX(230px);
}
.user-list-move {
  transition: transform 0.8s ease;
}
</style>
