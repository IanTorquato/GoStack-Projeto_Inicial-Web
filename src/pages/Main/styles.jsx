import styled from 'styled-components'

export const Container = styled.div `
	background-color: #fff;
	border-radios: 4px;
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
export const Form = styled.form `
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
export const SubmitButton = styled.button.attrs({ type: 'submit' })
`
	align-items: center;
	background-color: #7159c1;
	border: 0;
	border-radius: 4px;
	display: flex;
	justify-content: center;
	margin-left: 10px;
	padding: 0 15px;
`