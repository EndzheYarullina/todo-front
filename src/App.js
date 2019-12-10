import React, { Component } from 'react';
import AppHeader from './components/AppHeader';
import SearchPanel from './components/SearchPanel';
import TodoList from './components/TodoList';
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  root: {
    fontFamily: 'Roboto'
  },
  container: {
    justify: 'center',
    alignItems: 'center'
  }
});

class App extends Component {
  state = {
    todoData: [
      { id: 1, label: 'Drink Coffee', important: false },
      { id: 2, label: 'Make Awesome App', important: true },
      { id: 3, label: 'Have a lunh', important: false }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id);
      const newArray = [
        ...todoData.slice(0, index),
        ...todoData.slice(index + 1)
      ];
      return {
        todoData: newArray
      };
    });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={3}
          direction="column"
          className={classes.container}
        >
          <Grid item xs={12}>
            <AppHeader />
            <SearchPanel />
            <TodoList todos={this.state.todoData} onDeleted={this.deleteItem} />
          </Grid>
        </Grid>
      </div>
    );
  }
  const;
}

export default withStyles(styles)(App);
