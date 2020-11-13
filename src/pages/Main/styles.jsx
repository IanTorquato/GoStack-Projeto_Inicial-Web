import styled, { css, keyframes } from 'styled-components'

const Container = styled.div`
	background-color: #fff;
	border-radius: 4px;
	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
	margin: 80px auto;
	max-width: 700px;
	padding: 30px;

	h1 {
		align-items: center;
		display: flex;
		font-size: 20px;

		svg {
			margin-right: 10px;
		}
	}
`

const Form = styled.form`
	display: flex;
	margin-top: 30px;

	input {
		border: 1px solid #eee;
		border-radius: 4px;
		flex: 1;
		font-size: 16px;
		padding: 10px 15px;
	}
`

const rotate = keyframes`
	from {
		transform: rotate(0deg)
	}
	to {
		transform: rotate(360deg)
	}
`

const SubmitButton = styled.button.attrs(props => ({
	type: 'submit',
	disabled: props.loading
}))
	`
	align-items: center;
	background-color: #7159c1;
	border: 0;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	margin-left: 10px;
	padding: 0 15px;

	&[disabled] {
		cursor: not-allowed;
		opacity: 0.6;
	}

	${props => props.loading && css`
		svg {
			animation :${rotate} 2s linear infinite
		}
	`}
`

const List = styled.ul`
	list-style: none;
	margin-top: 32px;


	li {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 16px 0;
	
		& + li {
			border-top: 1px solid #eee;
		}

		a {
			color: #7159c1;
			text-decoration: none;
		}
	}
`

export { Container, Form, SubmitButton, List }