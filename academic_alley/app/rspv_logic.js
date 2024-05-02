export default function updateRSPV(user, e, action) {
	let RSPV = {};
	if (localStorage.getItem("RSPV")) {
		RSPV = JSON.parse(localStorage.getItem("RSPV"));
	}
  console.log("OLD")
	console.log(RSPV)
	if (action === "ADD") {
    if (typeof RSPV[user.email] === 'undefined') {
      RSPV[user.email] = []
    }
		RSPV[user.email] = [
			...RSPV[user.email], 
			{
				title: e.title,
				date: `${e.month}-${e.date}-${e.year}`,
				description: e.description
			}
		]
	} else if (action === "REMOVE") {
		console.log("remove")
		console.log(e)
		RSPV[user.email] = RSPV[user.email].filter(
			dict => !(dict.title === e.title && 
							dict.date === `${e.month}-${e.date}-${e.year}` && 
							dict.description === e.description)
		);
	} else if (action === "REMOVE2") {
		console.log("remove")
		console.log(e)
		RSPV[user.email] = RSPV[user.email].filter(
			dict => (dict.title === e.title && 
							dict.date === `${e.month}-${e.date}-${e.year}` && 
							dict.description === e.description)
		);
	}
	console.log("NEW")
	console.log(RSPV)
	localStorage.setItem("RSPV", JSON.stringify(RSPV));
  return RSPV[user.email]
}

module.exports = {
  updateRSPV
}