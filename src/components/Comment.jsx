import React from "react";
import styled from "styled-components";

function Comment({ content }) {
  return (
    <Container>
      <div className="comment-avatar">
        <img
          src="https://img.icons8.com/ios/50/000000/william-shakespeare.png"
          alt="Comment avatar"
        />
      </div>
      <div className="alert alert-secondary">{content}</div>
    </Container>
  );
}

export default Comment;

const Container = styled.div`
  width: 100%;
  display: flex;
  gap: 15px;
`;
