// Configuração global para testes (pode adicionar mocks, etc)
require('@testing-library/jest-dom');

// Mock global para import.meta.env usado nas APIs
if (!globalThis.importMeta) {
	globalThis.importMeta = {};
}
if (!globalThis.importMeta.env) {
	globalThis.importMeta.env = {};
}
globalThis.importMeta.env.VITE_POKEAPI_BASE_URL = 'https://pokeapi.co/api/v2';

// Compatibilidade para import.meta.env em ambiente Jest
Object.defineProperty(globalThis, 'import.meta', {
	value: { env: { VITE_POKEAPI_BASE_URL: 'https://pokeapi.co/api/v2' } },
	configurable: true,
});
