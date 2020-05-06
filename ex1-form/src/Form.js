import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);

        this.initialState = {
            project: '',
            task: '',
            description: ''
        };

        this.state = this.initialState;
    }

    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }

    onFormSubmit = (event) => {
        event.preventDefault();

        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { project, task, description} = this.state;

        return (
            <form onSubmit={this.onFormSubmit}>
                <label for="project">Projeto</label>
                <input
                    type="text"
                    name="project"
                    id="project"
                    value={project}
                    onChange={this.handleChange} />
                <label for="task">Tarefa</label>
                <input
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={this.handleChange} />
                <label for="description">Descrição</label>
                <input
                    type="text"
                    name="description"
                    id="description"
                    value={description}
                    onChange={this.handleChange} />
                <button type="submit">
                    Salvar
                </button>
            </form>
        );
    }
}

export default Form;
