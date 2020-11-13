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

const IssueList = styled.ul`
	border-top: 1px solid #eee;
	list-style: none;
	margin-top: 30px;
	padding-top: 30px;

	li {
		border: 1px solid #eee;
		border-radius: 4px;
		display: flex;
		padding: 15px 10px;

		& + li {
			margin-top: 10px;
		}

		img {
			border: 1px solid #eee;
			border-radius: 50%;
			height: 36px;
			width: 36px;
		}

		div {
			flex: 1;
			margin-left: 15px;

			strong {
				font-size: 15px;

				a {
					color: #333;

					&:hover {
						color: #7159c1;
					}
				}

				span {
					background-color: #eee;
					border-radius: 2px;
					color: #333;
					font-size: 12px;
					font-weight: 600;
					height:20px;
					margin-left: 10px;
					padding: 3px 4px;
				}
			}
		}

		p {
			color: #999;
			font-size: 12px;
			margin-top: 5px;
		}
	}
`

export { Loading, Owner, IssueList }