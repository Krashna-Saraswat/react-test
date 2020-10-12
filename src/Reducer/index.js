const initialState = {
	apiData: null,
};
const counter = (state = initialState, action) => {
	switch (action.type) {
		case "DATA_FETCH":
			return { ...state,
				response: action.payload
			};
		default:
			return state;
	}
};

export default counter;