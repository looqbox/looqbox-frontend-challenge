export const formatName = (name: string) =>
  name.charAt(0).toUpperCase() + name.slice(1);

export const formatId = (id: number) => `#${id.toString().padStart(3, '0')}`;
