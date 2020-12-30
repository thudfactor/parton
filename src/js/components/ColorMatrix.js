import ColorCell from '../components/ColorCell'
import { useSelector } from 'react-redux'
import { hex } from 'wcag-contrast'
import 'twin.macro'

const contrast = (c1, c2) => {
  return Math.round(hex(c1, c2) * 10) / 10
}

const permutations = (colors, permutationSize, hideFailures = false) => {
  const collector = []
  const colorLength = colors.length
  const slots = colorLength > permutationSize ? permutationSize : colorLength
  const tempArray = Array(slots)

  const counters = Array(slots).fill(0)
  let iter = 0
  while (counters[0] < colorLength && iter < 5000) {
    for (let j = 0; j < slots; j++) {
      const color = colors[counters[j] % colorLength]
      tempArray[j] = color
    }

    if (tempArray.length === new Set(tempArray).size) {
      collector.push([...tempArray])
    }

    // update counters
    for (let carry = slots - 1; carry >= 0; carry--) {
      counters[carry] = counters[carry] + 1
      if (counters[carry] % colorLength !== 0) break
    }

    iter++
  }

  const colorData = collector.map(perm => {
    const [bgcolor, fgcolor, linkcolor = null] = perm
    const key = `ColorCell-${perm.join('-')}`
    const fgbgratio = contrast(fgcolor, bgcolor)
    const linkfgratio = linkcolor ? contrast(fgcolor, linkcolor) : 100
    const linkbgratio = linkcolor ? contrast(linkcolor, bgcolor) : 100
    const failed = fgbgratio < 3 || linkbgratio < 3

    return {
      key,
      bgcolor,
      fgcolor,
      linkcolor,
      fgbgratio,
      linkfgratio,
      linkbgratio,
      failed
    }
  })

  const filtered = colorData.filter(cd => !cd.failed)
  const results = hideFailures ? filtered : colorData

  return [results, filtered.length, colorData.length]
}

export default function ColorMatrix() {
  const colors = useSelector(state => state.color)
  const testLinks = useSelector(state => state.testLinks)
  const hideFailures = useSelector(state => state.hideFailures)

  const [permutationSet, resultLength, fullLength] = permutations(colors, testLinks ? 3 : 2, hideFailures)

  return (
    <>
      <div>
        {resultLength !== fullLength && (
          <p>
            There are {resultLength} passing combinations out of {fullLength} possibilities.
          </p>
        )}
        {resultLength === fullLength && <p>There are {resultLength} combinations.</p>}
      </div>
      <div tw="w-full grid gap-2 grid-cols-2  md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {permutationSet.map(cellData => (
          <ColorCell colors={cellData} key={cellData.key} />
        ))}
      </div>
    </>
  )
}
