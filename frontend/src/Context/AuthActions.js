export const LoginStart = (userCredentials) =>({
    type:"LOGIN_START"
});

export const LoginSuccess = (user) =>({
    type:"LOGIN_SUCCESS",
    payload: user
})

export const LoginFailure = (error) =>({
    type:"LOGIN_FAILURE",
    payload: error
})

export const SingupStart = (user)=>({
    type: "SIGNUP_START"
})

export const SignupSuccess = (user) =>({
    type:"SIGNUP_SUCCESS",
    payload: user
})

export const SingnupFailure = (error) =>({
    type:"SIGNUP_FAILURE",
    payload: error
})