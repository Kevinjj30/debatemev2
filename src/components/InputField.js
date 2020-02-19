import React from 'react';
// import UserStore from './stores/userStore';


class InputField extends React.Component {

  render() {
    return(
    <div className="inputfield">

        <input
        className='input'
        type={this.props.type}
        placeholder={this.props.placeholder}
        value={this.props.value}
        onChange={ (e) => this.props.onChange(e.target.value)}/>

    </div>
  );
}

}
export default InputField;