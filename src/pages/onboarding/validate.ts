export const validate = (field: string, content: string) => {
  if (field === 'email') {
    const validCharacters = /^[\w.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,4}$/
    return validCharacters.test(content)
  } else if (field === 'nickname') {
    const validCharacters = /^[A-Za-z가-힣]+$/ // 영어와 숫자만 허용
    return validCharacters.test(content)
  }
}
