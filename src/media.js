import { css } from 'styled-components'

const sizes = {
  xl: 1200,
  lg: 991,
	md: 768,
	sm: 576
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