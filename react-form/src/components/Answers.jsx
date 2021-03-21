import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const Answers = ({
  answers,
  instance,
  getApiToken,
  setAnswers,
  userImage,
  username,
}) => {
  const classes = useStyles();
  const getAnswers = () => {
    console.log("work");
    instance
      .get(
        //url
        "/posts/1/answers",
        //добавляем хеадер для авторизации
        {
          headers: { Authorization: "Bearer " + getApiToken() },
        }
      )
      //обрабатываем результат
      .then(function (response) {
        console.log(response);
        setAnswers(
          response.data.data.map((el) => (
            <div className="answer" key={el.id}>
              <div className="user">
                <p>{el.user.name}</p>
              </div>
              <div className="message">
                <h4>{el.title}</h4>
                <p>{el.message}</p>
              </div>
            </div>
          ))
        );
      })
      //обрабатываем ошибку
      .catch(function (error) {
        console.log(error.response.data);
      });
  };

  return (
    <div>
      <h2 className="answers-h">Answers</h2>
      <div className="answers-block">
        <div className="answers-block-info">
          <div className={classes.root}>
            <Avatar src={userImage} alt="user" />
          </div>
          <p>{username}</p>
        </div>
        <div className="columm">
        <div className="wrapper-answers">{answers}</div>
        <div className="btn-wrapper">
          <button onClick={getAnswers} type="submit">
            List Answers
          </button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Answers;
