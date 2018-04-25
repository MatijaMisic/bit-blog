import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

class NewPostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            newPosts: [],
            title: "",
            body: ""
        }
    }

    handleInputChange = (event) => {
        event.preventDefault();
        this.setState({
            title: event.target.value
        })
    }

    handleTextAreaChange = (event) => {

        this.setState({
            body: event.target.value
        })
    }

    Save = () => {

        axios.post(`http://localhost:3000/posts`, {
            title: this.state.title,
            body: this.state.body,
        })
            .then(res => {
                console.log(res);
                console.log(res.data);
                this.props.history.push("/")
            })



        // this.state.newPosts.push(savedPost);
        // const saved = this.state.newPosts;

        // const JsonSavedPost = JSON.stringify({ saved });
        // localStorage.setItem("newposts", JsonSavedPost);
    }

    render() {
        return (
            <div className="container" >
                <h2 className="second-title">NEW POST</h2>
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input id="input_text" type="text" data-length="10" placeholder="Post Title" onChange={this.handleInputChange} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea id="textarea2" className="materialize-textarea" data-length="120" placeholder="Content" onChange={this.handleTextAreaChange}></textarea>
                            </div>
                        </div>
                        <button className="buttonPost" type="submit" onClick={this.Save} >Save</button>
                        <Link to="/"> <button className="buttonPost" type="submit">Cancel</button></Link>
                    </form>
                </div>
            </div >
        )
    }
}

export default withRouter(NewPostPage) ;