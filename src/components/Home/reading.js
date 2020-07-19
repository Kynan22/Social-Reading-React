import React from 'react';
import Firebase from '../Firebase/firebase';
import Documents from '../Firebase/document';

class Reading extends React.Component {
    //thumbnail = Documents;
    constructor(props){
        super(props);
        this.state = {
            book3: null
        };
    }
    getReading = (book1) => {
        this.setState({book3: book1})
    }

    render(){
        return(
            <div>
                <h2>Reading</h2>
                <Documents book2={this.getReading}/>
            </div>
        );
    }
}

export default Reading; 