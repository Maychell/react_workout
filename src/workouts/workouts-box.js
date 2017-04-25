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
          onSubmit={this._addWorkout} />
	     </div>
    );
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
