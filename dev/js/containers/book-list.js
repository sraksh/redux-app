import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {selectUser} from '../actions/index';

class BookList extends Component{
	createBookListItems(){
		return this.props.books.map((book)=>{
			return(
				<li key={book.title} className="list-group-item" onClick= {() => this.props.selectUser(book)} >{book.title}</li>
			);
		});
	}

	render(){
		return (
			<ul className="list-group col-sm-4">
				{this.createBookListItems()}
			</ul>
		);
	}
}

const mapStateToProps = state => ({
	users: state.users
});

const matchDispatchToProps = dispatch => (
	bindActionCreators({selectUser: selectUser}, dispatch)
)

export default connect(mapStateToProps, matchDispatchToProps)(BookList);
