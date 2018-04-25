import React from 'react';
import { PostItem } from '../partials/PostItem'
import postServices from '../../services/postServices'
import { Post } from '../../entities/Post'
import { Link } from 'react-router-dom'
import axios from 'axios';

class HomePage extends React.Component {
    constructor() {
        super()
        this.state = {
            posts: [],
            newPosts: []
        }
    }


    fetchNewPosts = () => {
        axios.get('http://localhost:3000/posts')
            .then(res => {
                const fetchedPosts = res.data;
                return fetchedPosts;
            })
            .then((response) => {
                const responseData = response.map((post) => {
                    return new Post(post.userId, post.id, post.title, post.body)
                })

                console.log(responseData);

                this.setState({ posts: responseData })

            })
    }

    componentDidMount() {

        // console.log(this.state.newPosts);

        // const newPostJson = localStorage.getItem("newpost");
        // const newPost = JSON.parse(newPostJson);
        // const revPosts = this.state.newPosts.reverse();

        axios.get('http://localhost:3000/posts')
            .then(res => {
                const fetchedPosts = res.data;
                return fetchedPosts.reverse();
            })
            .then((response) => {
                const responseData = response.map((post) => {
                    return new Post(post.userId, post.id, post.title, post.body)
                })

                console.log(responseData);

                this.setState({ posts: responseData })

            })
        // postServices.getPosts().then((response) => {
        //     response = [...revPosts, ...response.reverse()];
        //     console.log(response);

        // })

    }




    addPosts = () => {
        return this.state.posts.slice(0, 10).map((post, index) => {
            return <PostItem key={index} fetchPosts={this.fetchNewPosts} title={post.title} body={post.content} id={post.id} userid={post.authorId} />
        })

    }



    render() {
        return (

            <div className="row">
                <Link to="/posts/new"><button type="submit">Create new post</button></Link>
                <h1 className="title">POSTS</h1>
                {this.addPosts()}
            </div>
        )
    }
}

export { HomePage }