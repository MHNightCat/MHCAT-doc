---
id: music_lag
title: 音樂lag怎麼辦
---

## 簡單幾步幫助你不再lag:
 ### 1.確認你的網路沒問題
 **首先請先確認你的網路是否正常連線(我覺得這是幹話)**

 **不要跑到荒山野嶺然後說機器人lag**

 **那邊可能連基地台都沒有，所以，選擇好的網路很重要**

 **另外各家的網路公司也有可能會有關係**

 ### 2.變更語音頻道地區

**更改語音頻道地區**

**點頻道旁邊的齒輪(要先把鼠標放上去才會出現)**

![](https://media.discordapp.net/attachments/977960436685217832/988457340472799312/2022-06-20_225317.png)

**接著找到最下面的地區覆蓋**

![](https://media.discordapp.net/attachments/977960436685217832/988626104887705630/2022-06-21_100643.png)

**這個**

**接著點他一下選擇`Singapore`或是`Japan`**

![](https://media.discordapp.net/attachments/977960436685217832/988626554663870494/2022-06-21_100842.png)

**選擇完成後點擊`儲存變更`進行儲存** 

> 如果選擇完後依舊lag可以嘗試看看再換一個地區


 ### 3.選擇正確的機器人

**機器人的選擇可以說是非常重要的**

**機器人如果主機不好的話自然就會lag**

**但在Rythm這個大型機器人因為google的版權問題而停止後**

**各位或許可以考慮[MHCAT](https://dsc.gg/mhcat)**

## 解決自己的機器人卡頓

**如果你自己是機器人創作者**

**最常見的卡頓原因是因為硬體使用量爆滿**

**如果因為CPU或RAM使用量爆滿的話**

**可以考慮看看使用CPU與RAM監測**

**在爆滿的時候可以即時重啟**

**首先使用npm i把該下載都下載**

```
npm i os
npm i os-utils
```

**code**

```js
const os = require("os");
const cpuos = require("os-utils");
function round(num) {
    var m = Number((Math.abs(num) * 100).toPrecision(15));
    return Math.round(m) / 100 * Math.sign(num);
}
//ROUND的目的是取小數點後兩位
const totalRam = Math.round(os.totalmem() / 1024 / 1024);//總RAM
const usedRam = Math.round((os.totalmem() -os.freemem()) / 1024 / 1024);//RAM使用量
cpuos.cpuUsage((v) => {
const cpu_usage = `CPU使用量:${round(v) * 100}%`
//v可以查看cpu使用量我這邊已經使用round() * 100把他改成%數了
const RAM_usage = `RAM使用量:${usedRam}\\${totalRam}MB`
})
```

**直接複製整段就可以使用囉**

**有問題歡迎再來詢問我:P**

