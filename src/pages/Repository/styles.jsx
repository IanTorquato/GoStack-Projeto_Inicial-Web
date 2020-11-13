import styled from 'styled-components'

const Loading = styled.div`
	align-items: center;
	color: #fff;
	display: flex;
	font-size:32px;
	font-weight: bold;
	height: 100vh;
	justify-content: center;
`

const Owner = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;

	a {
		color: #7159c1;
		font-size: 16px;
		text-decoration: none;
	}

	img {
		border-radius: 50%;
		margin-top:20px;
		width: 120px;
	}

	h1 {
		font-size: 24px;
		margin-top: 10px;
	}

	p {
		color: #666;
		font-size: 14px;
		line-height: 1.4;
		max-width: 400px;
		text-align: center;
	}
`

export { Loading, Owner }