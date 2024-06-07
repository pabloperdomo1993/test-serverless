export function filterInput(data: string | null | undefined): string | null {
  if (!data) return null;

  const phrase = data.replace(/_/g, ' ');

  return phrase.replace(/20join20/g, '&');
}