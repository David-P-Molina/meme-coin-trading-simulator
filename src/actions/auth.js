import { AUTHENTICATED, NOT_AUTHENTICATED } from '.'

const setToken = (token) => {
    localStorage.setItem("token", token)
    localStorage.setItem("lastLoginTime", new Date(Date.now()).getTime())
}

const getToken = () => {
    const now = new Date(Date.now()).getTime()
    const thirtyMinutes = 1000 * 60 * 30
    const timeSinceLastLogin = now - localStorage.getItem("lastLoginTime")
    if (timesSinceLastLogin < thirtyMinutes) {
        return localStorage.getItem("token")
    }
}