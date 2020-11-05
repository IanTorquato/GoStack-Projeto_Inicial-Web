import React, { Component } from 'react'
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa'

import api from '../../services/api'

import { Container, Form, SubmitButton } from './styles'

class Main extends Component {
	state = {
		newRepo: '',
		loading: false,
		repositories: []
	}

	handleSubmit = async event => {
		event.preventDefault()

		this.setState({ loading: true })

		const { newRepo, repositories } = this.state

		const response = await api.get(`/repos/${newRepo}`)

		const data = { name: response.data.full_name }

		this.setState({
			repositories: [...repositories, data],
			newRepo: '',
			loading: false
		})
	}

	render() {
		const { loading, newRepo } = this.state

		return (
			<Container>
				<h1><FaGithubAlt /> Repositórios</h1>

				<Form onSubmit={this.handleSubmit}>
					<input type="text" placeholder="Adicionar repositório" value={newRepo}
						onChange={event => this.setState({ newRepo: event.target.value })} />

					<SubmitButton loading={loading}>
						{loading ? <FaSpinner size={14} color="#fff" /> : <FaPlus size={14} color="#fff" />}
					</SubmitButton>
				</Form>
			</Container>
		)
	}
}

export default Main