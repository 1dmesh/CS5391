export default function updateRSPV(user, e, action) {
	let RSPV = {};
	if (localStorage.getItem("RSPV")) {
		RSPV = JSON.parse(localStorage.getItem("RSPV"));
	}
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
		RSPV[user.email] = RSPV[user.email].filter(
			dict => { 
				let date =  String(`${e.month}-${e.date}-${e.year}`)
				date = date.replace("undefined-", "")
				date = date.replace("-undefined", "")
				return !(dict.title === e.title && 
							dict.date === date &&
							dict.description === e.description) }
		);
	}
	localStorage.setItem("RSPV", JSON.stringify(RSPV));
  return RSPV[user.email]
}

module.exports = {
  updateRSPV
}