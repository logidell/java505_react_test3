import React from "react";


const students = [
    {id: 1, name: "Inje"},
    {id: 2, name: "Steven"},
    {id: 3, name: "Bill"},
    {id: 4, name: "Jeff"},
];
//리스트 : 비슷한 데이터를 모아둔 것
//Key : 1. 리엑트에서 각 객체나 아이템을 구분할 수 있는 고유의 값
//          구분할 수 있는 유일한 객체로 사용할 수 있게 key 값을 꼭 줘야 한다. 이때 id를 사용하게 되는데
//          id 라는 것 자체가 고유한 값이라는 의미이기 때문에 키 값으로 사용할 수 있다.

//      2. 리엑트에서는 해당 리스트 사이에서 엘리먼트를 구분할 수 있는 고유한 값이기만 하면 된다.
// == 키를 추가해야한다는 얘기.
function AttendanceBook() {
    return (
            <ul>
                {students.map((student) => {
                    return <li>{student.name}</li>;
                })}
            </ul>
    );
}

export default AttendanceBook;