import React, { Component } from 'react';
import './App.css';

class Quiz extends Component {
  constructor(props){
    super(props);
    this.state = {
      answer: '',
      buttonClicked: false
    };
  }

  onChangeInputText(e) {
    console.log(e.target.value);
    if(!this.state.buttonClicked) {
      this.setState({
        answer: e.target.value
      });
    }
  }

  onClickAnswerButton(e) {
    this.setState({
      buttonClicked: !this.state.buttonClicked
    })
  }

  render() {
    return (
      <div className='App'>
        <p>
          For {this.props.match.params.name}
          <br />
          อยากเป็นคน Cool Cool ถ้าได้
          <br />
          {!this.state.buttonClicked && (<input type='text' value={this.state.answer} onChange={(e) => this.onChangeInputText(e)} />)}
          {this.state.buttonClicked && (<p>{this.state.answer}</p>)}
          <br />
          พร้อม ระเบิดความ Cool
          <br />
          23.08.17
          <br />
          #coolbrobkk
          <br />
          {!this.state.buttonClicked && (<button onClick={(e) => this.onClickAnswerButton(e)}>ส่งคำตอบ!!</button>) }
          {this.state.buttonClicked && (<p>ส่งคำตอบแล้ว!!</p>)}
          {this.state.buttonClicked && (<p>Share on Facebook</p>)}
        </p>
      </div>
    );
  }
}

export default Quiz;
