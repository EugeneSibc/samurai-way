import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {
        'API-KEY': '80165270-2247-469b-804e-2f4f4cafc85a'
    }
})

export const usersAPI = {
    getUsers (currentPage:number, pageSize:number) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
    },
    followUser(id:number) {
        return instance.post(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },
    unfollowUser(id: number) {
        return instance.delete(`follow/${id}`)
            .then(response => {
                return response.data
            })
    },

}
