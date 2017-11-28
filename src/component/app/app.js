import React from 'react'
import axios from 'axios'
class App extends React.Component{
  componentDidMount () {
    axios.get('/test').then((res) => {
      console.log(res)
    })
  }
  render() {
    return(
      <div>hello word</div>
    )
  }
}
export default App