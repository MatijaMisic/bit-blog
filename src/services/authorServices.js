class authorServices {

    getAuthors = () => {
        return fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(json => json)
    }

    getSingleAuthor = (id) => {
        return fetch('https://jsonplaceholder.typicode.com/users/' + id)
            .then(response => response.json())
            .then(json => json)
    }
    
    getSingleAuthorPosts = (id) => {
        return fetch('https://jsonplaceholder.typicode.com/posts?userId=' + id)
            .then(response => response.json())
            .then(json => json)
    }
}

export default authorServices = new authorServices ();