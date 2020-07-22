import React from 'react';
import firebase from 'firebase';
import { useDocument } from 'react-firebase-hooks/firestore';


class Documents extends React.Component {
    getBook = () => {
        this.props.getReading(this.FirestoreDocument);
    };
    FirestoreDocument = () => {
        const [value, loading, error] = useDocument(
            firebase.firestore().doc('users/7Y4WxQ7H0DefZk3grcR8nOn7oV52/reading/9780316032834'),
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

    render(){
        return(
            <div>
                <p>reading3</p>
                <p>{this.FirestoreDocument}</p>
            </div>
        );
    }
};

export default Documents;