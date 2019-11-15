// This shows the HTML page in "ui.html".
figma.showUI(__html__, {
  width: 400,
  height: 300,
  position: 'last'
})

const serialize = ({ name, width, height }: SceneNode) => ({
  width,
  height,
  name
})

const sendSerializedSelection = (selection: readonly SceneNode[]) => {
  const serialized = selection.map(serialize)
  console.log('Serialized elements: ', serialized)
  figma.ui.postMessage(JSON.stringify(serialized))
}

sendSerializedSelection(figma.currentPage.selection)

figma.on('selectionchange', () =>
  sendSerializedSelection(figma.currentPage.selection)
)
