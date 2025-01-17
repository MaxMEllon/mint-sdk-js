import { Item } from '@kyuzan/mint-sdk-js'
import React from 'react'
import { Card } from '.'
import { AuctionInfo } from '../AuctionInfo'

type Props = {
  item: Item
}

export const EndedCard: React.FC<Props> = ({ item }) => {
  return (
    <Card
      href={`/items/${item.itemId}`}
      title={item.name}
      media={item.imageURIHTTP}
      withPhysicalProduct={item.type === 'nftWithPhysicalProduct'}
    >
      <AuctionInfo item={item} />
    </Card>
  )
}
