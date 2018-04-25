class postServices {

    getPosts = () => {
        return fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => json)
    }
    getSinglePost = (id) => {
        return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
        .then(response => response.json())
        .then(json => json)
    }
}

export default postServices = new postServices ();