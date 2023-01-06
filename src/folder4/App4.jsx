import React, {useContext} from "react";

const ThemeContext = React.createContext('light')
ThemeContext.displayName = "ThemeContext";
const UserContext = React.createContext({
    name: 'Guest'
})

function Layout(props) {
    return (
            <div>
                <SiderBar/>
                <Content/>
            </div>
    )

}

function SiderBar(props) {
    return <h1>side bar</h1>

}

function Content(props) {
    return (
            <div>
                <Profile/>
            </div>
    )

}

function Profile(props) {
    const theme = useContext(ThemeContext);
    const user = useContext(UserContext);


    return (
            <div>
                <h3>user : {user.name} </h3>
                <h3>Theme : {theme} </h3>
            </div>
    )
}


function App4(props) {
    // const {signedInUser, theme} = {signedInUser: {name: "감자"}, theme: 'dark'}
    //주석처리대로 사용해도 좋고 주석 해제된 것 사용해도 좋음.
    return (
            // <ThemeContext.Provider value={theme}>
            //     <UserContext.Provider value={signedInUser}>
            //         <Layout/>
            //     </UserContext.Provider>
            // </ThemeContext.Provider>

            <ThemeContext.Provider value={"blue"}>
                <UserContext.Provider value={{name: "왕감자"}}>
                    <Layout/>
                </UserContext.Provider>
            </ThemeContext.Provider>
    )
}

export default App4;