import React, { Component } from 'react';
import img1 from '../../../image/Icon01.png';
import s from '../PasswordShowHide/Password.module.css';
class PasswordShowHide extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidden: true,
      password: ''
    };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.toggleShow = this.toggleShow.bind(this);
  }
  handlePasswordChange(e) {
    this.props.setPasswordChange(e.target.value);
  }
  toggleShow() {
    this.setState({ hidden: !this.state.hidden });
  }
  componentDidMount() {
    if (this.props.password) {
      this.setState({ password: this.props.password });
    }
  }
  render() {
    return (
      <div className={s.formDiv}>
        <input name = 'password' id='password' className ={s.inputBorder1}
          type={this.state.hidden ? 'password' : 'text'}
          value={this.props.password}
          onChange={this.handlePasswordChange}
        />
        <label htmlFor="password" className={`${s.label} ${this.props.password.length > 0 ? s.focus : ''}`}>{this.props.title}*</label>
        <img className ={s.imgPassword} src={img1} onClick={this.toggleShow} alt=""/>
        {this.props.passwordError && <span style={{ color: 'red' }}>{this.props.passwordError}</span>}
      </div>
    );
  }
}
export default PasswordShowHide;
