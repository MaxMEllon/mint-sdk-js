import React from 'react'
import Countdown from 'react-countdown'
import styled from '@emotion/styled'
import { Item } from '@kyuzan/mint-sdk-js'
import { color, font } from '../../../style'

type LiveProps = {
  item?: Item
  onComplete: () => void
}

type FormattedProps = {
  total: number
  days: number
  hours: number
  minutes: number
  seconds: number
  milliseconds: number
  completed: boolean
  api: any
  props: any
  formatted: any
}

// Renderer callback with condition
const renderer = ({
  days,
  hours,
  minutes,
  seconds,
  completed,
}: FormattedProps) => {
  if (completed) {
    return <StatusValue>ended</StatusValue>
  } else {
    // Render a countdown
    return (
      <StatusValue>
        <Time>{days}</Time>
        <TimeUnit>d</TimeUnit>
        <Time>{hours}</Time>
        <TimeUnit>h</TimeUnit>
        <Time>{minutes}</Time>
        <TimeUnit>m</TimeUnit>
        <Time>{seconds}</Time>
        <TimeUnit>s</TimeUnit>
      </StatusValue>
    )
  }
}

export const LiveStatus: React.FC<LiveProps> = ({ item, onComplete }) => {
  const price = getPrice(item)
  return (
    <StatusContainer>
      <PriceContent>
        <StatusTitle>current bid</StatusTitle>
        <StatusValue>
          <Value>{price}</Value>
          <Unit>ETH</Unit>
        </StatusValue>
      </PriceContent>
      <TimeContent>
        <StatusTitle>ending in</StatusTitle>
        <Countdown
          date={item?.endAt ?? 0 - Date.now()}
          renderer={renderer}
          onComplete={onComplete}
        />
      </TimeContent>
    </StatusContainer>
  )
}

export const getPrice = (item?: Item) => {
  let price = item?.currentPrice || item?.initialPrice || 0
  if (price < 0.01) {
    price = 0.01
  } else {
    price = Math.round(price * 100) / 100
  }
  return price
}

export const StatusContainer = styled.div`
  margin-top: 32px;
  display: flex;
`

export const Time = styled.div`
  ${font.lg.h2}
  color: ${color.content.dark};
`

export const TimeUnit = styled.div`
  ${font.lg.label}
  color: ${color.content.dark};
  margin: 6px;
`

export const PriceContent = styled.div`
  background: ${color.white};
  padding: 0px 24px 0px 8px;
`

export const TimeContent = styled.div`
  background: ${color.white};
  padding: 0px 24px;
`

export const StatusTitle = styled.div`
  color: ${color.content.dark};
  ${font.lg.label}
  padding: 0 10px 0 0;
`

export const StatusValue = styled.div`
  ${font.lg.h2}
  color: ${color.content.dark};
  margin: 16px 0px;
  display: flex;
  align-items: center;
`

export const Value = styled.div`
  display: flex;
  ${font.lg.h2}
  color: ${color.content.dark};
`

export const Unit = styled.div`
  ${font.lg.unit}
  color: ${color.content.dark};
  justify-content: center;
  align-items: center;
  display: flex;
  margin-left: 4px;
`
