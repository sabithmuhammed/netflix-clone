import { API_KEY } from "./constants/constants"

export const trending = `/trending/all/day?language=en-US&api_key=${API_KEY}`
const url ="discover/movie?include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres="
export const sciFi = `${url}878&api_key=${API_KEY}`
export const thriller = `${url}53&api_key=${API_KEY}`
export const animation = `${url}16&api_key=${API_KEY}`
export const comedy = `${url}35&api_key=${API_KEY}`
export const action = `${url}28&api_key=${API_KEY}`