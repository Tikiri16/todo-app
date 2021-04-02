import React from 'react';
import axios from 'axios';

export default class TodosList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            task: '',
            error: null
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    renderError() {
        if (!this.state.error) { return null; }

        return <div style={{ color: 'red' }}>{this.state.error}</div>;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Todo:</label>
                    <input
                        type="text"
                        onChange={this.handleChange}
                        placeholder="submit a task"
                        value={this.state.task}
                    />

                    <button type="submit">Submit</button>
                    {this.renderError()}
                </form>
            </div>
        );
    }

    handleChange(event) {
        event.preventDefault();

        const inputValue = event.target.value;
        const task = event.target.task;
        const validateInput = this.validateInput(inputValue);
        this.setState({
            [task]: inputValue,
        });
        console.log(this.state);

        if (validateInput) {
            this.setState({ error: validateInput });
            return;
        }

        this.setState({ error: null });
        this.props.createTask(task);
        this.event.target.value = '';
    }

    async handleSubmit(event) {
        event.preventDefault();
        const task = this.state.task;
        await axios.post(
            'https://kdp2eooeia.execute-api.us-east-2.amazonaws.com/default/serverlessAppFunction',
            { key1: `${task}` }
        );
    }

    validateInput(inputValue) {
        if (!inputValue) {
            return 'Please enter a task.';
        } else if (_.find(this.props.todos, todo => todo.task === inputValue)) {
            return 'Task already exists.';
        } else {
            return null;
        }
    }
}
