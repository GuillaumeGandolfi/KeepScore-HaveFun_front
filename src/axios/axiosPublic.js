import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "https://projet-09-keep-score-and-have-fun-back.vercel.app/",
    headers: {
        "Content-Type": "application/json"
    },
});