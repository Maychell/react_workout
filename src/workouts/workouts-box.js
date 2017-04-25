import React from 'react';
import WorkoutForm from './workouts-form';

export default class WorkoutBox extends React.Component {
	constructor() {
    super();
    this.state = { workouts: [] };
    this._addWorkout = this._addWorkout.bind(this);
  }
 
  render() {
    return (
    	<div id='box'>
	      <WorkoutForm
          onSubmit={this._addWorkout}
          onValidate={this._validateWorkout} />
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
}
