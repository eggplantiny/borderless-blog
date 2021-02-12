---
title: Closure 를 이용한 순차적 비동기 구현
description: This is a description for the article about me
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: nice image
author:
name: Peter
bio: All about Peter and what he does and where he works
img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags:
- web development
---

우리는 발전하는 Javascript 덕에 수 없이 많은 구원을 받았다 믿고있다.

특히, 비동기 작업을 동기 작업처럼 다룰 수 있는 Async / Await 문법을 접하고 난 뒤로 개발하면서 막혀있던 한켠의 구멍이 뚫린듯한 느낌이 들었다. 그렇게 난 비동기의 고수가 된듯한 기분을 만끽하며 행복한 시간을 보낼줄 알았지만 개발을 진행하다가 한가지 문제에 봉착했다.

## 문제가 뭐야? 😨

가장 처음으로 막힌곳은 스크래핑 모듈을 만들면서 필요한 기능을 만들때였다. 스크래핑 작업을 할때 한번에 너무 많은 Request 를 서버에 날리게 되면 서버에 과부하를 줄 수 있다. 그렇게 되면 내 IP 는 차단이 될것이고 그럼 필요한 정보를 스크래핑 하는게 불가능하게 된다. 😭 그래서 한번에 스크래핑을 하는 갯수를 제한 후 모든 작업이 Settled 한 후 다음 목록에서 스크래핑 하는 코드를 작성해야 했다.

그런데, 여기서 Settled 란 무엇인가?
Promise 가 fulfilled 했다는 의미는 모든 비동기 작업을 성공적으로 이행했다는 의미이다.

```jsx
function success90percentPromise () {
	return new Promise((resolve, reject) => {
		const value = Math.random()
		if (value >= 0.1) {
			return resolve(value)
		}
		return reject(value)
	})
}

async function fulfilledPromises () {
	const promises = Array(10).fill(success90percentPromise())
	let result = []
	try {
		const promiseResult = await Promise.all(promises)
		result.push(...promiseResult)
	} catch (e) {
		console.error(e)
	}

	console.log(result)
}
```

## 코드

```jsx
function delay (ms = 1000) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

const dataList = [1, 2, 3, 4, 5]
// dataList 의 각 요소를 이용한 Promise Closure List 생성
const promiseList = dataList.map(data => {
	const ms = data * 500
	// 예제를 위한 Closure 구현
	return async () => {
		console.log(`${data} 번째 출력 : ${ms} ms초 대기.`)
		await delay(ms)
	}
})

// 순차적으로 Cromise Closure 를 실행
for await (const promise of promiseList) {
	await promise()
}

console.log('프로그램 종료 😉')
```

## 이걸 어디다 쓰냐 🤔

- 프로시져
- 우왕 ㅋ 굳 ㅋ
