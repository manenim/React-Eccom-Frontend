import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userSlice"
    


export const login = async (dispatch, navigate, user) => {
    dispatch(loginStart());
    console.log("started")
    try {
        const res = await publicRequest.post("auth/login", user)
        console.log(res.data)
        dispatch(loginSuccess(res.data))
        navigate(-1)

    } catch (error) {
        dispatch(loginFailure())
        console.log("failed")
    }
}

export const register = async (dispatch, navigate, user ) => {
    dispatch(loginStart());
    console.log("started")
    console.log(user)
    try {
        const res = await publicRequest.post("auth/register", user)
        // console.log(res.data)
        dispatch(loginSuccess(res.data))
        navigate(-1)
    } catch (error) {
        dispatch(loginFailure())
        console.log("failed")
    }
}