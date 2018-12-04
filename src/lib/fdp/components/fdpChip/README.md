# Chip

> Chip

## Example
${PROJECT_ROOT}/src/_base/sample-page/chip-sample.vue

### script
``` js
import {Chip} from '@/_base/components/chip/Chip'
export default {
  components: {Chip}
}
```

### template
``` html
<chip chipLabel="칩" chipColor='background-color: blue;'></tag>
```

#### props
| Name             | Type      | required | Description                           |
|------------------|-----------|:--------:|---------------------------------------|
| chipLabel         | String    |true      |chip에 표기할 텍스트|
| chipColor         | String    |false     |style로 추가될 디자인 요소. css문법으로 작성 |

#### emit
@chip-close <br/>
 x버튼을 누르면 display:none 이 되며, 부모 화면으로 chip-close 를 emit 한다. <br/>
 추가적인 동작/데이터 변경이 필요한경우 이에 바인드 된 함수에서 처리
