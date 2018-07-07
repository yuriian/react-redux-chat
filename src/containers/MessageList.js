import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class MessageList extends Component {
  render() {
    return (
      <div className="chat">
        <div className="chat-header clearfix">
          <img
            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/chat_avatar_01_green.jpg"
            alt="avatar"
          />

          <div className="chat-about">
            <div className="chat-with">Chat with Vincent Porter</div>
            <div className="chat-num-messages">already 1 902 messages</div>
          </div>
          <FontAwesomeIcon icon="star" />
        </div>

        <div className="chat-history">
          <ul>
            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time">10:10 AM, Today</span> &nbsp; &nbsp;
                <span className="message-data-name">Olia</span>
                <FontAwesomeIcon icon="circle" className="me" />
              </div>
              <div className="message other-message float-right">
                Hi Vincent, how are you? How is the project coming along?
              </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name">
                  <FontAwesomeIcon icon="circle" className="online" /> Vincent
                </span>
                <span className="message-data-time">10:12 AM, Today</span>
              </div>
              <div className="message my-message">
                Are we meeting today? Project has been already finished and I have results to show
                you.
              </div>
            </li>

            <li className="clearfix">
              <div className="message-data align-right">
                <span className="message-data-time">10:14 AM, Today</span> &nbsp; &nbsp;
                <span className="message-data-name">Olia</span>
                <FontAwesomeIcon icon="circle" className="me" />
              </div>
              <div className="message other-message float-right">
                Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so?
                Have you faced any problems at the last phase of the project?
              </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name">
                  <FontAwesomeIcon icon="circle" className="online" /> Vincent
                </span>
                <span className="message-data-time">10:20 AM, Today</span>
              </div>
              <div className="message my-message">
                Actually everything was fine. I am very excited to show this to our team.
              </div>
            </li>

            <li>
              <div className="message-data">
                <span className="message-data-name">
                  <FontAwesomeIcon icon="circle" className="online" /> Vincent
                </span>
                <span className="message-data-time">10:31 AM, Today</span>
              </div>
              <FontAwesomeIcon icon="circle" className="online" />

              <FontAwesomeIcon icon="circle" className="online" style={{ 'color': '#AED2A6' }} />
              <FontAwesomeIcon icon="circle" className="online" style={{ 'color': '#DAE9DA' }} />
            </li>
          </ul>
        </div>

        <div className="chat-message clearfix">
          <textarea
            name="message-to-send"
            id="message-to-send"
            placeholder="Type your message"
            rows="3"
          />
          <i className="fa fa-file-o" /> &nbsp;&nbsp;&nbsp;
          <i className="fa fa-file-image-o" />
          <button>Send</button>
        </div>
      </div>
    );
  }
}

export default MessageList;
