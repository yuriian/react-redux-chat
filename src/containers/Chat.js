import React, { Component } from 'react';
import { Provider } from 'react-redux';

import UserList from 'containers/UserList';
import MessageList from 'containers/MessageList';
import chatStore from 'store';

export default class Chat extends Component {
  render() {
    return (
      <Provider store={chatStore}>
        <div className="container clearfix">
          <UserList />
          <MessageList />
        </div>
      </Provider>
    );
  }
}
