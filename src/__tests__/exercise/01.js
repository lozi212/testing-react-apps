// simple test with ReactDOM
// http://localhost:3000/counter

import * as React from 'react'
import ReactDOM from 'react-dom'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  // create a div to render your component to
  const div = document.createElement('div')

  // append the div to document.body
  document.body.append(div)

  // use ReactDOM.render to render the <Counter /> to the div
  ReactDOM.render(<Counter />, div)

  // get a reference to the increment and decrement buttons
  const [decrement, increment] = div.querySelectorAll('button')

  // get a reference to the message div
  const message = div.firstChild.querySelector('div')

  // expect the message.textContent toBe 'Current count: 0'
  expect(message.textContent).toBe('Current count: 0')

  // click the increment button
  increment.click()

  // assert the message.textContent
  expect(message.textContent).toBe('Current count: 1')

  // click the decrement button
  decrement.click()

  // assert the message.textContent
  expect(message.textContent).toBe('Current count: 0')

  // Extra Credit: use dispatchEvent
  increment.dispatchEvent(
    new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      button: 0,
    }),
  )

  expect(message.textContent).toBe('Current count: 1')

  // cleanup by removing the div from the page
  div.remove()
})

/* eslint no-unused-vars:0 */