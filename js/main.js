document.addEventListener('DOMContentLoaded', () => {
	const toTop = document.querySelector('#toTop')
	const paras = Array.from(document.querySelectorAll('p'))
	const totalChars = document.querySelector('#cantidad')
	const imgContainer = document.querySelector('#img')
	const anchor = document.querySelector('.tres > a')
	const clickedLink = document.querySelector('#link')

	const newImage = document.createElement('IMG')

	paras.forEach(p => p.style.background = "lightblue")

	const totalLen = paras.reduce((acc, cur) => acc + cur.innerText.split(' ').length , 0)
	totalChars.innerText = `Hay ${totalLen} palabras en total dentro de los parrafos`

	anchor.addEventListener('click', e => {
		e.preventDefault()
		clickedLink.innerText = `Clickeaste en ${e.target.href}`
	})

	newImage.setAttribute('src', 'img/code.jpg')
	imgContainer.appendChild(newImage)

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
