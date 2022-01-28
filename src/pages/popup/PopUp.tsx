import React, { useEffect, useState } from 'react'

const PopUp = (): JSX.Element => {
  const [state, setState] = useState('ok')
  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      sendResponse({
        data: 'I am fine, thank you. How is life in the background?',
      })
      setState(message)
    })
  }, [])

  return (
    <div style={{ margin: 0, padding: 0 }}>
      <h1>Instead Wallet</h1>
      <p>If you are seeing this, React is {state}!</p>
    </div>
  )
}

export default PopUp
