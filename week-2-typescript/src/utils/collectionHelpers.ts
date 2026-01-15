// ===================== FUNCTIONS =====================
export function addItem<T>(items: T[], newItem: T): T[] {
  return [...items, newItem];
}

export function updateItemById<T extends { id: string }>(
  items: T[],
  id: string,
  updateInfo: Partial<T>
): T[] {
  return items.map((item) =>
    item.id === id ? { ...item, ...updateInfo } : item
  );
}

export function deleteItemById<T extends { id: string }>(
  items: T[],
  id: string
): T[] {
  return items.filter((item) => item.id !== id);
}

export function searchItem<T extends { id: string }>(
  items: T[],
  keyword: string
): T | undefined {
  return items.find((item) => item.id === keyword);
}
