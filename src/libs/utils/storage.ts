export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getItem = (key: string) => {
  const storedItem = localStorage.getItem(key)
  console.log(storedItem, typeof storedItem)
  if (storedItem === undefined || storedItem === null) return []
  else if (typeof storedItem === 'string') return storedItem
  return JSON.parse(localStorage.getItem(key) as string)
}

export const getStorageLength = (key: string) => {
  const values = JSON.parse(getItem(key) || '[]')
  return values.length
}
