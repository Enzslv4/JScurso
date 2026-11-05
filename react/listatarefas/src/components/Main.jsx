import React, { Component } from "react";

// Form
import {FaPlus} from "react-icons/fa"

// Form
import {FaEdit, FaWindowClose} from "react-icons/fa"

import './Main.css'

export default class Main extends Component {
    state = {
        novaTarefa: "",
        tarefas: [
            'Fazer Café',
            'Beber água',
            'Estudar'
        ],
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const {tarefas, index} = this.state
        let {novaTarefa} = this.state
        novaTarefa = novaTarefa.trim()

        if (tarefas.indexOf(novaTarefa) !== -1 ) return

        const novaTarefas = [...tarefas]

        if(index === -1) {
            this.setState({
                tarefas: [...novaTarefas, novaTarefa],
                novaTarefa: ''
            })
        } else {
            novaTarefas[index] = novaTarefa

            this.setState({
                tarefas: novaTarefas,
                index: -1,
                novaTarefa: ''
            })
        }

        
    }

    handleChange = (e) => {
        this.setState({
                novaTarefa: e.target.value
            })
    }

    handleEdit = (e, index) => {
        const {tarefas} = this.state
        this.setState({
            index,
            novaTarefa: tarefas[index]
        })
    }

    handleDelete = (e, index) => {
        const {tarefas} = this.state
        const novaTarefas = [...tarefas]
        novaTarefas.splice(index, 1)

        this.setState({
            tarefas: novaTarefas
        })
    }

    render() {
        const {novaTarefa, tarefas} = this.state

        return (
            <div className="main">
                <h1>Lista de tarefas</h1>

                <form onSubmit={this.handleSubmit} action="#" className="form">
                    <input onChange={this.handleChange} type="text" value={novaTarefa}/>
                    <button type="submit">
                        <FaPlus />
                    </button>
                </form>
                <ul className="tarefas">
                    {tarefas.map((tarefa, index) => (
                        <li key={tarefa}>
                            {tarefa}
                            <span>
                                <FaEdit onClick={(e) => this.handleEdit(e, index)} className="edit"/>
                                <FaWindowClose onClick={(e) => this.handleDelete(e, index)} className="delete"/>
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}