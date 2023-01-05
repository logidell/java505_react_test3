import React from "react";

//컴포넌트 렌더링  막기 / 막아두기
// 리엑트에서 렌더링을 하고 싶지 않을 경우 null을 사용하자. 해당 부분이 아예 뿌려지지 않는다.
function warningBanner({warning}) {
    if (!warning) {
        return null;
    }
    return <div> warning!! </div>
}

export default warningBanner;