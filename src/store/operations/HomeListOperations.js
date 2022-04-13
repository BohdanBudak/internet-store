import * as homeListActions from "../actions/HomeListActions";

export const loadList = () => (dispatch) => {
    // dispatch(homeListActions.listLoading(true));
    fetch('phones.json')
        .then(resp => resp.json())
        .then(result => {
            dispatch(homeListActions.getList(result));
            dispatch(homeListActions.listLoading(false));
        });
}