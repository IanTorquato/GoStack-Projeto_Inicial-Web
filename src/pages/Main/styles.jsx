import styled, { css, keyframes } from 'styled-components'

const Form = styled.form`
	display: flex;
	margin-top: 30px;
`

const InputRepository = styled.input`
		border: 1px solid #eee;
		border-radius: 4px;
		flex: 1;
		font-size: 16px;
		padding: 10px 15px;

		${({ error }) => error && css` border: 1px solid #f00 `}
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

export { Form, SubmitButton, List, InputRepository }