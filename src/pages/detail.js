import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import './app.scss'
import 'antd/dist/antd.css'
import { Button } from 'antd';

export default function Detail () {
  const params = useParams();
  const history = useHistory()
  return <div className="container">
    <p>当前参数ID为:{params.id}</p>
    <Button onClick={() => {
      history.push('/')
    }}>跳转首页</Button>
  </div>
}

// export default class Detail extends React.Component {

//   handleJump = () => {
//     this.props.history.push('./login')
//   }

//   render () {
//     return <div className="container">
//       <h1> welcome use router</h1>
//       <p>当前参数ID为:{this.props.match.params.id}</p>
//     </div>
//   }
// }