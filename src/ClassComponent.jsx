// ClassComponent


// 1. 모든 컴포넌트는 React를 import 해서 사용.
// 2. 클래스 컴포넌트는 React.Component 상속받아서 클래스 생성
// 3. 클래스 컴포넌트를 export default로 설정
// 4. 클래스 컴포넌트에는 render()함수가 존재한다. render() 함수에서 jsx 문법을 사용한다.
// 5. 함수 컴포넌트에는 return에서 jsx 문법을 사용한다.
// 6. 클래스 컴포넌트는 리액트 생명주기 메소드를 사용할 수 있다.
// 7. 생성자 사용 가능, 상태 표현을 위한 state 메몾 설정


import React from "react";


class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
                <div>
                    <p>클래스 컴포넌트 화면</p></div>
        );
    }

    componentDidMount() {
        console.log("mount 후 출력")
    }
}

export default ClassComponent;