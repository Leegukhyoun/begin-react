import './App.css';
import { MyContext } from './component/MyContext';
import Counter2 from './Counter2';
import MyComponent from './Mycomponent';


function App() {
  const newtext = "안녕하세요";
  return (
    // * JSX에서 자바스크립트 표현식을 사용하려면 {}로 감싼다
    // * if문 대신 조건부 연산자 삼항연산자를 사용해야한다.
    <MyContext.Provider value={newtext}>
      <div className='react'>
        <Counter2></Counter2>
      </div>
    </MyContext.Provider>



  );
}

export default App;
