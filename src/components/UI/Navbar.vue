<template>
    <div class="navbar">
        <div class="navbar_content">
            <div class="navbar_logo" @click="$router.push('/')">
                <img src="@/assets/avatar_2021_round_sm.png" alt="LOGO" height="40">
            </div>
            <div class="navbar__btns">
                <my-button @click="$router.push('/userspage')" style="margin-left: 15px">Список пользователей</my-button>
                <my-button @click="$router.push('/about')" style="margin-left: 15px">ABOUT</my-button>
            </div>
        </div>       
    </div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
  components: { MyButton },
    
}
</script>

<style scoped>
.navbar{
    display: flex;
    height: 50px;
    background-color: rgb(209, 173, 245);
    box-shadow: 2px 2px 4px rebeccapurple;
    align-items: center;
}

.navbar_content{
    display: flex;
    align-items: center;
    width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
}

.navbar__btns{
    margin-left: auto;
}

.navbar_logo{
    margin-right: auto;
    cursor: pointer;
}
</style>