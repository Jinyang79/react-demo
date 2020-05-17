import React, { useEffect, useState } from 'react'
import './home.scss'
import { Table } from 'antd'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home () {
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const columns = [
    {
      title: '地区',
      dataIndex: 'area'
    }, {
      title: 'Java',
      dataIndex: 'java'
    }, {
      title: 'PHP',
      dataIndex: 'php'
    }, {
      title: 'Node',
      dataIndex: 'node'
    }, {
      title: 'JS',
      dataIndex: 'js'
    }, {
      title: 'Python',
      dataIndex: 'python'
    },
  ];
  useEffect(() => {
    axios.get('/data.json').then((response) => {
      const res = response.data;
      if (res.code === 0) {
        setData(res.data);
      }
    })
  }, []);
  return <div className='home'>
    <h1>语言大数据报告</h1>
    <div className="wrap">
      <div className="nav">
        <a href className={index === 0 ? "checked" : ""} onClick={() => { setIndex(0) }}>语言动态</a>
        <a href className={index === 1 ? "checked" : ""} onClick={() => { setIndex(1) }}>语言动态</a>
        <a href className={index === 2 ? "checked" : ""} onClick={() => { setIndex(2) }}>语言动态</a>
        <a href className={index === 3 ? "checked" : ""} onClick={() => { setIndex(3) }}>语言动态</a>
      </div>
      <Table
        pagination={false}
        bordered
        columns={columns}
        dataSource={data} />
      <Link to="/" className="nav-link">回首页</Link>
    </div>

  </div>
}