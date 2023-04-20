import React, {useState} from 'react'

const CommentForm = () => {
  const [text, setText] = useState("");
  const [checked, setChecked] = useState(false);

  return (
    <div>
      <h2>Comment Form</h2>
      <input value={text} placeholder="write your comment here" onChange={e => setText(e.target.value)}/>
      <input type="checkbox" id="checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/>
      {/* <input type="checkbox" id="checkbox" data-testid="terms-checkbox" defaultChecked={checked} onChange={() => setChecked(!checked)}/> */}
      <label href="checkbox">i agree to terms and conditions</label>
      <button disabled={!checked || !text} onClick={() => console.log("clicked")}>comment</button>
    </div>
  )
}

export default CommentForm