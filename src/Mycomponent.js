// const MyComponent = () => {
//     return <div>새로운 컴포넌트 생성</div>
// }

// function MyComponent(){
//     return <div>새로운 컴포넌트 생성</dMyComponent export default MyComponent;


import React from 'react';
import PropTypes from 'prop-types';
const MyComponent = (props) => {
    const {name, age, children} = props;
    return (
        <div>
            안녕하세용 전 {name}이에용 <br/>
            제 나이는 {age}살이에용
            {children}이애용
        </div>
    );
};
// props 기본값 설정
MyComponent.defaultProps = {
    name : "박성수",
    age : 38
}
MyComponent.propTypes = {
    name : PropTypes.string
}
//array : 배열
//bool : true false
//func : 함수
//number : 숫자
//object : 객체
//string : 문자
//any : 아무거나

//https://github.com/facebook/prop-types

export default MyComponent;