import { atom } from "jotai";

const userInfos = atom({
    id: '',
});

const userLoggedIn = atom(false);

export { userInfos, userLoggedIn };