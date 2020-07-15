import React from 'react';
 
import { withAuthorization } from '../Session';

import Reading from './reading';
import FirestoreDocument from '../Firebase/document';
 
const HomePage = () => (
  <div>
    
    <FirestoreDocument/>
  </div>
);
 
const condition = authUser => !!authUser;
 
export default withAuthorization(condition)(HomePage);