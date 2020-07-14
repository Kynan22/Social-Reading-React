import React from 'react';
 
import { withAuthorization } from '../Session';

import Reading from './reading';
 
const HomePage = () => (
  <div>
    <Reading/>
  </div>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);