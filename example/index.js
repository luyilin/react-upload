import React from 'react'
import { render } from 'react-dom'
import Upload from '../src/index.js'

const App = () => <div>
  <Upload></Upload>
</div>

render(<App />, document.getElementById('app'))
