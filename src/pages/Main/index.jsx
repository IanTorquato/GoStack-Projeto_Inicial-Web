import React, { Component } from 'react'
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'
import { Link } from 'react-router-dom'

import api from '../../services/api'

import Container from '../../components/Container'
import { Form, SubmitButton, List, InputRepository } from './styles'

class Main extends Component {
	state = {
		newRepo: '',
		loading: false,
		error: false,
		repositories: []
	}

	// Carregar dados do localStorage
	componentDidMount() {
		const repositories = localStorage.getItem('repositories')

		if (repositories) { this.setState({ repositories: JSON.parse(repositories) }) }
	}

	// Salvar dados do localStorage
	componentDidUpdate(_, prevState) {
		const { repositories } = this.state

		if (prevState.repositories !== repositories) { localStorage.setItem('repositories', JSON.stringify(repositories)) }
	}

	handleSubmit = async event => {
		event.preventDefault()

		try {
			this.setState({ loading: true })

			const { newRepo, repositories } = this.state

			const response = await api.get(newRepo)

			const data = { name: response.data.full_name }

			this.setState({
				repositories: [...repositories, data],
				newRepo: '',
				loading: false
			})
		} catch (error) {
			this.setState({ loading: false, newRepo: '', error: true })
		}
	}

	render() {
		const { loading, newRepo, repositories, error } = this.state

		return (
			<Container>
				<h1><FaGithubAlt /> Repositórios</h1>

				<Form onSubmit={this.handleSubmit}>
					<InputRepository type="text" placeholder="Adicionar repositório" value={newRepo} error={error} onFocus={() => this.setState({ error: false })}
						onChange={event => this.setState({ newRepo: event.target.value })} />

					<SubmitButton loading={loading ? true : undefined}>
						{loading ? <FaSpinner size={14} color="#fff" /> : <FaPlus size={14} color="#fff" />}
					</SubmitButton>
				</Form>

				<List>
					{repositories.map(({ name }) => (
						<li key={name}>
							<span>{name}</span>
							<Link to={`/repository/${encodeURIComponent(name)}`}>Detalhes</Link>
						</li>
					))}
				</List>
			</Container>
		)
	}
}

export default Main