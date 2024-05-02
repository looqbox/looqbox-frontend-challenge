export default {
	preset: 'ts-jest',
	testEnvironment: 'jest-environment-jsdom',
	transform: {
		'^.+.tsx?$': 'ts-jest' 
		// process *.tsx files with ts-jest
	},
	moduleNameMapper: {
		'.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
	}
};