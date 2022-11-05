export default {
    ADD_FILTER: (state, {filter, value=null}) => {
        state.filterList.set(filter, value);
    },
    SET_FILTER_BUTTON_LIST: (state, filterButtonList) => {
        state.filterButtonList = filterButtonList;
    }
}