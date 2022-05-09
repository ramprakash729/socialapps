import React from 'react';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
import { fetchPosts } from '../action/posts';
// import { PostList } from './';
class App extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchPosts());
  }

  render() {
    // const { posts } = this.props;
    console.log('Props', this.props);
    return <div>App</div>;

    // return (
    //   <div>
    //     <PostList posts={posts} />
    //   </div>
    // );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

export default connect(mapStateToProps)(App);