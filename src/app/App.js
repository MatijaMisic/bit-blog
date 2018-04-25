import React, { Component } from 'react';
import './App.css';
import { HomePage } from './pages/HomePage';
import { Header } from './partials/Header';
import { Footer } from './partials/Footer';
import { AuthorsPage } from './pages/AuthorsPage';
import { AboutPage } from './pages/AboutPage';
import { PostPage } from './pages/PostPage';
import { SingleAuthorPage } from './pages/SingleAuthorPage';
import NewPostPage from './pages/NewPostPage'
import { Route, Switch } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/authors" component={AuthorsPage} />
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/posts/:id/:user" component={PostPage} />
          <Route exact path="/authors/:id/:user" component={SingleAuthorPage} />
          <Route exact path="/posts/new" component={NewPostPage} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
