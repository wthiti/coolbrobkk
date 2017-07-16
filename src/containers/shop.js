import React, {Component} from 'react';
import countdown from 'countdown';

export default class ContentDisplay extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countDownDisplay: ""
    };
  }

  componentDidMount() {
    countdown(
      new Date(2017,7,23,13),
      (timespan) => {
        this.setState({
          countDownDisplay: timespan.toString()
        })
      },
      countdown.DAYS|countdown.HOURS|countdown.MINUTES|countdown.SECONDS
    );
  }

  render() {
    return (
      <div className='jumbotron'>
        <h2 className='jumbotron-header-text text-center'>{`${this.state.countDownDisplay}`}</h2>
        <h2 className='jumbotron-header-text text-center'>Until The Launch Date</h2>
      </div>
    )
  }
}
