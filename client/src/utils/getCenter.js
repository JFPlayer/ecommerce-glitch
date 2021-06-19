// valor (x,y) del centro del elemento 
export const getCenter = (ref) => {
  const rect = ref.current.getBoundingClientRect()
  const x = (rect.width / 2) + rect.left
  const y = (rect.height / 2) + rect.top
  return { x, y }
}