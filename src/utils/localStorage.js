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

export const getCurrentWorkSpace = ()=>{
    const id =  localStorage.getItem("workspace");
    if(!id){
        return null;
    }else{
        return id;
    }
}

export const setCurrentWorkspace = (workspace)=>{
    localStorage.setItem("workspace",workspace);
}