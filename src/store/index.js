import { def } from "@vue/shared";
import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const store = createStore({
    state:{
        current_step: 1,
        user_data: {
            personId: '',
            email: '',
            number: '',
            extra: '',
        },
        barber: '',
        treatments: [],
        date: '',
    },
    getters:{

    },
    mutations:{
        increment (state) {
            state.current_step++
        },
        subtracked (state) {
            state.current_step--
        },
        UPDATE_FORM_DATA(state, value) {
            state.treatments = value.data
        },
    },
    actions:{
        
    },
});

export default store;