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
            state.forms[value.form] = value.data;
        }
    },
    actions:{
        
    },
});

export default store;

/*
    state: {
        appointment: {
            current_step: 1,
            treatments: [wassen, knippen, kleuren],
            date: [{}],
            barber: 'Jantje',
            user_data: {
                name: 'Piet',
                telnr: '0684848432',
                email: 'piet@jandekapper.nl'
            }
        },
        products: {
            [
                ...
            ]
        },
        ...
    }
*/