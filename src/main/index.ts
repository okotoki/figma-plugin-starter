import { createMainThreadMessenger } from 'figma-messenger'
import { IframeToMain, MainToIframe } from 'shared/types'

// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 400,
  height: 300
})

const messenger = createMainThreadMessenger<MainToIframe, IframeToMain>()

const sendSelection = (selection: readonly SceneNode[]) => {
  const sel = selection.map(({ name, id }) => ({
    name,
    id
  }))

  // Send current selection to Iframe.
  messenger.send('selectionChanged', sel)
}

sendSelection(figma.currentPage.selection)

figma.on('selectionchange', () => sendSelection(figma.currentPage.selection))
