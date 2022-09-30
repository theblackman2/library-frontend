import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
import App from "./../Layouts/App";
import Loader from "../components/Loader";
import Comment from "../components/Comment";
const axios = require("axios").default;

function Book() {
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [loadingComments, setLoadingComments] = useState(true);
  const [comment, setComment] = useState("");
  const [emptyComment, setEmptyComment] = useState(false);
  const [commentError, setCommentError] = useState(false);
  const [commentPosted, setCommentPosted] = useState(false);

  // Unmunt messages after 3secs
  useEffect(() => {
    const time = setTimeout(() => {
      if (emptyComment) setEmptyComment(false);
      if (commentError) setCommentError(false);
      if (commentPosted) setCommentPosted(false);
    }, 5000);

    return () => {
      clearTimeout(time);
    };
  }, [commentError, emptyComment, commentPosted]);

  // Get book comments
  const getComments = useCallback(() => {
    setLoadingComments(true);
    const api = process.env.REACT_APP_API;
    const comments = axios.get(`${api}/comments/${id}`);
    comments
      .then((data) => setComments(data.data.reverse()))
      .then(() => setLoadingComments(false))
      .catch((err) => console.log(err));
  }, [id]);

  useEffect(() => {
    getComments();
  }, [getComments]);

  useEffect(() => {
    const api = process.env.REACT_APP_API;
    const book = axios.get(`${api}/books/${id}`);

    book
      .then((data) => setBook(data.data[0]))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, [id]);

  // Logic to post a comment
  const postComment = (e) => {
    if (!comment) setEmptyComment(true);
    if (comment) {
      setEmptyComment(false);
      const api = process.env.REACT_APP_API;
      axios({
        method: "post",
        url: `${api}/comments/${id}`,
        data: {
          content: comment,
        },
      })
        .then((res) => {
          if (res.data.type === "Success") {
            setCommentPosted(true);
            setCommentError(false);
            getComments();
            setComment("");
          }
          if (res.data.type === "Error") setCommentError(true);
        })
        .catch((err) => console.log(err));
    }
    e.preventDefault();
  };

  const page =
    loading || loadingComments ? (
      <Loader />
    ) : (
      <Container>
        <div className="banner">
          <img src="https://via.placeholder.com/500" alt="Banner" />
        </div>
        <div className="book-infos">
          <h2 className="book-title">{book.title}</h2>
          <div className="others-infos">
            <Link to={`/authors/${book.author_id}`}>
              <div className="infos">
                <img
                  alt="Author avatar"
                  src="https://img.icons8.com/fluency/48/000000/writer-male.png"
                />{" "}
                <span>{`${book.author_firstaname} ${book.author_lastname}`}</span>
              </div>
            </Link>
            <Link to={`/publishers/${book.publisher_id}`}>
              <div className="infos">
                <img
                  alt="Publisher avatar"
                  src="https://img.icons8.com/external-photo3ideastudio-lineal-color-photo3ideastudio/64/000000/external-author-online-business-photo3ideastudio-lineal-color-photo3ideastudio.png"
                />
                <span>{book.publisher_name}</span>
              </div>
            </Link>
          </div>
        </div>
        <div className="comments-section">
          <div className="comments-form">
            <h4 className="section-title">Add new comment</h4>
            <form onSubmit={postComment} className="form">
              {emptyComment && (
                <div className="alert alert-danger">
                  You can't post an empty comment
                </div>
              )}
              {commentError && (
                <div className="alert alert-danger">
                  Une erreur s'est produite, veillez réessayer
                </div>
              )}
              {commentPosted && (
                <div className="alert alert-success">Comment posted!</div>
              )}
              <textarea
                name="comment"
                id="comment"
                cols="30"
                rows="5"
                className="form-control"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
              ></textarea>
              <button className="btn btn-secondary">Post</button>
            </form>
          </div>
          <div className="comments">
            {comments.length <= 0 && (
              <div className="alert">
                No comments for this book, be the first to post a comment
              </div>
            )}
            {comments.map((comment, index) => {
              return <Comment key={index} content={comment.content} />;
            })}
          </div>
        </div>
      </Container>
    );

  return <App page={page} />;
}

export default Book;

const Container = styled.div`
  .banner {
    width: 100%;
    height: 400px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .book-infos {
    display: flex;
    flex-direction: column;
    gap: 20px;

    .others-infos {
      padding: 0 3rem;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      gap: 2rem;

      .infos {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  .comments-section {
    display: flex;
    margin-top: 25px;
    position: relative;
    gap: 30px;

    .comments {
      display: flex;
      flex-direction: column;
      gap: 20px;
      width: calc(100% - 350px);
    }

    .comments-form {
      position: sticky;
      top: 100px;
      width: 350px;
      height: fit-content;

      .form {
        textarea {
          resize: none;
        }
        button {
          float: right;
          height: fit-content;
        }
      }
    }
  }
`;
