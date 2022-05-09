import React, { Component } from 'react';

export default class PostList extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="posts-list">
        {posts.map((post) => {
          <div className="post-wrapper" key={post._id}>
            <div className="post-header">
              <div className="post-avatar">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/4333/4333609.png"
                  alt="posts-avatar"
                />
                <div>
                  <span className="post-author">{post.user.name}</span>
                  <span className="post-time">a min ago</span>
                </div>
              </div>
              <div className="post-content">{post.content}</div>
              <div className="post-actions">
                <div className="post-like">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/https://cdn-icons-png.flaticon.com/512/833/833472.png/4333609.png"
                    alt="posts-like"
                  />
                  <span>{post.likes.length}</span>
                </div>

                <div className="post-comments-icon">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/13/13673.png"
                    alt="comments-icon"
                  />
                  <span>{post.comments.length}</span>
                </div>
              </div>
              <div className="post-comment-box">
                <input placeholder="Start typing the comments...." />
              </div>
              <div className="post-comments-list">
                <div className="post-comment-header">
                  <span className="post-comment-author">Bill</span>
                  <span className="post-comment-time">a min ago</span>
                  <span className="post-comment-likes">22</span>
                </div>

                <div className="post-comment-content">Random COmment</div>
              </div>
            </div>
          </div>;
        })}
      </div>
    );
  }
}
