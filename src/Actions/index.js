export const onInitialLoad = (launchYear, isLaunchSuccess, isLandSuccess) => {
	const url = getURL(launchYear, isLaunchSuccess, isLandSuccess);
	return (dispatch) => {
		const path = url;
		fetch(path).then(res => res.json()).then((response) => {
			dispatch({
				type: "DATA_FETCH",
				payload: response
			})
		}).catch((errror) => {
			console.log('error', errror)
		})
	}
}

const getURL = (launchYear, isLaunchSuccess, isLandSucces) => {
	let url = "https://api.spaceXdata.com/v3/launches?limit=100";
	if (isLaunchSuccess) {
		url = `${url}&launch_success=${isLaunchSuccess}`
	}
	if (isLandSucces) {
		url = `${url}&land_success=${isLandSucces}`
	}
	if (launchYear) {
		url = `${url}&launch_year=${launchYear}`
	}
	return url;
}