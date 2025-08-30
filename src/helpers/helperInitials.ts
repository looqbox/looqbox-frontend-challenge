/**
 * Get initials from first and last name of a full name string
 * @param name - Full name to extract initials from
 * @returns Uppercase initials from first and last name
 * @example
 * getInitials('John Doe') // returns 'JD'
 * getInitials('Maria da Silva') // returns 'MS'
 * getInitials('Ana Maria Souza') // returns 'AS'
 */
export function getInitials(name: string): string {
	const parts = name.split(' ').filter(Boolean);
	if (parts.length === 0) return name.charAt(0).toUpperCase();

	return parts
		.map((part, index, arr) => (index === 0 || index === arr.length - 1 ? part.charAt(0) : ''))
		.join('')
		.toUpperCase();
}
