console.log('Instead Content')

window.addEventListener('message', function (event) {
  if (event.source != window) return

  if (event.data.type && event.data.type == 'WALLET_CONNECT') {
    console.log('Content script received message: ' + event.data.text)
    chrome.runtime.sendMessage(
      {
        data: 'Hello popup, how are you',
      },
      (response) => {
        console.dir(response)
      },
    )
  }
})
