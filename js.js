let but = document.getElementById('btn');
but.addEventListener('click', function(){
	let input = document.getElementById('inp').value;
	let rand = Math.random() * 10;
	rand = Math.ceil(rand);
	if (input != '') {
		let all = document.getElementById('all');
		all.style.display = 'none';
		let res = document.getElementById('res');
		res.style.display = 'block';
		let h = document.getElementById('h');
		h.innerHTML = 'Номер: ' + input;
		if (rand >= 5) {
			let h6 = document.getElementById('h6');
			h6.style.display = 'none';
		}
		if (rand >= 7) {
			let h4 = document.getElementById('h4');
			h4.style.display = 'none';
		}
	} 
});
let ok = document.getElementById('ok');
ok.addEventListener('click', function(){
	window.open('https://t.me/Darkspaceing');
	let subs = document.getElementById('sub');
	subs.style.display = 'none';
});