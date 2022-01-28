chrome.runtime.onMessage.addListener(({ type, name }) => {
  if (type === 'set-name') {
    chrome.storage.local.set({ name })
  }
})

chrome.browserAction.onClicked.addListener((tab) => {
  chrome.storage.local.get(['name'], ({ name }) => {
    chrome.tabs.sendMessage(tab.id || 1, { name })
  })
})
