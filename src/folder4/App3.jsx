import React from "react";

//context.provide 두번 겹쳐 쓰기

const ThemeContext = React.createContext('light');
const UserContext = React.createContext({name: "Guest"})

function App3(props) {
    const {theme, signedInUser} = props;

    return (
            <ThemeContext.Provider value={theme}>
                <UserContext.Provider value={signedInUser}>
                    <Layout/>
                </UserContext.Provider>
            </ThemeContext.Provider>

    )
}

function Layout() {
    return (
            <div>

            </div>
    )
}

function ProfilePage(props) {
    //props로 데이터 넘겨주는 방식
    return (
            <div>

            </div>)
}

function Content() {
    //2개로 겹쳐 받음.
    return (
            <ThemeContext.Consumer>
                {theme => (
                        <UserContext.Consumer>
                            {user => (
                                    <ProfilePage user={user} theme={theme}/>
                            )}
                        </UserContext.Consumer>
                )}
            </ThemeContext.Consumer>
    )
}

export default App3;