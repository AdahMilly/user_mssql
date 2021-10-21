import jwtDecode from "jwt-decode"



const initialState = {
    token:localStorage.getItem("token"),
    firstName: null,
    lastName: null,
    email: null,
    _id:null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case "registerUser":
          const user = jwtDecode(action.token); 
          return {
            ...initialState,
            token: action.token,
            name: user.name,
            email: user.email,
            _id: user._id,
          };
        default: return state
    }
}

export default authReducer