// eslint-disable-next-line no-undef
gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

// eslint-disable-next-line no-undef
if (ScrollTrigger.isTouch !== 1) {

	// eslint-disable-next-line no-undef
	ScrollSmoother.create({
		wrapper: '.wrapper',
		content: '.content',
		smooth: 1.5,
		effects: true
	})

	// eslint-disable-next-line no-undef
	gsap.fromTo('.hero-section', { opacity: 1 }, {
		opacity: 0,
		scrollTrigger: {
			trigger: '.hero-section',
			start: 'center',
			end: '820',
			scrub: true
		}
	})

	// eslint-disable-next-line no-undef
	let itemsL = gsap.utils.toArray('.gallery__left .gallery__item')

	itemsL.forEach(item => {
    	// eslint-disable-next-line no-undef
		gsap.fromTo(item, { opacity: 0, x: -50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-850',
				end: '-100',
				scrub: true
			}
		})
	})
	// eslint-disable-next-line no-undef
	let itemsR = gsap.utils.toArray('.gallery__right .gallery__item')

	itemsR.forEach(item => {
    	// eslint-disable-next-line no-undef
		gsap.fromTo(item, { opacity: 0, x: 50 }, {
			opacity: 1, x: 0,
			scrollTrigger: {
				trigger: item,
				start: '-750',
				end: 'top',
				scrub: true
			}
		})
	})

}
