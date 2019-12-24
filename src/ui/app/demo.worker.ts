import 'shared/debug'

import * as debug from 'debug'

const log = debug('[Worker]')

const ctx: Worker = self as any

ctx.addEventListener('message', event => {
  log('received message', event.data)

  ctx.postMessage('hey from worker. Message received!')
})

export default (null as any) as typeof Worker
