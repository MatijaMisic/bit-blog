import React from 'react';
import postServices from '../../services/postServices';
import authorsServices from '../../services/authorServices';
import { Post } from '../../entities/Post';
import { SinglePost } from '../components/SinglePost'
import { SinglePostLinks } from './SinglePostLinks';

class PostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            props: props,
            post: {},

        }
    }



    componentDidMount() {
        postServices.getSinglePost(this.props.match.params.id).then((post) => {
            const singlePost = new Post(post.userId, post.id, post.title, post.body)
            this.setState({
                post: singlePost
            })
        })

        authorsServices.getSingleAuthor(this.props.match.params.user).then((author) => {
            const singleAuthor = author.name
            this.setState({
                singleAuthor: singleAuthor
            })
        })

        authorsServices.getSingleAuthorPosts(this.props.match.params.user).then((posts) => {
            const singleAuthorLinks = posts.slice(7, 10).map((post, i) => {
                console.log(post);

                return <SinglePostLinks key={i} id={post.id} title={post.title} authorId={post.userId} />
            })
            this.setState({
                singleAuthorLinks: singleAuthorLinks
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        postServices.getSinglePost(nextProps.match.params.id).then((post) => {
            const singlePost = new Post(post.userId, post.id, post.title, post.body)
            this.setState({
                post: singlePost
            })
        })
    }



    render() {
        return (
            <div className="container">
                <div className="col s12 m12">
                    <div className="card blue">
                        <SinglePost
                            id={this.state.post.id}
                            authorId={this.state.post.authorId}
                            title={this.state.post.title}
                            content={this.state.post.content}
                            authorName={this.state.singleAuthor}
                        />
                        <hr />
                        <div className="card-action white-text">
                            <h5>3 more posts from same author</h5>
                            <ul>
                                {this.state.singleAuthorLinks}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export { PostPage }