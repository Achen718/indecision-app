import React from 'react';
import AddOption from './AddOption';
import Options from './Options'
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };
    handleCloseModal = () => {
        this.setState(() => ({ selectedOption: undefined }))
    }
    handleDeleteOptions = () => {
        this.setState(() => ({
            options: []
        }));
    }
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }))
    }
    // if there's an option, first return, if not, 2nd return
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter Valid Value to Add Item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        // keeps previous "options and adds onto it"
        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options'); //localStorage.getItem('value')
            const options = JSON.parse(json);

            if (options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {

        }
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options); // our array options, turns object to string
            localStorage.setItem('options', json); // localStorage.setItem('name', 'value')
            console.log('saving data')
        }
    }
    componentWillUnmount() {
        console.log('componentWillUnmount')
    }
    render() {
        const subtitle = 'Put your life in the hands of a computer!!';

        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>

                </div>
                <OptionModal
                    selectedOption={this.state.selectedOption} // this.state ( object )
                    handleCloseModal={this.handleCloseModal} //this , referring to (handleCloseModal, then setState)
                />
            </div>
        );
    }
}