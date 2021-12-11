const onload = () => document.readyState !== 'complete'
	? new Promise(r => document.addEventListener('readystatechange', () => {
		switch (document.readyState) {
			case 'complete': r();break;
			default:
		}
	}))
	: Promise.resolve();

const ID = id => document.getElementById(id);
const QU = s => document.querySelector(s);
const time = () => {
	let d = new Date();
	return {
		Y: d.getFullYear(),
		M: (d.getMonth() + 1).toString().padStart(2, 0),
		D: d.getDate().toString().padStart(2, 0),
		W: d.toDateString().split(' ')[0],
		h: d.getHours().toString().padStart(2, 0),
		m: d.getMinutes().toString().padStart(2, 0),
		s: d.getSeconds().toString().padStart(2, 0),
	};
};
const updateTimer = el => {
	switch(st) {
		case "live":
			(t => el.innerHTML = `<div><time id="time" class="text-border c-text" data-txt="${t.h}:${t.m}">${t.h}:${t.m}</time><span id="live" class="text-border c-week" data-txt="Live">Live</span></div>`)(time());
			break;
		case "long":
			(t => el.innerHTML = `<div><span class="text-border c-week" data-txt="${t.Y}/${t.M}/${t.D}">${t.Y}/${t.M}/${t.D}</span><time id="time" class="text-border c-text" data-txt="${t.h}:${t.m}">${t.h}:${t.m}</time></div>`)(time());
			break;
		default: 
			(t => el.innerHTML = `<div><time id="time" class="text-border c-text" data-txt="${t.h}:${t.m}">${t.h}:${t.m}</time><hr><div id="dayweek" class="text-border c-day"><time id="day" class="text-border c-day" data-txt="${t.M}/${t.D}">${t.M}/${t.D}</time> <span id="week" class="text-border c-week" data-txt="${t.W}">${t.W}</span></div></div>`)(time());
	}
	setTimeout(() => updateTimer(el), 1000);
};