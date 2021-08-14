import React from 'react';
import { connect } from 'react-redux'
import { fetchPostsAndUsers } from '../actions'
import UserHeader from './UserHeader'

class PostList extends React.Component {
  // action creator in lifecycle method
  // action creator is going to make an api request
  // action creator will return an object that contains the fetched data in payload
  componentDidMount() {
    this.props.fetchPostsAndUsers();
  }

  renderList() {
    return this.props.posts.map(post => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"/>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserHeader userId={post.userId} />
          </div>
        </div>
      )
    })
  }

  render() {
    return (
      <div>{this.renderList()}</div>
    )
  }
}
const mapStateToProps = (state) => {
  return { posts: state.posts };
}
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList);