
---
title: Vue.js 의 Life Cycle
description: Vue.js 의 Life Cycle
img: https://images.unsplash.com/photo-1580752300992-559f8e0734e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80
alt: nice image
author:
  name: eggplantiny
  bio: Hello, I'm Eggplantiny
  img: https://images.unsplash.com/photo-1533636721434-0e2d61030955?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80
tags:
  - web development
  - Vue.js
  - Vue
---

### beforeCreate

인스턴스가 방금 초기화 된 후 데이터 관찰 및 이벤트 / 감시자 설정 전에 동기적으로 호출 됩니다.

### created

인스턴스가 작성된 후 동기적으로 호출됩니다. 이 단계에서 인스턴스는 데이터 처리, 계산된 속성, 메서드, 감시/이벤트 콜백 등과 같은 옵션 처리를 완료합니다. 그러나 마운트가 시작되지 않았으므로 $el 속성을 아직 사용할 수 없습니다.

### beforeMount

마운트가 시작되기 바로 전에 호출됩니다. `render` 함수가 처음으로 호출 됩니다.

**이 훅은 서버측 렌더링 중 호출되지 않습니다**

### mounted

`el`이 새로 생성된 `vm.$el`로 대체된 인스턴스가 마운트 된 직후 호출됩니다. 루트 인스턴스가 문서 내의 엘리먼트에 마운트 되어 있으면, `mounted`가 호출 될 때 `vm.$el`도 문서 안에 있게 됩니다.

`mounted`는 모든 자식 컴포넌트가 마운트 된 상태를 보장하지 **않습니다**. `mounted` 내부에서 **[vm.$nextTick](https://kr.vuejs.org/v2/api/#vm-nextTick)**를 사용하면 전체가 렌더링된 상태를 보장합니다.

이 훅은 서버측 렌더링 중 호출되지 않습니다

### beforeUpdate

데이터가 변경되면, 가상 DOM 재 렌더링과 패치가 이뤄지기 전에 호출됩니다.이 훅에서 더 많은 상태 변경을 수행할 수 있으며 추가로 재 렌더링을 트리거하지 않습니다.

**이 훅은 서버측 렌더링 중 호출되지 않습니다**

### updated

데이터가 변경되어 가상 DOM이 재 렌더링되고 패치되면 호출됩니다.

이 훅이 호출되면 엘리먼트의 DOM이 업데이트 된 상태가 되어 이 훅에서 DOM 종속적인 연산을 할 수 있습니다. 그러나 대부분의 경우 무한루프가 발생할 수 있으므로 훅에서 상태를 변경하면 안됩니다. 상태 변화에 반응하기 위해서 **[계산된 속성](https://kr.vuejs.org/v2/api/#computed)** 또는 [감시자(#watch)를 사용하는 것이 더 좋습니다.

`updated`는 모든 자식 컴포넌트가 재-렌더링 된 상태를 보장하지 **않습니다**. `updated` 내부에서 **[vm.$nextTick](https://kr.vuejs.org/v2/api/#vm-nextTick)**를 사용하면 전체가 업데이트된 상태를 보장합니다.

### activated

keep-alive 인 컴포넌트가 활성화 될 때 호출됩니다.

**이 훅은 서버측 렌더링 중 호출되지 않습니다**

### deactivated

keep-alive인 컴포넌트가 비활성화 될 때 호출됩니다.

**이 훅은 서버측 렌더링 중 호출되지 않습니다**

### beforeDestroy

Vue 인스턴스가 제거되기 전에 호출됩니다. 이 단계에서 인스턴스는 아직 완벽하게 작동합니다.

**이 훅은 서버측 렌더링 중 호출되지 않습니다**

### destroyed

Vue 인스턴스가 제거된 후 호출됩니다. 이 훅이 호출되면 Vue 인스턴스의 모든 디렉티브가 바인딩 해제 되고 모든 이벤트 리스너가 제거되며 모든 하위 Vue 인스턴스도 삭제됩니다.

**이 훅은 서버측 렌더링 중 호출되지 않습니다**

### errorCaptured

자손 컴퍼넌트로부터의 에러가 캡처되었을 때에 불립니다. 오류를 트리거 한 컴포넌트 인스턴스 및 오류가 캡처된 위치에 대한 정보가 들어있는 문자열의 세 가지 전달인자를 받습니다. 훅은 false를 반환하여 오류가 더 전파되지 않도록 할 수 있습니다.
