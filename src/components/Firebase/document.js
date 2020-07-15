import React from 'react';
import firebase from 'firebase';
import { useDocument } from 'react-firebase-hooks/firestore';
const FirestoreDocument = (userid) => {
  const [value, loading, error] = useDocument(
    firebase.firestore().doc('users/s/reading/9780316032834'),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );
  return (
    <div>
      <p>
        
        {error && <strong>Error: {JSON.stringify(error)}</strong>}
        {loading && <span>Document: Loading...</span>}
        {value && <span>Document: {JSON.stringify(value.data())}</span>}
      </p>
    </div>
  );
};

export default FirestoreDocument;