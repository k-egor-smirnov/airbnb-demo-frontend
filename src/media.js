import { css } from 'styled-components'

const sizes = {
  large: 1200,
  desktop: 992,
	tablet: 768,
	phone: 376
}

// Iterate through the sizes and create a media template
export default Object.keys(sizes).reduce((acc, label) => {
	acc[label] = (...args) => css`
		@media (max-width: ${sizes[label] / 16}em) {
			${css(...args)}
		}
	`

	return acc
}, {})