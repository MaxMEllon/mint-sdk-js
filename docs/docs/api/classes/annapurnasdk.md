---
id: "annapurnasdk"
title: "Class: AnnapurnaSDK"
sidebar_label: "AnnapurnaSDK"
custom_edit_url: null
hide_title: true
---

# Class: AnnapurnaSDK

## Properties

### getWalletInfo

• **getWalletInfo**: () => *Promise*<[*WalletInfo*](../modules.md#walletinfo)\>

ウォレットのアカウントと残高情報などの情報が取得できる

**Required**
- ウォレットに接続していること

**`returns`** 

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
await sdk.connectWallet()  // required
await sdk.getWalletInfo()
```

#### Type declaration:

▸ (): *Promise*<[*WalletInfo*](../modules.md#walletinfo)\>

**Returns:** *Promise*<[*WalletInfo*](../modules.md#walletinfo)\>

Defined in: [index.ts:257](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L257)

Defined in: [index.ts:257](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L257)

## Methods

### connectWallet

▸ **connectWallet**(): *Promise*<void\>

ウォレットに接続
MetamaskがインストールされているブラウザではMetamaskが、されていない場合はFortmaticに接続を行う
ウォレットが接続されるとResolveされる
ウォレット接続をキャンセルした場合は、Rejectされる

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
await sdk.isWalletConnect() // false
await sdk.connectWallet()
await sdk.isWalletConnect()  // true
```

**Returns:** *Promise*<void\>

Defined in: [index.ts:213](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L213)

___

### disconnectWallet

▸ **disconnectWallet**(): *Promise*<void\>

ウォレットから切断
Fortmaticの場合、切断される
**MetaMaskが接続されている場合は何も実行されない**

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'

const sdk = await AnnapurnaSDK.initialize(...)
await sdk.disconnectWallet()
```

**Returns:** *Promise*<void\>

Defined in: [index.ts:237](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L237)

___

### getItemById

▸ **getItemById**(`itemId`: *string*): *Promise*<[*Item*](../modules.md#item)\>

ItemのitemId指定でアイテムを取得

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`itemId` | *string* | [Item](../modules.md#item)のitemId   |

**Returns:** *Promise*<[*Item*](../modules.md#item)\>

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
const item = await sdk.getItemById('item.itemId')
```

Defined in: [index.ts:381](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L381)

___

### getItemLogs

▸ **getItemLogs**(`itemId`: *string*, `paging?`: { `page`: *number* = 1; `perPage`: *number* = 30 }): *Promise*<[*ItemLog*](../modules.md#itemlog)[]\>

アイテムの履歴(bidされた、買われた)の取得
最新の物から返される

#### Parameters:

Name | Type | Default value | Description |
:------ | :------ | :------ | :------ |
`itemId` | *string* | - | [Item](../modules.md#item)のitemId   |
`paging` | *object* | - | - |
`paging.page` | *number* | 1 | - |
`paging.perPage` | *number* | 30 | - |

**Returns:** *Promise*<[*ItemLog*](../modules.md#itemlog)[]\>

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'

const sdk = await AnnapurnaSDK.initialize(...)
const item = await sdk.getItemLogs('Item.itemId')
```

Defined in: [index.ts:401](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L401)

___

### getItems

▸ **getItems**(`__namedParameters?`: { `page`: *number* ; `perPage`: *number*  }): *Promise*<[*Item*](../modules.md#item)[]\>

公開中のアイテムを取得

#### Parameters:

Name | Type |
:------ | :------ |
`__namedParameters` | *object* |
`__namedParameters.page` | *number* |
`__namedParameters.perPage` | *number* |

**Returns:** *Promise*<[*Item*](../modules.md#item)[]\>

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'

const sdk = await AnnapurnaSDK.initialize(...)
const items = await sdk.getItems()
```

Defined in: [index.ts:326](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L326)

___

### getItemsByBidderAddress

▸ **getItemsByBidderAddress**(`address`: *string*): *Promise*<[*Item*](../modules.md#item)[]\>

指定したアドレスがBidしたItemの一覧を取得

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | ウォレットのアドレス   |

**Returns:** *Promise*<[*Item*](../modules.md#item)[]\>

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
const item = await sdk.getItemsByBidderAddress('0x1111......')
```

Defined in: [index.ts:358](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L358)

___

### getServerUnixTime

▸ **getServerUnixTime**(): *Promise*<any\>

サーバーのUnixタイムを取得

**Returns:** *Promise*<any\>

unix time (ms)

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'

const sdk = AnnapurnaSDK.initialize(...)
await	sdk.connectWallet()
await sdk.getServerUnixTime()  // ex) 1615444120104
```

Defined in: [index.ts:730](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L730)

___

### getTokensByAddress

▸ **getTokensByAddress**(`address`: *string*): *Promise*<[*Token*](../modules.md#token)[]\>

指定したアドレスが所持しているMINT経由で獲得したトークンを取得

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`address` | *string* | Walletのアドレス   |

**Returns:** *Promise*<[*Token*](../modules.md#token)[]\>

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...
const tokens = await sdk.getTokensByAddress('0x11111...')
```

Defined in: [index.ts:438](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L438)

___

### isInjectedWallet

▸ **isInjectedWallet**(): *boolean*

MetaMaskかどうかを判定

**Returns:** *boolean*

trueならばMetaMask

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'

const sdk = AnnapurnaSDK.initialize(...)
await sdk.isInjectedWallet() // true
```

Defined in: [index.ts:747](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L747)

___

### isWalletConnect

▸ **isWalletConnect**(): *Promise*<any\>

有効なアカウントがあるの状態を返す

**Returns:** *Promise*<any\>

ウォレットが接続されていればtrue

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'

const sdk = await AnnapurnaSDK.initialize(...)
await sdk.isWalletConnect()
```

Defined in: [index.ts:190](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L190)

___

### onAccountsChange

▸ **onAccountsChange**(`callback`: (`accounts`: *string*[]) => *any*): *void*

アカウントが変更された際に呼び出される関数を設定できる

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | (`accounts`: *string*[]) => *any* |

**Returns:** *void*

void

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
sdk.onAccountsChange((accounts: string[]) => {
   // some thing
})
```

Defined in: [index.ts:632](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L632)

___

### onConnect

▸ **onConnect**(`callback`: () => *any*): *void*

ウォレットに接続した際に呼び出される関数を設定できる

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | () => *any* |

**Returns:** *void*

void

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
sdk.onConnect(() => {
   // some thing
})
```

Defined in: [index.ts:665](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L665)

___

### onDisconnect

▸ **onDisconnect**(`callback`: () => *any*): *void*

ウォレットから切断した際に呼び出される関数を設定できる

#### Parameters:

Name | Type |
:------ | :------ |
`callback` | () => *any* |

**Returns:** *void*

void

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
sdk.onDisconnect(() => {
   // some thing
})
```

Defined in: [index.ts:698](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L698)

___

### sendTxBid

▸ **sendTxBid**(`itemId`: *string*, `bidPrice`: *number*): *Promise*<TransactionResponse\>

指定した金額でBidするトランザクションを発行
Bidする謹賀具の総額を`bidPrice`に指定する

**Required**
- ウォレットに接続していること

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`itemId` | *string* | [Item](../modules.md#item)のitemId   |
`bidPrice` | *number* | 単位はether   |

**Returns:** *Promise*<TransactionResponse\>

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
await sdk.connectWallet() // required
try {
 const tx = await sdk.sendTxBid('item.itemId', 2)
 // show loading
 await tx.wait()
 // success transaction
} catch (err) {
 // display error message
}
```

Defined in: [index.ts:470](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L470)

___

### sendTxBuyItem

▸ **sendTxBuyItem**(`itemId`: *string*): *Promise*<TransactionResponse\>

FixedPriceのアイテムを購入するトランザクションを発行

**Required**
- ウォレットに接続していること

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`itemId` | *string* | [Item](../modules.md#item)のitemId   |

**Returns:** *Promise*<TransactionResponse\>

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
await sdk.connectWallet() // required
try {
 const tx = await sdk.sendTxBuyItem('item.itemId')
 // show loading
 await tx.wait()
 // success transaction
} catch (err) {
 // display error message
}
```

Defined in: [index.ts:586](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L586)

___

### sendTxMakeSuccessfulBid

▸ **sendTxMakeSuccessfulBid**(`itemId`: *string*): *Promise*<TransactionResponse\>

オークションで勝利したアイテムを引き出すトランザクションを発行

**Required**
- ウォレットに接続していること

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`itemId` | *string* | [Item](../modules.md#item)のitemId   |

**Returns:** *Promise*<TransactionResponse\>

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
const sdk = await AnnapurnaSDK.initialize(...)
await sdk.connectWallet() // required
try {
 const tx = await sdk.sendTxMakeSuccessfulBid('item.itemId')
 // show loading
 await tx.wait()
 // success transaction
} catch (err) {
 // display error message
}
```

Defined in: [index.ts:532](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L532)

___

### waitForTransaction

▸ **waitForTransaction**(`txHash`: *string*): *Promise*<void\>

Transactionが成功するとResolveするPromiseを返します

**Required**
- ウォレットに接続していること

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`txHash` | *string* | {@link ethers.providers.TransactionResponse}のhashプロパティ  ```typescript import { AnnapurnaSDK } from '@kyuzan/annapurna' const sdk = await AnnapurnaSDK.initialize(...) await sdk.connectWallet() // required try {  const tx = await sdk.sendTxBuyItem('item.itemId')  await tx.wait()  // success transaction } catch (err) {  // display error message } ```    |

**Returns:** *Promise*<void\>

Defined in: [index.ts:306](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L306)

___

### formatEther

▸ `Static`**formatEther**(`bg`: *BigNumber*): *string*

BigNumberをether(通常のETHと表示される価格)にフォーマットして返す

#### Parameters:

Name | Type |
:------ | :------ |
`bg` | *BigNumber* |

**Returns:** *string*

Ether単位でパースされたstring

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'

const sdk = await AnnapurnaSDK.initialize(...)
await sdk.connectWallet()  // required
const walletInfo = await sdk.getWalletInfo()
AnnapurnaSDK.formatEther(walletInfo.balance) // 3.2
```

Defined in: [index.ts:50](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L50)

___

### initialize

▸ `Static`**initialize**(`accessToken`: *string*, `networkId`: [*NetworkId*](../modules.md#networkid), `walletSetting`: [*WalletSetting*](../modules.md#walletsetting), `devOption?`: { `backendUrl?`: *string* ; `contractMintAbi?`: *any* ; `contractMintShopAddress?`: *string* ; `jsonRPCUrl?`: *string*  }): *Promise*<[*AnnapurnaSDK*](annapurnasdk.md)\>

sdkのイシャライズ

#### Parameters:

Name | Type |
:------ | :------ |
`accessToken` | *string* |
`networkId` | [*NetworkId*](../modules.md#networkid) |
`walletSetting` | [*WalletSetting*](../modules.md#walletsetting) |
`devOption?` | *object* |
`devOption.backendUrl?` | *string* |
`devOption.contractMintAbi?` | *any* |
`devOption.contractMintShopAddress?` | *string* |
`devOption.jsonRPCUrl?` | *string* |

**Returns:** *Promise*<[*AnnapurnaSDK*](annapurnasdk.md)\>

sdkのインスタンス

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'
await AnnapurnaSDK.initialize(YOUR PROJECT ID, YOUR ACCESS TOKEN, { fortmatic: { token: YOUR FORTMATIC TOKEN } })
```

Defined in: [index.ts:111](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L111)

___

### parseEther

▸ `Static`**parseEther**(`ether`: *string*): *BigNumber*

ether(通常のETHと表示される価格)をBigNumberとして返す

#### Parameters:

Name | Type | Description |
:------ | :------ | :------ |
`ether` | *string* | 通常のETHと表示されるもの   |

**Returns:** *BigNumber*

etherをBigNumberとしてparseしたもの

```typescript
import { AnnapurnaSDK } from '@kyuzan/annapurna'

AnnapurnaSDK.parseEther('3.2') // BigNumber
```

Defined in: [index.ts:31](https://github.com/KyuzanInc/annapurna-sdk-js/blob/1721c9f/src/index.ts#L31)