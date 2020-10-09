import axios from "axios"
const api = `http://www.localhost:5000/api`

export const loginUser = (user) => {
  return axios.post(`${api}/login`, user)
		.then((res) => {
			if (res.status === 200) {
        return { success: true }
			} else {
				return { success: false }
			}
		})
		.catch((error) => {
			console.log('Login error', error)
		})
}

export const getContacts = (zipCode) => {
  return axios
    .post(`${api}/user/get_contacts`, { zipCode })
    .then(({ data }) => {
      return { success: true, data }
    })
    .catch((error) => {
      console.log("get contants error", error)
    })
}

export const getAgents = (zipCode) => {
  return axios
    .post(`${api}/user/get_agents`, { zipCode })
    .then(({ data }) => {
      return { success: true, data }
    })
    .catch((error) => {
      console.log("get agents error", error)
    })
}

export const getUserProfile = (userId) => {
  return axios
    .post(`${api}/user/get_user_profile`, { userId } )
    .then(({ data }) => {
      return { success: true, data }
    })
    .catch((error) => {
      console.log("get user profile error", error)
    })
}