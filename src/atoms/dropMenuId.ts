import { atom } from "recoil";

export const dropMenuId = atom<string>({
    key: "dropMenuId",
    default: "radio",
});