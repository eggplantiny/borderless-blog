__NUXT_JSONP__("/articles/async_example", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai,aj,ak,al,am,an,ao,ap,aq,ar,as,at,au,av,aw,ax,ay,az,aA,aB,aC,aD,aE,aF,aG,aH,aI,aJ,aK,aL,aM,aN,aO,aP,aQ,aR,aS,aT,aU,aV,aW,aX,aY,aZ,a_,a$,ba,bb){return {data:[{doc:{slug:"async_example",description:W,title:W,img:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",alt:"nice image",author:{name:"eggplantiny",bio:"All about Peter and what he does and where he works",img:"https:\u002F\u002Fimages.unsplash.com\u002Fphoto-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80"},tags:["web development","javascript","promise","allSettlted"],toc:[{id:X,depth:H,text:Y},{id:Z,depth:H,text:_},{id:$,depth:H,text:aa},{id:ab,depth:H,text:ac}],body:{type:"root",children:[{type:b,tag:w,props:{},children:[{type:a,value:"우리는 발전하는 Javascript 덕에 수 없이 많은 구원을 받았다 믿고있다."}]},{type:a,value:i},{type:b,tag:w,props:{},children:[{type:a,value:"특히, 비동기 작업을 동기 작업처럼 다룰 수 있는 Async \u002F Await 문법을 접하고 난 뒤로 개발하면서 막혀있던 한켠의 구멍이 뚫린듯한 느낌이 들었다. 그렇게 난 비동기의 고수가 된듯한 기분을 만끽하며 행복한 시간을 보낼줄 알았지만 개발을 진행하다가 한가지 문제에 봉착했다."}]},{type:a,value:i},{type:b,tag:I,props:{id:X},children:[{type:b,tag:G,props:{href:"#%EB%AC%B8%EC%A0%9C%EA%B0%80-%EB%AD%90%EC%95%BC-",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:Y}]},{type:a,value:i},{type:b,tag:w,props:{},children:[{type:a,value:"가장 처음으로 막힌곳은 스크래핑 모듈을 만들면서 필요한 기능을 만들때였다. 스크래핑 작업을 할때 한번에 너무 많은 Request 를 서버에 날리게 되면 서버에 과부하를 줄 수 있다. 그렇게 되면 내 IP 는 차단이 될것이고 그럼 필요한 정보를 스크래핑 하는게 불가능하게 된다. 😭 그래서 한번에 스크래핑을 하는 갯수를 제한 후 모든 작업이 Settled 한 후 다음 목록에서 스크래핑 하는 코드를 작성해야 했다."}]},{type:a,value:i},{type:b,tag:I,props:{id:Z},children:[{type:b,tag:G,props:{href:"#%EC%9E%A0%EA%B9%90-%EA%B7%B8%EB%9F%B0%EB%8D%B0-%EC%97%AC%EA%B8%B0%EC%84%9C-settled-%EB%9E%80-%EB%AC%B4%EC%97%87%EC%9D%B8%EA%B0%80",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:_}]},{type:a,value:i},{type:b,tag:w,props:{},children:[{type:b,tag:A,props:{},children:[{type:a,value:"Promise 가 fulfilled 했다는 의미는 모든 비동기 작업을 성공적으로 이행했다는 의미"}]},{type:a,value:"이다.\r\n우리가 Promise.all 으로 모든 Promisefmf fulfilled 됬는지 확인을 하게된다면 "},{type:b,tag:A,props:{},children:[{type:a,value:"중간에 실패한 경우가 있을때는 아무것도 얻을 수 없을것"}]},{type:a,value:"이다."}]},{type:a,value:i},{type:b,tag:ad,props:{className:[ae]},children:[{type:b,tag:af,props:{className:[ag,ah]},children:[{type:b,tag:ai,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,l]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C,u]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:at}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ax}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ay}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C,u]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,l]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aI}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:aL}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C,u]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:"all"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,aP,l]},children:[{type:a,value:aQ}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:aS}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,z,u]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,aU]},children:[{type:b,tag:c,props:{className:[d,T,F]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aV}]},{type:b,tag:c,props:{className:[d,aW]},children:[{type:b,tag:c,props:{className:[d,V,e]},children:[{type:a,value:aX}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,V,e]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,T,F]},children:[{type:a,value:U}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,z,u]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ay}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:a$}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F error on 0.19315114789790266"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F []"}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:w,props:{},children:[{type:a,value:"위 코드는 80% 확률로 성공하는 함수를 Promise.all 을 이용해 10번의 결과를 받아내는 함수이다. 위 코드를 실행하면 높은 확률로 결과값은 \"빈 배열\" 이 나올것이다. 왜 그런것일까? "},{type:b,tag:G,props:{href:"https:\u002F\u002Fdeveloper.mozilla.org\u002Fko\u002Fdocs\u002FWeb\u002FJavaScript\u002FReference\u002FGlobal_Objects\u002FPromise\u002Fall",rel:["nofollow","noopener","noreferrer"],target:"_blank"},children:[{type:a,value:"MDN Javascript Promise"}]},{type:a,value:" 섹션을 살펴보면"}]},{type:a,value:i},{type:b,tag:"blockquote",props:{},children:[{type:a,value:i},{type:b,tag:w,props:{},children:[{type:a,value:"Promise.all() 메서드는 순회 가능한 객체에 주어진 모든 프로미스가 이행한 후, 혹은 프로미스가 주어지지 않았을 때 이행하는 Promise를 반환합니다. "},{type:b,tag:A,props:{},children:[{type:a,value:"주어진 프로미스 중 하나가 거부하는 경우, 첫 번째로 거절한 프로미스의 이유를 사용해 자신도 거부합니다."}]}]},{type:a,value:i}]},{type:a,value:i},{type:b,tag:w,props:{},children:[{type:a,value:"이와같이 "},{type:b,tag:A,props:{},children:[{type:a,value:"주어진 Promise 중 하나라도 Reject 되는 경우 모두 이행취소가 되어버리기 때문"}]},{type:a,value:"이다.\r\n스크래핑시 네트워크에러나 컨텐츠의 주소를 찾지 못하거나, 서버에서 내 요청을 거부해버리는 경우가 왕왕 발생하기 때문에 Promise.all 메서드로 한번에 묶에서 작업을 처리해버리면 한개 요청의 실패로 엮여있는 모든 Promise 가 실패해버리는 일이 꽤 자주 발생했다. 많은 Promise 들 중 하나가 실패하더라도 이행처리를 할 수 있는 방법은 없을까?"}]},{type:a,value:i},{type:b,tag:I,props:{id:$},children:[{type:b,tag:G,props:{href:"#%EA%B7%B8%EB%9F%BC-%EC%96%B4%EB%96%BB%EA%B2%8C-%ED%95%B4%EC%95%BC%ED%95%B4",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:aa}]},{type:a,value:i},{type:b,tag:w,props:{},children:[{type:a,value:"해답은 ES2020 추가된 새로운 기술인 Promise.allSettled 를 이용하면 된다. 적절한 버전의 클라이언트 (크롬기준 76v, Node.js 기준 12.9.0) 에서 위에서 선보인 예제 코드를 Promise.all 에서 Promise.allSettlted 로 변환시켜서 실행해보자."}]},{type:a,value:i},{type:b,tag:ad,props:{className:[ae]},children:[{type:b,tag:af,props:{className:[ag,ah]},children:[{type:b,tag:ai,props:{},children:[{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aj}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ak}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,u]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,al]},children:[{type:a,value:O},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:am}]},{type:a,value:an}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,l]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:ao},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C,u]},children:[{type:a,value:ap}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aq}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:ar}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:as},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:at}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:au}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:av},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:O}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:B}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aw}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:ax}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:k}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ba}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:az},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C,u]},children:[{type:a,value:aA}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aB}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aC}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,D]},children:[{type:a,value:aD}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aE}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,P,l]},children:[{type:a,value:Q}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:aF}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:aG},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aH}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:aI}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:aJ}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:x}]},{type:a,value:aK},{type:b,tag:c,props:{className:[d,l]},children:[{type:a,value:y}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:aL}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,C,u]},children:[{type:a,value:N}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:"allSettled"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:aM},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:aN},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aO}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,aP,l]},children:[{type:a,value:aQ}]},{type:a,value:aR},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j,p]},children:[{type:a,value:aS}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,z,u]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aT}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,aU]},children:[{type:b,tag:c,props:{className:[d,T,F]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,F]},children:[{type:a,value:aV}]},{type:b,tag:c,props:{className:[d,aW]},children:[{type:b,tag:c,props:{className:[d,V,e]},children:[{type:a,value:aX}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,V,e]},children:[{type:a,value:s}]}]},{type:b,tag:c,props:{className:[d,T,F]},children:[{type:a,value:U}]}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:o},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:aY},{type:b,tag:c,props:{className:[d,z,u]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:b,tag:c,props:{className:[d,q,k,r]},children:[{type:a,value:aZ}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:a_},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:ba}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:h}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:a$}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F ["}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'fulfilled', value: 0.4504557722909479 },"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'fulfilled', value: 0.680841653861421 },"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'rejected', reason: 0.11974379594422802 },"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'fulfilled', value: 0.23180419753039128 },"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'fulfilled', value: 0.5970437215433655 },"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'fulfilled', value: 0.9409583003192321 },"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'fulfilled', value: 0.519657245482521 },"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'rejected', reason: 0.1582887607787815 },"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'fulfilled', value: 0.6292244254606323 },"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F   { status: 'fulfilled', value: 0.24632426659463502 }"}]},{type:a,value:i},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"\u002F\u002F ]"}]},{type:a,value:i}]}]}]},{type:a,value:i},{type:b,tag:w,props:{},children:[{type:a,value:"실행을 해보면 위 결과값처럼 성공을하던 실패를 하던 무조건 일단 배열에 결과값을 담아주는걸 볼 수 있다. "},{type:b,tag:A,props:{},children:[{type:a,value:"성공했을 땐 status 가 'fulfilled', 실패했을 땐 'rejected'"}]},{type:a,value:" 인걸 확인할 수 있다."}]},{type:a,value:i},{type:b,tag:I,props:{id:ab},children:[{type:b,tag:G,props:{href:"#%EA%B2%B0%EB%A1%A0%EC%9D%80",ariaHidden:J,tabIndex:K},children:[{type:b,tag:c,props:{className:[L,M]},children:[]}]},{type:a,value:ac}]},{type:a,value:i},{type:b,tag:w,props:{},children:[{type:a,value:"이처럼 Promise.allSettled 를 이용한다면 다중의 Promise 를 동시에 처리하면서 모든 Promise 가 성공하길 기도하지 않아도 된다. 그렇다고 너무 Promise.allSettled 를 맹목적으로 믿고 사용하면 안된다. 아직 표준에 등제된지 얼마되지 않은 따끈따끈한 기능이라 "},{type:b,tag:A,props:{},children:[{type:a,value:"구형 브라우저나 Node.js 를 사용한다면 Pollyfil 를 따로 구현"}]},{type:a,value:" 해줘야하며 무엇보다 "},{type:b,tag:A,props:{},children:[{type:a,value:"Promise.all 의 상위호환이 아닌 편의성을 위해 구현된 기능이기 때문에 필요한 기능을 적절한 판단으로 적재적소에 사용하는게 좋다"}]},{type:a,value:n}]}]},dir:"\u002Farticles",path:"\u002Farticles\u002Fasync_example",extension:".md",createdAt:bb,updatedAt:bb},title:W,subtitle:void 0}],fetch:[],mutations:[]}}("text","element","span","token","punctuation"," ","(",")","\n","keyword","function","operator","comment",".","\n  ","control-flow","method","property-access","}","{","class-name","\n    ","p","const","=","console","strong","return","known-class-name","number","\n\n","string","a",2,"h2","true",-1,"icon","icon-link","Promise","resolve","arrow","=\u003E","value","e","template-punctuation","`","interpolation-punctuation","Promise.allSettled 가 필요한 순간","문제가-뭐야-","문제가 뭐야? 😨","잠깐-그런데-여기서-settled-란-무엇인가","잠깐, 그런데 여기서 Settled 란 무엇인가?","그럼-어떻게-해야해","그럼 어떻게 해야해?🤔","결론은","결론은?","div","nuxt-content-highlight","pre","language-jsx","line-numbers","code","success90percentPromise","new","parameter",","," reject"," value ","Math","random","if","value ","\u003E=","0.2","\n      ","reject","async","fulfilledPromises"," promises ","Array","10","fill","0","map","success80percentPromise"," result ","[","]","try"," promiseResult ","await","promises","\n    result","push","spread","...","promiseResult","catch","error","template-string","error on ","interpolation","${","\n\n  ","log","result","\u002F\u002F 결과값","allSettledPromises","2021-02-22T11:40:27.981Z")));