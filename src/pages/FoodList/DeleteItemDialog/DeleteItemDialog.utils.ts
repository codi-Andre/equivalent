export function showDeleteText(
  prefix: string,
  itemName: string,
  sufix: string,
): string {
  const text = prefix + " '" + itemName + "' " + sufix
  return text
}
