import React, { useRef } from 'react'
import { render } from 'react-dom'
import './ui.css'
import Logo from './logo.svg'


function App () {
  let textbox: HTMLInputElement


  const countRef = useRef<HTMLInputElement>(null)
  if (countRef.current) {
    countRef.current.value = '5'
  }
  textbox = countRef.current
  // const countRef = (element: HTMLInputElement) => {
  //   if (element) element.value = '5'
  //   textbox = element
  // }

  const onCreate = () => {
    const count = parseInt(textbox.value, 10)
    parent.postMessage({ pluginMessage: { type: 'create-rectangles', count } }, '*')
  }

  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*')
  }

  return <div>
  <img src={Logo} />
  <h2>Rectangle Creator dsdsd2</h2>
  <p>Count: <input ref={countRef} /></p>
  <button id="create" onClick={onCreate}>Create</button>
  <button onClick={onCancel}>Cancel</button>
</div>
}

render(<App />, document.getElementById('react-page'))
