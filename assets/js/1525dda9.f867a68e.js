(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return u}));var a=t(3),i=t(7),c=(t(0),t(91)),r={title:"Tutorial"},b={type:"mdx",permalink:"/mint-sdk-js/Tutorial",source:"@site/src/pages/Tutorial.md"},o=[{value:"0.\u4e8b\u524d\u306b\u5fc5\u8981\u306a\u3053\u3068",id:"0\u4e8b\u524d\u306b\u5fc5\u8981\u306a\u3053\u3068",children:[]},{value:"1.\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",id:"1\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb",children:[]},{value:"2.SDK \u306e\u521d\u671f\u5316",id:"2sdk-\u306e\u521d\u671f\u5316",children:[]},{value:"3.Item \u306e\u53d6\u5f97",id:"3item-\u306e\u53d6\u5f97",children:[]},{value:"4.SendTxBidAuction",id:"4sendtxbidauction",children:[]},{value:"5.SendTxBuyAuction",id:"5sendtxbuyauction",children:[]}],d={toc:o};function u(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h1",{id:"mint-sdk-\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"},"Mint SDK \u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb"),Object(c.b)("p",null,"\u3053\u306e\u30c1\u30e5\u30fc\u30c8\u30ea\u30a2\u30eb\u3092\u7d42\u3048\u308b\u3068\u3001Rinkeby \u30cd\u30c3\u30c8\u30ef\u30fc\u30af\u3067\u306e NFT \u306e\u30aa\u30fc\u30af\u30b7\u30e7\u30f3\u53d6\u5f15\u3092\u4e00\u901a\u308a\u884c\u3046\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(c.b)("h2",{id:"0\u4e8b\u524d\u306b\u5fc5\u8981\u306a\u3053\u3068"},"0.\u4e8b\u524d\u306b\u5fc5\u8981\u306a\u3053\u3068"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Kyuzan Inc. \u306b\u554f\u3044\u5408\u308f\u305b\u3001\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u306e",Object(c.b)("inlineCode",{parentName:"li"},"access-token"),"\u3092\u53d6\u5f97\u3059\u308b"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"https://fortmatic.com/"},"Fortmatic"),"\u304b\u3089 Rinkeby \u7528\u306e\u30a2\u30af\u30bb\u30b9\u30c8\u30fc\u30af\u30f3\u3092\u53d6\u5f97\u3059\u308b"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"/docs/api#how-to-get-eth-for-rinkebytest-env"},"#how-to-get-eth-for-rinkebytest-env"),"\u3092\u53c2\u8003\u306b Rinkeby \u306e ETH \u3092\u53d6\u5f97\u3059\u308b")),Object(c.b)("h2",{id:"1\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"},"1.\u30d1\u30c3\u30b1\u30fc\u30b8\u306e\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-sh"},"% npm i @kyuzan/annapurna-sdk-js\n")),Object(c.b)("h2",{id:"2sdk-\u306e\u521d\u671f\u5316"},"2.SDK \u306e\u521d\u671f\u5316"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-typescript"},"import { AnnapurnaSDK } from '@kyuzan/annapurna-sdk-js'\nconst sdk = new AnnapurnaSDK({\n  'YOUR_ACCESS_KEY',\n  [4],\n  {\n    fortmatic: {\n      key: 'YOUR_FORTMATIC_KEY',\n    },\n  }\n})\n")),Object(c.b)("h2",{id:"3item-\u306e\u53d6\u5f97"},"3.Item \u306e\u53d6\u5f97"),Object(c.b)("p",null,"\u4ee5\u4e0b\u306e\u30e1\u30bd\u30c3\u30c9\u3067\u3001\u516c\u958b\u3055\u308c\u3066\u3044\u308b",Object(c.b)("inlineCode",{parentName:"p"},"Item"),"\u3092\u53d6\u5f97\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-jsx"},"const items = sdk.getItems()\n")),Object(c.b)("h2",{id:"4sendtxbidauction"},"4.SendTxBidAuction"),Object(c.b)("h2",{id:"5sendtxbuyauction"},"5.SendTxBuyAuction"))}u.isMDXComponent=!0}}]);