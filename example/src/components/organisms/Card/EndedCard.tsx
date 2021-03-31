import styled from '@emotion/styled'
import React from 'react'
import { Card } from '../../atoms/Card'
import { color, font } from '../../../style'

type Props = {
	title: string
	onClick: () => any
}

export const EndedCard: React.FC<Props> = ({
	onClick,
	title
}) => {
	return (
		<Card onClick={onClick} title={title}>
			<StatusBar />
			<StatusContent>
				<StatusTitle>
					sold for
				</StatusTitle>
				<StatusValue>
					<Value>
							0.61
					</Value>
					<Unit>
							ETH
					</Unit>
				</StatusValue>
			</StatusContent>
			<StatusContent>
				<StatusTitle>
					end time
				</StatusTitle>
				<StatusValue>
					<Time>
						2021.10.18 12:10
					</Time>
				</StatusValue>
			</StatusContent>
		</Card>
	)
}

const StatusBar = styled.span`
	background: rgba(0, 0, 0, 0.14);
	width: 6px;
	height: 52px;
	border-radius: 3px;
`

const StatusContent = styled.div`
	background:  ${color.white};
	padding: 0px 24px 0px 8px;
`

const StatusTitle = styled.div`
	color: ${color.content.dark};
	${font.lg.label}
	padding: 0 10px 0 0;
`


const StatusValue = styled.div`
	width: 68px;
	height: 24px;
	${font.lg.h3}
	color: ${color.content.dark};
	margin: 9px 10px 0 0px;
	display: flex;
`

const Value = styled.div`
	width: 42px;
	height: 24px;
	display: flex;
	${font.lg.h3}
	color: ${color.content.dark};
`

const Unit = styled.div`
	width: 22px;
	height: 12px;
	${font.lg.unit}
	color: ${color.content.dark};
	margin: 6px 0 6px 0
`
const Time = styled.div`
	width: 118px;
	height: 20px;
	display: flex;
	${font.lg.article1}
	color: ${color.content.dark};
	display: table;
`
