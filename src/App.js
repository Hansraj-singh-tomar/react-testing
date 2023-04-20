import React from 'react'
import CommentForm from './components/CommentForm'

const App = () => {
  return (
    // <div data-testid="custom-element" /> to catch element by id for testing purpose
    <div data-testid="myrootdiv">  
      {/* <h1>Testing Basics</h1>
      <input type="text" />
      <button>test button</button>
      <ul>
        <li>item 1</li>
        <li>item 2</li>
      </ul> */}
      <CommentForm/>
    </div>
  )
}

export default App