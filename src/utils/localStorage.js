export const fetchToken = ()=>{
    const token =  localStorage.getItem("access_token");
    return token ? token : null;
}

export const setTokenLocal = (token)=>{
    localStorage.setItem("access_token",token);
}

export const setUserLocal = (user)=>{
    localStorage.setItem("user",user);
}

export const getUser = ()=>{
    return localStorage.getItem("user")
}