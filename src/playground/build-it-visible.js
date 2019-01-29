class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisbility = this.handleToggleVisbility.bind(this);
        this.state = {
            visibility : false
        };
    }

    handleToggleVisbility(){
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }

    render(){
        return(
        <div>
        <button onClick={this.handleToggleVisbility}>{this.state.visibility ? 'Hide details' : 'Show Details'}</button>
        {this.state.visibility && (
            <div>
            <p>Show Details Here</p>
            </div>
        )}
        </div>
    )}
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const app = {
//     title: 'Visibility app',
//     subtitle: 'Hey! Theres some text here!'
// }

// let visibility = false;

// const toggle = () =>{
//     visibility = !visibility;
//     console.log('Show/Hide')
//     render();
// }
// const appRoot = document.getElementById('app');

// const render = () => {
//     const template = (
//         <div>
//         <h1>{app.title}</h1>
//         <button onClick={toggle}> {visibility ? 'hide details' : 'show details'}</button>
//         {/* {visibility ? '' : <p>{app.subtitle}</p>} another possible way */}
//         {visibility && (
//             <div>
//            <p>Hey. These are some details you can now see.</p>
//             </div>
//         )}
//         </div>
//     );
//     ReactDOM.render(template, appRoot);
// };

// render();


