<template>
    <div class="user">
          <div class="header_pos">{{ user.id }}</div>
          <div class="header_pos"><span v-html="user.photo"></span></div>

          <!--<div class="header_pos">{{ user.photo }}</div>-->
          <div class="header_pos">{{ user.name }}</div>
          <div class="header_pos">{{ user.age }}</div>
          <div class="header_pos">{{ user.status }}</div>
          <div class="header_pos">
              <div class="user__btns">
                 <my-button
                    @click="$router.push('/user/' + user.id), $emit('edit', user)"
                    >Редактировать
                </my-button>
                <my-button
                    style="margin-top: 15px"
                    @click="$emit('remove', user)"
                    >Удалить
                </my-button> 
              </div>
                
            
            </div>  
    </div>
</template>

<script>
import MyButton from './UI/MyButton.vue'
export default {
    name: 'user-item-in-list',
  components: { MyButton },
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.user {
    display: flex;
    padding: 15px;
    border: 2px solid rebeccapurple;
    margin-top: 15px;
    align-items: center;
    justify-content: space-between;
}
.header_pos{
  width: 200px;
  text-align: center;
}
.user__btns{
    display: inline-grid;
}

.user__btns > div{
    margin: 0 auto;
}
</style>
