export const selectUser = (user)=> {
	console.log("selected user: ", user.first);
	return {
		type: "BOOK_SELECTED",
		payload: user
	}
}