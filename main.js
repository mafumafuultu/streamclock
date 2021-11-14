const onload = () => document.readyState !== 'complete'
	? new Promise(r => document.addEventListener('readystatechange', () => {
		switch (document.readyState) {
			case 'complete': r();break;
			default:
		}
	}))
	: Promise.resolve();

const time = () => {
	let d = new Date();
	return {
		M: (d.getMonth() + 1).toString().padStart(2, 0),
		D: d.getDate().toString().padStart(2, 0),
		W: d.toDateString().split(' ')[0],
		h: d.getHours().toString().padStart(2, 0),
		m: d.getMinutes().toString().padStart(2, 0),
		s: d.getSeconds().toString().padStart(2, 0),
	};
};