import React from 'react';

//state : 현 컴포넌트의 상태 나타내는 객체  = 현 컴포넌트에서 변경 가능한 객체. 직접적 수정이 불가능.
// (화면 렌더링과 관련이 있음)
//setState() : state의 값을 변경하는 함수


// 리액트의 생명 주기 : 컴포넌트가 생성되고 내용이 변경되고 컴포넌트가 삭제되는 상태
// componentDidMount:  컴포넌트가 생성되고 화면에 렌더링 된 이후 실행 되는 함수
// componentDidUpdate:  컴포넌트의 상태가 변경된 후 실행되는 함수, props 변경(부모에서 값 변경), setState()
// 호출,forceUpdate() 통한 강제 업데이트 후 동작
// componentWillUnmount: 부모 컴포넌트에서 더 이상 해당 컴포넌트를 사용하지 않아 삭제된 후 실행

class LinkButton extends React.Component {
    constructor(props) {
        super(props);

        this.state={
            linked : false,

        }

        //state 설정
        this.state={
            linked : false
        }
        //state 변경 부분
        this.setState({linked : true})
    }



}