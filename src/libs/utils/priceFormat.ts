/**
 * @param amount: 입력받은 가격
 * @returns: 천 단위로 ,찍어서 나타내기
 */
export const priceFormat = (amount: number): string => {
  const formattedAmount: string = amount
    .toFixed(0)
    .replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',')
  return formattedAmount
}
