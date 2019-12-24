import * as debug from 'debug'
import { createIframeMessenger } from 'figma-messenger'
import * as React from 'react'
import { IframeToMain, Layers, MainToIframe } from 'shared/types'

import * as styles from './app.css'
import DemoWorker from './demo.worker'

const log = debug('[App]')

const demoWorker = new DemoWorker(undefined as any)

demoWorker.postMessage('hey worker!')
demoWorker.onmessage = data => {
  log('message from worker received', data)
}

const messenger = createIframeMessenger<IframeToMain, MainToIframe>()

export const App = () => {
  const [layers, setLayers] = React.useState<Layers[]>([])

  React.useEffect(() => {
    // Listen for SelectionChanged message
    messenger.on('selectionChanged', els => {
      log('Message received from Main Thread.', els)
      if (!!els) {
        setLayers(els)
      }
    })

    // unsubscribing all handlers.
    return () => messenger.off('selectionChanged')
  }, [])

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.logo}></span>
      </div>
      {!!layers.length ? (
        <div className={styles.items}>
          <div style={{ borderBottom: '1px solid #3a3a3a' }}>
            Layer Name
            <b>Id</b>
          </div>
          {layers.map((x, i) => (
            <div key={i}>
              {x.name}
              <b>{x.id}</b>
            </div>
          ))}
        </div>
      ) : (
        <h4 className={styles.header}>Select one or multiple elements</h4>
      )}
    </div>
  )
}
