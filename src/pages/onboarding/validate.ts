export const validate = (field: string, content: string) => {
  switch (field) {
    case 'email': {
      const validCharacters = /^[\w.-]+@[\d.A-Za-z-]+\.[A-Za-z]{2,4}$/
      return validCharacters.test(content)
    }
    case 'nickname': {
      const validCharacters = /^[A-Za-z가-힣]+$/ // 영어와 숫자만 허용
      return validCharacters.test(content)
    }
    case 'childname': {
      return content.length > 0 && content.length <= 10
    }
  }
}
