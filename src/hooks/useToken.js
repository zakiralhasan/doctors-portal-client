import { useState, useEffect } from "react"

const useToken = (email) => {
    const [token, setToken] = useState('')
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:5000/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(token)
                    }
                })
        }
    }, [email, token])
    return [token]
}
export default useToken;