import forceContext from 'force-canvas-context'

export default function drawToCanvas (source, dest, pos=[0, 0]) {
  forceContext(dest).drawImage(source, ...pos)
  return dest
}
