console.log('App.js is running!');

// JSX JavaScript XML - js extension
const context = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    // stops full page refresh

    const option = e.target.elements.option.value;

    if (option){
        context.options.push(option);
        e.target.elements.option.value = '';
        // e.target , targets element event started on
        // .elements, access to elements on form .option, under name
        // e.target.elements.nameOfInput

        render();
        // calls render after value input in form
    }
};

const removeAll = () => {
    context.options = [];
    render();
}

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * context.options.length);
    const option = context.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
// render function, renders new jsx ( renderContextApp )

const render = () => {
const template = (
    <div>
        <h1>{context.title}</h1>
       {context.subtitle && <p>{context.subtitle}</p>}
        <p>{context.options.length > 0 ? 'Here are your options' : 'No Options'}</p>
        <p>{context.options.length}</p>
        <button disabled={context.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
        <ol>
        {context.options.map((option) => <li key={option}>Option: {option}</li>)}
        </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"/>
        <button>Add Options</button>
        </form>
    </div>
);
ReactDOM.render(template, appRoot);
};

// initializes app
render();