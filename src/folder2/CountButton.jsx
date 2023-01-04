import React from "react";
import {Button} from "react-bootstrap";



// class CountButton extends React.Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             count: 0
//         }
//         //클래스 멤버 변수 count 선언
//         this.count = this.state.count;
//     }
//
//     countUp = () => {
//         // this.setState({count : 0})
//
//         this.count = this.count + 1
//         this.setState({count:this.count})
//         //setState() 함수를 실행해야만 state  값이 수정이 되고, state 값이 수정되면 render 함수가 재실행된다.
//         console.log(" + this.count:" + this.count)
//     }
//
//     countDown = () => {
//         this.count = this.state.count - 1
//         this.setState({count:this.count})
//         console.log(" - this.count:" + this.count)
//     }
//
//     render() {
//         return (
//                 <div>
//                     <label className={"form-label"}>count : <span>{this.count}</span></label>
//                     <Button variant={"outline-primary"} onClick={this.countUp}> +</Button>
//                     <Button variant={"outline-success"} onClick={this.countDown}> -</Button>
//                 </div>
//         )
//     }
// }

class CountButton extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            count : 0,
        }
        this.count=this.state.count;
    }

    countUp = ()=>{

        this.count = this.count+1
        this.setState({count : this.count});
        console.log("+ 사용 후 this.count:" +this.count);
    }

    countDonw = () =>{

        this.count=this.count-1;
        this.setState({count:this.count});
        console.log("- 사용 후 this.count:"+this.count);
    };

    render() {
    return(
            <div>
                <label className={"form-lable"}>count : <span>{this.count}</span></label><br/>
                <Button variant={"primary"} onClick={this.countUp}> + </Button>
                <Button variant={"success"} onClick={this.countDonw}> + </Button>
            </div>
    )
    }
}
export default CountButton;