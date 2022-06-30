import { Component } from "react";

class EventPractice extends Component {
    state = {
        message : '',
    }
    render(){
        return(
            <div>
                <h1>이벤트 연습</h1>
                <input type="text" name="message" placeholder="ㅎㅇ" onChange={(e)=>{
                    this.setState({
                        message: e.target.value
                    })
                }}></input>
                <button onClick={()=>{
                    console.log(this.state.message);
                }}>확인</button>
            </div>
        )
    }
}
export default EventPractice;