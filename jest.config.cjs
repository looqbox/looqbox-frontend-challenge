module.exports = {
	preset: 'ts-jest',
	testEnvironment: 'jsdom',
	roots: ['<rootDir>/src', '<rootDir>/__tests__'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	transform: {
		'^.+\\.(ts|tsx)$': [
			'ts-jest',
			{
				tsconfig: '<rootDir>/tsconfig.jest.json',
			},
		],
	},
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	testMatch: ['**/__tests__/**/*.(spec|test).[jt]s?(x)', '**/?(*.)+(spec|test).[jt]s?(x)'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'^api$': '<rootDir>/src/api/index.ts',
		'^api/(.*)$': '<rootDir>/src/api/$1',
		'^hooks/(.*)$': '<rootDir>/src/hooks/$1',
		'^components/(.*)$': '<rootDir>/src/components/$1',
		'^ui/(.*)$': '<rootDir>/src/components/ui/$1',
		'^helpers/(.*)$': '<rootDir>/src/helpers/$1',
		'^types/(.*)$': '<rootDir>/src/types/$1',
		'^utils/(.*)$': '<rootDir>/src/utils/$1',
		'^validators/(.*)$': '<rootDir>/src/validators/$1',
		'\\.(css|less|scss|sass)$': 'identity-obj-proxy',
	},
};
