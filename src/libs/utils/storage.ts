export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value)
}

export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string) || []
}

export const getStorageLength = (key: string) => {
  const values = JSON.parse(getItem(key) || '[]')
  return values.length
}
