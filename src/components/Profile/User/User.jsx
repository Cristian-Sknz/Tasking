import React, { Component } from 'react';
import TextFit from 'react-textfit';
import ContentEditable from 'react-contenteditable';
import ImageStorage from '../../../lib/imageStorage';
import APPStorage from '../../../lib/storage';

import avatar from './avatar-icon.jpg';
import './User.css';


class User extends Component {

  imageInput;
  
  constructor(props) {
    super(props);
    this.state = {
      username: 'username',
      src: avatar,
    };
    
    this.imageInput = React.createRef();
  }

  componentDidMount() {
    ImageStorage.getImage("avatar")
        .then((value) => this.setState({ ...this.state, src: value }));
    APPStorage.get('username')
        .then((value) => this.setState({...this.state, username: value}));
  }

  handleUsername(e) {
    APPStorage.set('username', e.target.value)
        .then((value) => this.setState({ ...this.state, username: e.target.value }));
  }

  handleImageUpload() {
    let input = this.imageInput?.current;
    input.click();
  }

  handlePreviewUpdate(e) {
    ImageStorage.setImage("avatar", e.target.files[0])
        .then((base64) => this.setState({...this.state, src: base64 }));
  }

  render() {
    return (
      <div className="user">
        <div
          className="user-image"
          onClick={this.handleImageUpload.bind(this)}
          style={{ backgroundImage: `url(${this.state.src})` }}
        >
          <input
            accept=".png, .jpg, .gif"
            className="image-upload"
            type="file"
            ref={this.imageInput}
            onChange={this.handlePreviewUpdate.bind(this)}
          />
        </div>
        <div className="user-text">
          <p>Bem vindo,</p>
          <TextFit
            className="username"
            mode="single"
            forceSingleModeWidth={true}
            max={55}>
            <ContentEditable
              html={this.state.username}
              onChange={this.handleUsername.bind(this)}
              tagName="h2"/>
          </TextFit>
        </div>
      </div>
    );
  }
}

export default User;
