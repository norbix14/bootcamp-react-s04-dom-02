document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')
	const para = Array.from(document.querySelectorAll('p'))
	const cantidad = document.querySelector('#cantidad')
	const img = document.querySelector('#img')

	const newImage = document.createElement('IMG')

	para.forEach(p => p.style.background = "lightblue")

	const lens = para.reduce((acc, cur) => [...acc, cur.innerText.length], [])
	const totalLen = lens.reduce((acc, cur) => acc += cur, 0)
	cantidad.innerText = `En todos los parrafos hay ${totalLen} caracteres en total`

	newImage.setAttribute('src', 'img/code.jpg')
	img.appendChild(newImage)

	window.addEventListener('scroll', controlScroll)

	function controlScroll() {
		const st = document.body.scrollTop || document.documentElement.scrollTop
		const display = toTop.style.display
		const cl = toTop.classList
		if (st > 300) {
			toTop.style.display = 'block'
			cl.remove('hide')
			cl.add('show')
			setTimeout(() => {cl.add('rotate')}, 2100)
	  } else {
			if (display === 'block') {
				cl.remove('show')
				cl.add('hide')
				setTimeout(() => {
					cl.remove('rotate')
					toTop.style.display = 'none'
				}, 2000)
			}
	  }
	}

	toTop.addEventListener('click', () => {
		document.body.scrollTop = 0
		document.documentElement.scrollTop = 0
	})

})
