<template>
  <div class="users_list">
    <h1>Страница с пользователями</h1>
        <div class="app__btns">
            <my-button
                @click="showDialog"
            >
                Создать пользователя
            </my-button>
            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
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
import UsersList from '@/components/UsersList'
import UserForm from '@/components/UserForm'
import MySelect from '@/components/UI/MySelect'
import MyDialog from '@/components/UI/MyDialog'
import MyButton from '@/components/UI/MyButton'

import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  components: {
    UserForm, UsersList, MySelect, MyDialog, MyButton
  },
  data(){
    return {
      dialogVisible: false,
    }
  },
  methods: {
    createUser(user){
      if (user.name === "" || user.age === ""){
          alert("Введите имя и возраст нового пользователя!");
      } else {
          this.users.push(user);
          this.dialogVisible = false;
      }
    },
    removeUser(user){
        this.users = this.users.filter(p => p.id != user.id);
    },
    showDialog(){
      this.dialogVisible = true;
    },
    ...mapMutations({
        setSelectedSort: 'user/setSelectedSort',
    }),
    ...mapActions({
        fetchUsers: 'user/fetchUsers',
    }),
  },
  mounted(){
      this.fetchUsers();
  },
  computed: {
      ...mapState({
          users: state => state.user.users,
          isUsersLoading: state => state.user.isUsersLoading,
          selectedSort: state => state.user.selectedSort,
          sortOptions: state => state.user.sortOptions,
      }),
      ...mapGetters({
          sortedUsers: 'user/sortedUsers',
      }),
  },
  watch: {

  }
}
</script>

<style>
.app__btns{
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}
</style>
