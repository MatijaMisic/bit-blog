import React from 'react';
import { AuthorInfo } from '../components/AuthorInfo';
import { AuthorAddress } from '../components/AuthorAddress';
import { AuthorCompany } from '../components/AuthorCompany';
import { Link } from 'react-router-dom';
import authorServices from '../../services/authorServices'
import { Author } from '../../entities/Author'
import { Address } from '../../entities/Address'
import { Company } from '../../entities/Company';

class SingleAuthorPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            props: props,
            singleAuthor: {},
            address: {},
            company: {}
        }
    }

    componentDidMount() {
        authorServices.getSingleAuthor(this.props.match.params.user).then((response) => {
            const chosenAuthor = new Author(response.id, response.name, response.username, response.email, response.phone, response.address, response.company)
            const address = new Address(response.address.city, response.address.geo, response.address.street, response.address.suit, response.address.zipcode)
            const company = new Company(response.company.name, response.company.catchPhrase)
            this.setState({
                singleAuthor: chosenAuthor,
                address: address,
                company: company
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <Link to="/authors"><p className="black-text">Back</p></Link>
                    <AuthorInfo
                        name={this.state.singleAuthor.name}
                        username={this.state.singleAuthor.username}
                        email={this.state.singleAuthor.email}
                        phone={this.state.singleAuthor.phone}
                    />
                    <AuthorAddress
                        street={this.state.address.street}
                        city={this.state.address.city}
                        zipcode={this.state.address.zipcode}
                        long={this.state.address}
                    />
                    <AuthorCompany
                        company={this.state.company.name}
                        slogan={this.state.company.slogan}
                    />
                </div>
            </React.Fragment >

        )
    }
}

export { SingleAuthorPage };