import {typesUser} from '../actions/types-for-actions';

const updateUser = (state, action) => {

    const userGuest= { id: 0, login: 'guest',  password: '',  name: 'Guest', };

    if (state === undefined) {
        return {
            user: userGuest,
            loading: true,
            error: null
        };
    }

    switch (action.type) {
        case typesUser.fetch_user_req:
        return {
            user: userGuest,
            loading: true,
            error: null
        };

        case typesUser.fetch_user_suc:
        return {            
            user: action.payload,
            loading: false,
            error: null
        };

        case typesUser.fetch_user_fail:
        return {
            user: userGuest,
            loading: false,
            error: action.payload
        };
        
        case typesUser.set_default_user:
        return {
            user: userGuest,
            loading: true,
            error: null
        }

        default:
        return state.userState;
    }
};

export default updateUser;