import React from 'react';
// import UserStore from './stores/userStore';
// import './App.css';

class SubmitButton extends React.Component {

  render() {
    return(
    <div className="submitbutton">
    <button className= 'btn'
            disabled= {this.props.disabled}
            onClick= { () => this.props.onClick()}>

                {this.props.text}
        
    </button>
    </div>
  );
}

}
export default SubmitButton;