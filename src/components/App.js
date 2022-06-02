import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchPosts } from '../action/posts';
import PostList from './PostList';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    const { posts } = this.props;
    // console.log('Props', this.props);
    // return <div>App</div>;

    return (
      <div>
        <nav className="nav">
          <div className="left-div">
            <img
              src="https://ninjasfiles.s3.amazonaws.com/0000000000003454.png"
              alt="logo"
            />
          </div>
          <div className="search-container">
            <img
              className="search-icon"
              src="https://cdn-icons-png.flaticon.com/512/751/751463.png"
              alt="search-icon"
            />
            <input placeholder="search" type="text" />
            <div className="searh-results">
              {/* <ul>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
                    alt="user-dp"
                  />
                  <span>John</span>
                </li>
                <li className="search-results-row">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
                    alt="user-dp"
                  />
                  <span>John</span>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="right-nav">
            <div className="user">
              <img
                src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
                alt="user-dp"
                id="user-dp"
              />
              <span>John</span>
            </div>
            <div className="nav-links">
              <ul>
                <li>Log in</li>
                <li>Log out</li>
                <li>Register</li>
              </ul>
            </div>
          </div>
        </nav>
        <PostList posts={posts} />
        {/* App */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

App.propTypes = {
  posts: PropTypes.array.isRequired,
};
export default connect(mapStateToProps)(App);
