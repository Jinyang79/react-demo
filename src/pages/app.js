import React from 'react'
import { Link } from 'react-router-dom'
import './app.scss'
import 'antd/dist/antd.css'

export default function App () {

  return <div className="container">
    <h1> Welcome to Use React</h1>
    <Link to='/login'>去登录</Link>
    <br />
    <Link to='/home'>去首页</Link>
    <br />

  </div>
}
