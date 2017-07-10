import React, {Component} from 'react';
import BookList from '../containers/book-list';
// import BookDetails from '../containers/book-details';
require('../../scss/style.scss');

class App extends Component {
	render() {
    return (
    <div>
          <h2>Book List: </h2>
          <BookList/>
          <hr/>
          {/*<h2>User Details: </h2>
          <BookDetails/>*/}
        </div>
    );
	}
}
export default App;