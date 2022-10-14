const URL_BASE_API = 'http://localhost:8080'

function getPosts() {
    const URL = `${URL_BASE_API}/posts`

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'applications/json'
        }
    }

    return fetch(URL, options)
}

function login(credentials) {
    const URL = `${URL_BASE_API}/auth/login`
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }
}

export { getPosts, login}