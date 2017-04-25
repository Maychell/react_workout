import React from 'react';
import WorkoutForm from './workouts-form';
import WorkoutList from './workouts-list';

export default class WorkoutBox extends React.Component {
	constructor() {
    super();
    this.state = { workouts: [] };
    this._addWorkout = this._addWorkout.bind(this);
    this._deleteWorkout = this._deleteWorkout.bind(this);
  }
 
  render() {
    return (
    	<div id='box'>
	      <WorkoutForm
          onSubmit={this._addWorkout}
          onValidate={this._validateWorkout} />
	      <WorkoutList
	      	items={this.state.workouts}
	      	onDeleteItem={this._deleteWorkout} />
	     </div>
    );
  }

  _validateWorkout(workout) {
    if (workout.time === '') {
      return false;
    }
    if (workout.type === '') {
      return false;
    }
    if (workout.date === '') {
      return false;
    }
    return true;
  }

  _addWorkout(workout) {
  	const workouts = [
  		...this.state.workouts,
  		{
  			...workout,
  			id: (new Date()).getTime()
  		},
  	];

  	this.setState({ workouts });
  }

  _deleteWorkout(id) {
  	const workouts = this.state.workouts.filter( workout => workout.id !== id );
    this.setState({ workouts });
  }
}
