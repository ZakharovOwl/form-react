import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const Answers = ({ answers, instance, getApiToken, setAnswers, userImage }) => {
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
            <li key={el.id}>
              {el.title}, {el.message}
            </li>
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
      <h2>Answers</h2>
      <button onClick={getAnswers}>list</button>
      <ul>{answers}</ul>
      <div className={classes.root}>
      <Avatar src={userImage} alt="user" />
    </div>
    </div>
  );
};

export default Answers;
