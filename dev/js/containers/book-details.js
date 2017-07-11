import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component{
  render(){
    if(!this.props.book) {
      return (<h4>Select a user....</h4>);
    }
    return (
    <div>
      <h3>{this.props.book.title}</h3>
    </div>
    );
  }
}
const mapStateToProps = state => ({
  book: state.activeBook
});
export default connect(mapStateToProps)(BookDetails);
