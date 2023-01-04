import React from "react";
import BoardItem from "./BoardItem";


const boardItemList = [
    {boardIdx: 100, boardId: "test1", boardTitle: "게시판 글 제목", boardCreateDate: "2023-01-03 12:40:01"},
    {boardIdx: 100, boardId: "test2", boardTitle: "게시판 글 제목", boardCreateDate: "2023-01-03 12:40:10"},
    {boardIdx: 100, boardId: "test3", boardTitle: "게시판 글 제목", boardCreateDate: "2023-01-03 12:41:01"}
]


function BoardList() {
    // boardItemList.map((item)=>{
    //     return <BoardItem idx={item.boardIdx} title={item.boardTitle} userId={item.boardId} createDt={item.boardCreateDate}/>
    // })

    return (
            <div className={"container mx-auto"}>
                <table className={"table table-hover table-striped "}>
                    <thead>
                    <tr>
                        <th>글 번호</th>
                        <th>글 제목</th>
                        <th>사용자</th>
                        <th>등록 시간</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boardItemList.map(
                            (item) => {
                                return <BoardItem idx={item.boardIdx} title={item.boardTitle} userId={item.boardId} createDt={item.boardCreateDate}/>
                            })}

                    {/*<BoardItem idx={"100"} title={"테스트 제목100"} userId={"test1"} createDt={"2023-01-03 12:40:01"}/>*/}
                    {/*<BoardItem idx={"101"} title={"테스트 제목101"} userId={"test2"} createDt={"2023-01-03 12:40:10"}/>*/}
                    {/*<BoardItem idx={"102"} title={"테스트 제목102"} userId={"test3"} createDt={"2023-01-03 12:41:01"}/>*/}
                    </tbody>
                </table>
            </div>
    )
}

export default BoardList;