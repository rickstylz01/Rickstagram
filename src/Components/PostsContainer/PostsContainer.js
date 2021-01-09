import React from "react";
import PostCard from '../PostCard/PostCard';
import Row from 'react-bootstrap/Row';
import {Container} from "react-bootstrap";

class PostsContainer extends React.Component {

  render() {
    return (
      <Container>
        <Row className="mt-3 justify-content-center">
          {this.props.data.map(post => (
            <PostCard
              imageUrl={post.image_url}
              userName={post.username}
              caption={post.caption}
              timeStamp={post.created_at}
              key={post.id}
            />
          ))}
        </Row>
      </Container>
    );
  }
}

export default PostsContainer;