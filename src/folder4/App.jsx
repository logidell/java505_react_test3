import React from "react";
import Toolbar from "./Toolbar";


//context : 자식 컴포넌트에 데이터를 한번에 전달할 수 있는 객체
//  React.createContext : 컨텍스트 객체를 생성
//                        Provider를 사용해 생성된 컨텍스트를 사용할 컴포넌트를 지정
//      사용법 : const 컨텍스트명 = React.createContext(기본값);
//주의  - deps가 깊어지면 사용을 권장하나 3개 이상 사용하는 것을 권장치 않음.



//  Context.Provider : 생성된 컨텍스트를 사용할 자식 컴포넌트를 지정 시 사용
//                     value 속성에 전달하고자 하는 데이터를 지정, 해당 데이터를 사용하고자 하는 자손 컴포넌트에 감싸면
//                     어느 위치의 자손 컴포넌트 간 상관 없이 해당 데이터에 접근이 가능
//                     여러개를 사용하는 것이 가능하다. - >provider1 : consumer 多 가능

//      사용법 :
//      <컨텍스트명.Provider value={전달할 데이터}>
//          <자식컴포넌트/> (거의 자손컴포넌트)
//      </컨텍스트명.Provider>



//  Context.Consumer : Provider로 감싸진 자손 컴포넌트 중 컨텍스트에 저장된 데이터를 사용하고자 할 경우
//                     consumer를 사용해 저장된 데이터를 가져옴.
//                     함수 컴포넌트에서 사용한다. 여러개를 사용하는 것이 가능하다.


//      사용법 :
//      <컨텍스트명.Consumer>
//          {value => <컴포넌트 key={value}/>}
//      </컨텍스트명.Consumer>


//  Class.contextType : 클래스 컴포넌트에서 컨텍스트에 저장된 내용을 가져올 경우 사용한다.
//      사용법 :
//      componentDidMount() {
//          let value = this.context;
//      }
//          ...
//      사용하고자 하는 컴포넌트 클래스.contextType= 생성된 컨텍스트;


//  Context.displayName : 컨텍스트의 이름을 지정할 때 사용한다.
//                        개발자 도구에서 displayName으로 지정한 이름이 출력된다.
//                        지정한이름.Provider / 지정한 이름.Consumer  상태로 나타난다.
//                        이름 설정은 해도 안해도 상관없다.

//      사용법 :
//      컨텍스트명.displayName = "사용하고자 하는 이름"


//  useContext : 컨텍스트를 사용하기 위한 React Hook
//      사용법 :
//      const value = useContext(컨텍스트명);

function App(props){
    //자식 컴포넌트에 theme  이름으로 데이터 전달
    return<Toolbar theme = {"dark"}/>
}
export default App