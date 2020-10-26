import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            input: ''
        }
    }

    handleChanges = event => {
        this.setState({
            input:event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleAddTodo(this.state.input);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input value={this.state.input} onChange={this.handleChanges} type='text' name='todo' />
                <button>Add</button>
            </form>
        );
    }
}

export default TodoForm;