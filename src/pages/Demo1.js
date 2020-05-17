import React from 'react';
import { Input, Select } from 'antd'
import 'antd/dist/antd.css'
import './App.scss';
const { Search } = Input;
const { Option } = Search;
class App extends React.Component {
  state = {
    val: '',
    list: []
  }

  handleSearch = (value) => {
    let { list } = this.state;
    list.push(value);
    this.setState({
      list
    })
  }
  render () {
    const { list } = this.state;
    const options = [];
    const liItem = list.map((item, index) => {
      options.push(<Option key={index}>{item}</Option>)
      return <li key={index}>{item}</li>
    })
    return <div>
      <p>react first dome</p>
      <h1>hello,world</h1>
      <ul>
        {
          liItem
        }
      </ul>
      <div>
        <Search
          placeholder="请输入"
          enterButton="添加"
          size="middle"
          style={{ width: 300 }}
          onSearch={this.handleSearch}
        />
        <br />
        <Select style={{ width: 150 }}>
          {options}
        </Select>
      </div>
    </div >
  }
}
export default App;
