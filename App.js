import React from 'react';

// state component
class App extends React.Component {
    render(){
        return <h1>Hello World!</h1>
    }
}

const App2 = () => <h1>Hello Guys</h1> //stateless component

// to put multiple elements, I wrap in parenthesis
class App3 extends React.Component {
    render(){
        return (
            <div>
                <h1>Hello World!</h1>
                <b>Bold</b>
            </div>
        )
    }
}
export default App3
