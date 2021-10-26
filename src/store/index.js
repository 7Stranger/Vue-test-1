import { createStore } from "vuex";
import { userModule } from "./UserModule";

export default createStore({
    modules: {
        user: userModule,
    }
})