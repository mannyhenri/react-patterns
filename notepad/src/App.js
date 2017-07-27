import React from 'react';
import firebase from 'firebase';
import _ from 'lodash';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

// define here any variables such as styles, propTypes, etc.
const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
};


// define the class and state
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      name: 'Manny',
      currentTitle: '',
      currentDetails: '',
    };
    // you bind your functions in the constructor and therefore
    // do it only once and not on every render of form
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteNote = this.deleteNote.bind(this);
  }

  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCzQ6ZcEVxa4n7xIilndto5Eext8Fd2R5o',
      authDomain: 'notepad-26d99.firebaseapp.com',
      databaseURL: 'https://notepad-26d99.firebaseio.com',
      projectId: 'notepad-26d99',
      storageBucket: '',
      messagingSenderId: '32304140375',
    });

    // refactor this one a bit for best practices ES6
    firebase.database().ref('/notes')
      .on('value', (snapshot) => {
        const fbStore = snapshot.val();
        // converting firebase object to array
        const store = _.map(fbStore, (value, id) => ({
          id,
          title: value.title,
          details: value.details,
        }));
        // updating the state
        this.setState({
          notes: store,
        });
      });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      title: this.state.currentTitle,
      details: this.state.currentDetails,
    };
    firebase.database().ref('/notes').push(data, response => response);
    // feel free to keep the alert or not
    // alert(`Your note ${this.state.currentTitle} has been added!!!`);

    this.setState({
      currentTitle: '',
      currentDetails: '',
    });
  }

  deleteNote(id) {
    firebase.database().ref(`/notes/${id}`)
      .remove();
    // feel free to keep the alert or not
    // alert('Successfully deleted!');
  }

  render() {
    return (
      <div style={styles}>
        <Header name={this.state.name} />
        <Form
          // do the bind in the corresponding syntax video
          currentTitle={this.state.currentTitle}
          currentDetails={this.state.currentDetails}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Grid notes={this.state.notes} deleteNote={this.deleteNote} />
      </div>
    );
  }
}
