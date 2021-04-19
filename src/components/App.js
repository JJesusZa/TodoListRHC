import React from 'react';
import TodoApp from './TodoApp';
import useStyles from '../styles/AppStyles';

function App() {
  const classes = useStyles();

  return (
    <div className={classes.App}>
      <header className={classes.header}>
        <h1>
          todo<span>list</span>
        </h1>
        <h2>Todo list con hooks y context</h2>
      </header>
      <TodoApp />

    </div>
  );
}

export default App;
