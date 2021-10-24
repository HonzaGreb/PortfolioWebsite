import { Fragment } from 'react'
import ColorChoice from './ColorChoice'

import { MINIMALISM, DARK, MEMOZRNNOST, CLASSIC } from '../../Store/Context'

const colorChoiceData = [
  {
    name: MINIMALISM,
    id: 0,
  },
  {
    name: DARK,
    id: 1,
  },
  {
    name: MEMOZRNNOST,
    id: 2,
  },
  {
    name: CLASSIC,
    id: 3,
  },
]

const ColorSettings = () => {
  const mappedColorChoiceData = colorChoiceData.map((colorChoice) => {
    return <ColorChoice theme={colorChoice.name} key={colorChoice.id} />
  })

  return <Fragment>{mappedColorChoiceData}</Fragment>
}

export default ColorSettings
