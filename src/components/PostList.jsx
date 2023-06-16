import React, { Component } from 'react'
import axios from 'axios'

export class PostList extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       posts:[]
    }
  }
  componentDidMount(){
     axios.get('https://jsonplaceholder.typicode.com/posts')
     .then(response => {
        this.setState({posts:response.data})
        console.log(response.data)
     })
     .catch(error=>console.log(error))
  }
  render() {
    return (
      <div>PostList</div>
    )
  }
}

export default PostList