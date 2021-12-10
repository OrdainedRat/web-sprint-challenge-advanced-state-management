import axios from 'axios';


    export const FETCH_START = 'FETCH_START'
    export const FETCH_SUCCESS ='FETCH_SUCCESS'
    export const FETCH_FAIL = 'FETCH_FAIL'
    export const NEW_SMURF = 'NEW_SMURF'
    export const ERROR_VALUE = 'ERROR_VALUE'
        


export const fetchSmurfs = () => {
    return(dispatch) => {
        dispatch({type:FETCH_START})

        axios.get('http://localhost:3333/smurfs')
            .then(res => {
              
                dispatch({type:FETCH_SUCCESS, payload: res.data})
                 
            })
            .catch((err) => {
                dispatch({type:FETCH_FAIL, payload: err})
            })
    }
}

export const addSmurf = (name, position, nickname, description) => {
    const obj = {name, position, nickname, description}
    return{type:NEW_SMURF, payload: obj}
   
   
   //I kept getting long "undefined type" error when I used the post below. Do you need a thunk action to use those?
   
   
    // axios.post('http://localhost:3333/smurfs', {name, position, nickname, description, id: Date.now()} )
    //     .then(res => {
    //        return({type:NEW_SMURF, payload:res.data});
    //     })
    //     .catch(err => {
    //         return({type:ERROR_VALUE});
    //     })
        
}

export const setError = (err) => {
    return({type:ERROR_VALUE, payload: err})
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.