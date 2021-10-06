import {useFetch} from "./useFetch";
import {URL} from "../../backend/index";

export const SignUp = () => {
    const {loading, error, data} =useFetch(URL)
    return(dispatch) => {
        // 

        // if (loading) return "Loading..."
        // if (error) return "Something went wrong"
    }

    return <div></div>
}