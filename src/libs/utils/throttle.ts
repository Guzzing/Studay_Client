const throttle = <T extends unknown[], U>(
  callback: (this: U, ...args: T) => void,
  wait: number
): ((this: U, ...args: T) => void) => {
  let waiting = false

  return function (this: U, ...args: T): void {
    if (!waiting) {
      callback.apply(this, args)
      waiting = true
      setTimeout(() => {
        waiting = false
      }, wait)
    }
  }
}

export default throttle
