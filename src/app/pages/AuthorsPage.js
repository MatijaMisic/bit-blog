import React from 'react';
import { AuthorItem } from '../partials/AuthorItem';
import authorsServices from '../../services/authorServices'
import { Author } from '../../entities/Author'

class AuthorsPage extends React.Component {
    constructor(props){
        super()
        this.state = {
            authors: []
        }
    }

    componentDidMount(){
        authorsServices.getAuthors().then((response) => {
            const responseData = response.map((author) => {
                return new Author (author.id, author.name, author.username, author.email, author.phone, author.address, author.company)
                
            })
            this.setState({
                authors:responseData
            })
        })
    }
    addAuthors = () => {
        return this.state.authors.map((author, index) => {
            return <AuthorItem key={index} name={author.name} id={author.id}/>
        })
    }


    render() {
        return (
                <div className="row">
                     <h1 className="title">AUTHORS ({this.state.authors.length})</h1>
                    {this.addAuthors()}
                </div>
        )
    }
}

export { AuthorsPage };