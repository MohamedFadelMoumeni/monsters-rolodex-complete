
export const setSearchField = (text) => ({
    type: "SET_CURRENT_SEARCH",
    payload: text

});


export const fetchData = () => (dispatch) => {
    dispatch({ type: 'REQUEST_MONSTERS_PENDING' });
    fetch("http://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then(data => dispatch({ type: "REQUEST_MONSTERS_SUCCESS", payload: data }))
        .catch(err => dispatch({ type: "REQUEST_MONSTERS_FAILED", payload: err }))
}