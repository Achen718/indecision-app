class Counter extends React.Component {
    state = {
            count: 0
    }
    componentDidMount= () => {
            const stringCount = localStorage.getItem('count');
            const count  = parseInt(stringCount, 10);
            
            if (!isNaN(count) ){
                this.setState(() => ({ count }))
            }
    }
    // Let's us know count has changed
    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count) // localStorage.setItem('name', 'value')
        }
    }     
    componentWillUnmount = () => {
        console.log('CWU')
    }
    // prevState is object before changes applied, ie: count : 0,
    handleAddOne = () => {
       this.setState((prevState) => {
           return {
               count: prevState.count + 1
           };
       });
    }
    handleMinusOne = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            };
        });
    }
    handleReset = () => {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddOne}>+1</button>
            <button onClick={this.handleMinusOne}>-1</button>
            <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
// // add function +1 button
// let count = 0;
// const addOne = () => {
//     count = count + 1;
//     renderCounterApp();
// };
// // minusOne function -1 button
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// };
// //  reset function Reset button
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>Reset</button>
//         </div>
//     );
//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();