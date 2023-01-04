import logo from './logo.svg';
import './App.css';
import {Button} from "react-bootstrap";
import ClassComponent from "./ClassComponent";
import FunctionComponent from "./FunctionComponent";
//react bootstrap 전용 import


//배워야 할 개념
//1. jsx : javascript + html + xml 이 융합된 것 / 하나의 파일에 javascript와 html을 동시에 작성한다.
//2. Component : React를 구성하는 최소 UI 단위, 데이터(props)를 입력 받아 view(state) 상태에 따라 화면을
//              출력하는 함수, 컴포넌트의 이름은 항상 대문자로 시작해야 한다.
//              리액트는 소문자로 시작하는 컴포넌트를 html 태그로 인식하기 때문이다. UI를 재사용 가능한 개별적인
//              여러 조각으로 나눠서 화면을 구현한다.

//              함수형 컴포넌트 : 현재 많이 사용되는 방식, 사용이 간편하다. hooks가 나오게 되면서 사용하기 편해짐.
//              javascript 함수를 작성하는 방식으로 사용한다.
//              클래스형 컴포넌트 : 기존에 많이 사용되는 방식, React.Component를 상속받아 구현한다, 컴포넌트 구성요소.
//              리액트 생명주기를 모두 포함하고 있다.

//3. props : Component 간의 데이터를 주고 받기 위한 javascript 객체이다. properties의 준말. 읽기 전용이다.
//          부모 컴포넌트에 자식 컴포넌트로 데이터 전달 시 주로 사용한다. props는 컴포넌트간 데이터 사 전달 시
//          props를 사용할 경우 순차적으로 데이터 전달

//4. state : 현 컴포넌트의 상태를 표시하는 객체이며 setState()를 통해 데이터 수정, 데이터 수정시 화면에 재랜더링 한다.

//5. hooks : React 16.8 버전에서 추가된 기능. 상태 변경 및 리액트 생명주기에 관련된 함수를 사용할 수 있게 해주는 기능
//          React hooks를 사용하면 class 컴포넌트를 사용할 필요 없음

//6. Context : 데이터 전달 객체. props와 다르게 데이터를 바로 전달할 수 있다.

//7. react - router : 화면 변경 위치를 바꿔준다. 각 페이지의 경로를 구성하는 라이브러리


//JSX 문법
//1. 반드시 1개의 부모 요소가 다른 요소를 감싸는 형태로 구성해야 한다.
//      : react 는 가상 화면을 뿌려주는 구성, 어떤 태그던 감싸주는 태그는 하나만 있어야만 한다.
//      index.html 의  <div id="root"></div> 안에 들어가는 구조이기 때문.
//      <> </> << 이렇게만 작성한 뒤 내부에 태그 작성해도 동작이 가능하다. 가능하면 div 태그로 구성하는 것이 좋은 것 같다.

//2. javascript 표현식이 가능하다.
//      : {} 안에 자바스크립트를 사용할 수 있다.
//      if문은 연산식이지 표현식이 아니기에 jsx 에서 사용할 수 없다. (사용하려면 삼항연산자로 사용해야 한다. )

//3. html 속성을 카멜 명명법으로 사용한다.
//      : font- size => fontSize로 사용
//      class => className으로 사용한다.

//4. jsx문법은 html 태그 사용시 반드시 시작태그, 끝 태가 모두 입력해야 하고 축약형식도 상관 없다.



function App() {
    let num1 = 10;
    const flag = false;

    //이 곳의 선언부분에서는  if문 사용해도 무관하다.
    let result;

    if (flag) {
        result = <div> 결과는 True? </div>
    } else {
        result = <div> 결과는 False </div>
    }
    // {} 표현식 내에서 javascript 의 if문을 사용할 수 없기 때문에 외부에서 미리 선언

    return (
            <div className="App">
                <header className="App-header">
                    <button type={"button"}> Basic Button</button>
                    <button type={"button"} className={"btn btn-primary"}> Bootstrap active Button</button>
                    <Button variant={"success"}>React Bootstrap active button</Button>
                    <br/>
                    <hr/>
                    {/*{flag == true ? 100 : 0 }*/}



                    <br/>
                    <hr/>

                    <ClassComponent/>
                    <FunctionComponent/>



                    <br/>
                    <hr/>

                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App4.js</code> and save to reload.
                    </p>

                    <a
                            className="App-link"
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>

                <br/>
                <hr/>

            </div>
    );
}

export default App;
