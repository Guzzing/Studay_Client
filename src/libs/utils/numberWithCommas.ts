const numberWithCommas = (number: number) => {
  return number.toString().replaceAll(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export default numberWithCommas
