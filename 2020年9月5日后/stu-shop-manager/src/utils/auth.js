export function setToken(token){
    localStorage.setItem("loginToken",token)
}

export function getToken(key) {
    return localStorage.getItem(key)
}

export function isLogin(){
    if(getToken("loginToken")){
        return true;
    }
    return false;
}

export let logout = function () {
    localStorage.removeItem("loginToken");
}