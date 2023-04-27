import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {loginRequest} from "./auth-slice";

export default function UserAuthenticationFeature() {
    const dispatch = useDispatch();

    const authenticationWithGoogle = () => {
        window.open("http://localhost:8000/auth/google", "_self");
    }

    useEffect(() => {
        dispatch(loginRequest())
    }, [])
    return {
        authenticationWithGoogle
    }
}