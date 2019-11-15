import * as React from 'react'
import { Rect } from 'shared/types'
import { area } from 'shared/utils'

import * as styles from './app.css'

export const App = () => {
  const [rects, setRects] = React.useState<Rect[]>([])

  onmessage = event => {
    const data = event.data.pluginMessage
    const selectedElement =
      typeof data !== 'undefined' ? (JSON.parse(data) as Rect[]) : undefined
    console.log('Selected Elements', selectedElement)
    if (!!selectedElement) {
      setRects(selectedElement)
    }
  }

  return (
    <div className={styles.container}>
      {!!rects.length ? (
        <>
          <h1>
            Total area
            <b className={styles.total}>
              {rects.reduce((acc, x) => acc + area(x.width, x.height), 0)} px
              <sup>2</sup>
            </b>
          </h1>
          <br />
          <div className={styles.items}>
            {rects.map((x, i) => {
              return (
                <div key={i}>
                  {x.name}
                  <b>{area(x.width, x.height)}</b>
                </div>
              )
            })}
          </div>
        </>
      ) : (
        <h1>Select one or multiple elements</h1>
      )}
    </div>
  )
}
