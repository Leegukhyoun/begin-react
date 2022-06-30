import { Component } from "react";

class MyComponentClass extends Component {
    render(){
        const { name, age, children } = this.props
        return(
            <div>
                제 이름은 {name}이애용
                나이는 {age}입니다
                {children}
            </div>
        )
    }
}
MyComponentClass.defaultProps = {
    name : '박성수',
    age : 38,
    children : "aaa"
}
export default MyComponentClass;