export const getItem = (key: string) => {
  return JSON.parse(localStorage.getItem(key) as string)
}

export const setItem = (key: string, value: string) => {
  return localStorage.setItem(key, value)
}

export const saveOneValue = (value: string) => {
  const existingArray =
    JSON.parse(localStorage.getItem('onboarding') as string) || []
  const newValue = value
  console.log(newValue)
  existingArray.push(newValue)
  localStorage.setItem('onboarding', JSON.stringify(existingArray))
}

export const saveMultiValues = (...values: string[]) => {
  const existingObject =
    JSON.parse(localStorage.getItem('onboarding') as string) || {}
  for (const [index, value] of values.entries()) {
    existingObject[`value${index + 1}`] = value
  }
  localStorage.setItem('onboarding', JSON.stringify(existingObject))
}

export const getStorageLength = (key: string) => {
  const values = JSON.parse(localStorage.getItem(key) || '[]')
  return values.length
}
