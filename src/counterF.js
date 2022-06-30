import React, { useState } from 'react';

const CounterF = () => {
    //useState함수를 ㅂ호출하면 배열을 ㅏㄴ환해준다
    // 배열의 0번째에는 초기값
    // 배열의 1번째에는 이 값을 업데이트 해주는 함수
    const [message, setMessage] = useState('안녕');
    const onClickenter = () => setMessage('안녕하세요');
    const onClickleave = () => setMessage('잘가세요');
    console.log(useState(0));
    return (
        <div>
            <button onClick={onClickenter}>입장</button>
            <button onClick={onClickleave}>퇴장</button>
            <p>{message}</p>
        </div>
    );
};

export default CounterF;