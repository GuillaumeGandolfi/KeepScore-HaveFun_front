import axios from "axios";

export const axiosPublic = axios.create({
    baseURL: "postgres://admin_kshf:kshf@localhost:5432/kshf",
    headers: {
        "Content-Type": "application/json"
    },
});