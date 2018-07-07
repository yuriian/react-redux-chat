import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const mapStateToProps = state => {
  return {
    'users': state.usersReducer
  };
};

const mapDispatchToProps = dispatch => {
  return { dispatch };
};

class UserList extends Component {
  render() {
    console.log(this.props);

    return (
      <div className="people-list" id="people-list">
        <div className="search">
          <input type="text" placeholder="search" />
          <FontAwesomeIcon icon="search" />
        </div>

        <ul className="list">
          <li className="clearfix">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01.jpg"
              alt="avatar"
            />
            <div className="about">
              <div className="name">Vincent Porter</div>
              <div className="status">
                <FontAwesomeIcon icon="circle" className="online" />online
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList);
