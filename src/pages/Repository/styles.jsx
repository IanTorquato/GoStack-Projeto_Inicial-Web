import styled from 'styled-components'

const Loading = styled.div`
	align-items: center;
	color: #fff;
	display: flex;
	font-size: 32px;
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
		margin-top: 16px;
		width: 112px;
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
	margin-top: 24px;
	padding-top: 24px;

	li {
		border: 1px solid #eee;
		border-radius: 4px;
		display: flex;
		padding: 12px 10px;

		& + li {
			margin-top: 8px;
		}

		img {
			border: 1px solid #eee;
			border-radius: 50%;
			height: 40px;
			width: 40px;
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

const IssueFilter = styled.div`
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  button {
    border: 0;
    border-radius: 4px;
    margin: 0 0.25rem;
    outline: 0;
    padding: 8px;

    &:nth-child(${props => props.active + 1}) {
      background: #576574;
      color: white;
    }
  }
`;

const PageActions = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: space-between;
  padding-top: 15px;

  button {
    border: 0;
    border-radius: 4px;
    outline: 0;
    padding: 8px;
    transition: opacity 0.25s ease-out;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.35;
    }
  }
`;

export { Loading, Owner, IssueList, IssueFilter, PageActions }