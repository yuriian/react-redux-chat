import React from 'react';
import { render } from 'react-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faCircle, faStar } from '@fortawesome/free-solid-svg-icons';

import Chat from 'containers/Chat';
import 'assets/styles/style.scss';

library.add(faSearch, faCircle, faStar);

render(<Chat />, document.getElementById('root'));
