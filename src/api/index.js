import Router from "../core/Router.js";

const baseURL = "http://choco-one.iptime.org:8090/api";

export const loginUser = async (code) => {
    try {
        const response = await fetch(baseURL + `/user/login?code=${code}`);
        const userInfo = await response.json();
        return userInfo;
    } catch (error) {
        alert(error);
    }
}

export const getUserProfile = async (name, token) => {
    try {
        let res = await fetch(baseURL + `/user/profile?name=${name}`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        if(res.status === 401) {
            localStorage.clear("user");
            new Router().render("/");
        }
        else {
            let profile = await res.json();
            return profile;
        }
    } catch (error) {
        console.error(error);
    }
}

export const getStudyList = async (token) => {
    try {
        const res = await fetch(baseURL + `/study/list`, {
            headers: { Authorization: `Bearer ${token}` }
        });
        if(res.status === 401) {
            localStorage.clear("user");
            new Router().render("/");
        }
        else {
            const studyList = await res.json();
            return studyList;
        }
    } catch(error) {
        alert(error);
    }
}