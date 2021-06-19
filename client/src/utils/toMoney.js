

export const toMoney = (value) => {
  const valueInteger = Math.trunc(value)

  return `$ ${valueInteger.toLocaleString('de-DE')}`
}