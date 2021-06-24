// valor (x,y) del centro del elemento 
export const getCenter = (ref) => {
  if(!ref) return 0;
  const rect = ref.current.getBoundingClientRect()
  const x = (rect.width / 2) + rect.left
  const y = (rect.height / 2) + rect.top
  return { x, y, width : rect.width, height: rect.height }
}