const initialState = {
    project: {},
}

const projectReducer = (state = initialState, action) => {
    switch (action.type) {
        case "createProject":
            return {
                ...state,
                project: action.project
            };
        case "loginUser":
            try {
                return {
                    ...state,
                    project: action.project
                };

            } catch (error) {
                console.log(error);
            } break

        default: return state
    }
}

export default projectReducer