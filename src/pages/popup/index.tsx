import React from 'react'
import { render } from 'react-dom'
import PopUp from './PopUp'

console.log('popup script')

const root = document.querySelector('#root')

render(<PopUp />, root)
