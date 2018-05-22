/**
 * @param value
 * @returns {string}
 */
export const money = value => {
  const formatted = Number(value)
    .toFixed(2)
    .replace('.', ',')
    .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  return `R$ ${formatted}`
}
