import React from 'react';

export default class WorkoutForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      workout: {
        time: '',
        type: '',
        date: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static defaultProps = {
    onValidate: () => true,
    onSubmit: () => {},
  }

  handleChange(event) {
    const field = event.currentTarget;
    const name = field.name;
    const value = field.value;
    
    this.setState({
      workout: {
        ...this.state.workout,
        [name]: value,
      }
    });
  }

  handleSubmit(event) {
    event.preventDefault();

    const { onValidate: isValid, onSubmit: handleSubmit } = this.props;
    const { workout } = this.state;

    if (isValid(workout)) {
      handleSubmit(workout);
      this.setState({
        workout: {
          time: '',
          type: '',
          date: ''
        }
      });
    }
  }

  render() {
    const { time, type, date } = this.state.workout;
    return (
      <form className='workout-form'>
        <label>New Workout</label>
        <input placeholder="Time:" name="time" value={time} onChange={this.handleChange} />
        <input placeholder="Type:" name="type" value={type} onChange={this.handleChange} />
        <input placeholder="Date:" name="date" value={date} onChange={this.handleChange} />
        <button type="button" onClick={this.handleSubmit}>Add Workout</button>
      </form>
    );
  }
}
