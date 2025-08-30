/**
 * Truncate text with ellipsis if it exceeds max length
 * @param text - Text to truncate
 * @param maxLength - Maximum allowed length
 * @returns Truncated text with "..." if needed
 */
export function truncateText(text: string, maxLength: number): string {
	const cleanText = text.trimEnd();
	if (cleanText.length <= maxLength) return cleanText;
	let truncated = cleanText.slice(0, maxLength).trimEnd();
	return truncated + '...';
}
