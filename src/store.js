import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from './services/users';
console.log(usersApi)
export const store= configureStore({
    reducer:{
        [usersApi.reducerPath]: usersApi.reducer
    },
middleware:(gDm)=>gDm().concat(usersApi.middleware)
})