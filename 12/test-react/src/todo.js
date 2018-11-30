import React, { Component } from 'react';

class todo extends Component {
    state = {
        list: [
            {
                id: 1,
                title: '할일할일'
            },
            {
                id: 2,
                title: '할일할일'
            },
        ]
    }
    render() {
        return (
            <div>
                <h1>Todo</h1>
                <input type="text"></input>
                <ul>
                    {
                        this.state.list.map((item, index)=> {

                            return (
                                <li key={index}>{item.title}</li>
                            )
                        })
                    }
                <li>할일</li>
                <li>할일</li>
                <li>할일</li>
                </ul>



            </div>
        );
    }
}

export default todo;