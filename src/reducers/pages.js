import {typesPages} from '../actions/types-for-actions';

const updatePages = (state, action) => {

    if (state === undefined) {
        return {
            pageLabel: 'home-page',
        };
    }

    switch (action.type) {

        case typesPages.set_current_page:
        return {
            pageLabel: action.payload,
        };
        default:
            return state.pages;
    }
};

export default updatePages;