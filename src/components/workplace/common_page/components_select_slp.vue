<template>
 <!-- eslint-disable -->
    <!-- wrap -->
    <div id="wrap" class="colorCode2">

        <!-- container -->
        <div id="container">

            <slp-select placeholder="년도" width="100%" v-model="selected">
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
            </slp-select>

            <br/>
            <br/>

            <slp-select placeholder="년도" width="100%">
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
                <option>2020</option>
            </slp-select>

            <br/>
            <br/>

            <div>
                <slp-select placeholder="Select First name" width="33%">
                    <option
                        v-for="option in data"
                        :key="option.id"
                        :value="option.id">
                        {{ option.user.first_name }}
                    </option>
                </slp-select>

                <slp-select placeholder="Select Last name" width="33%">
                    <option
                        v-for="option in data"
                        :key="option.id"
                        :value="option.id">
                        {{ option.user.last_name }}
                    </option>
                </slp-select>

                <slp-select placeholder="Select Charactor" width="100%">
                    <optgroup label="Black Sails">
                        <option value="flint">Flint</option>
                        <option value="silver">Silver</option>
                        <option value="vane">Vane</option>
                        <option value="billy">Billy</option>
                        <option value="jack">Jack</option>
                    </optgroup>

                    <optgroup label="Breaking Bad">
                        <option value="heisenberg">Heisenberg</option>
                        <option value="jesse">Jesse</option>
                        <option value="saul">Saul</option>
                        <option value="mike">Mike</option>
                    </optgroup>

                    <optgroup label="Game of Thrones">
                        <option value="tyrion-lannister">Tyrion ㄴㅇㄻㄴㅇ ㄻㄴㅇㄹ ㅁㄴㅇ ㄻㄴㅇ ㅁㄴㅇ ㄻㄴㅇㄹ Lannister</option>
                        <option value="jamie-lannister">Jamie Lannister</option>
                        <option value="daenerys-targaryen">Daenerys Targaryen</option>
                        <option value="jon-snow">Jon Snow</option>
                    </optgroup>
                </slp-select>
            </div>

            <br/>
            <br/>

            <div class="birthInt">
                <slp-select placeholder="년도" error>
                    <option>2018</option>
                </slp-select>
                <slp-select placeholder="월" error>
                    <option>12</option>
                </slp-select>
                <slp-select placeholder="일" error>
                    <option>25</option>
                </slp-select>
                <p class="InfoChK-resultTxt err">생년월일을 선택해주세요.</p>
            </div>

            <div class="birthInt">
                <slp-select placeholder="년도">
                    <option>2018</option>
                </slp-select>
                <slp-select placeholder="월">
                    <option>12</option>
                </slp-select>
                <slp-select placeholder="일">
                    <option>25</option>
                </slp-select>
            </div>

        </div>
    </div>
    <!-- //wrap -->
</template>

<script>
export default {
  name: 'components_switch',
  /* vue lifecycle */
  created () {
  },
  mounted () {
  },
  /* vue data */
  data () {
    return {
      selected: 2019,
      data: [
        {'id': 1, 'user': {'first_name': 'Jesse', 'last_name': 'Simmons'}, 'date': '2016/10/15 13: 43: 27', 'gender': 'Male'},
        {'id': 2, 'user': {'first_name': 'John', 'last_name': 'Jacobs'}, 'date': '2016/12/15 06: 00: 53', 'gender': 'Male'},
        {'id': 3, 'user': {'first_name': 'Tina', 'last_name': 'Gilbert'}, 'date': '2016/04/26 06: 26: 28', 'gender': 'Female'},
        {'id': 4, 'user': {'first_name': 'Clarence', 'last_name': 'Flores'}, 'date': '2016/04/10 10: 28: 46', 'gender': 'Male'},
        {'id': 5, 'user': {'first_name': 'Anne', 'last_name': 'Lee'}, 'date': '2016/12/06 14: 38: 38', 'gender': 'Female'},
        {'id': 6, 'user': {'first_name': 'Sara', 'last_name': 'Armstrong'}, 'date': '2016/09/23 18: 50: 04', 'gender': 'Female'},
        {'id': 7, 'user': {'first_name': 'Anthony', 'last_name': 'Webb'}, 'date': '2016/08/30 23: 49: 38', 'gender': 'Male'},
        {'id': 8, 'user': {'first_name': 'Andrew', 'last_name': 'Greene'}, 'date': '2016/11/20 14: 57: 47', 'gender': 'Male'},
        {'id': 9, 'user': {'first_name': 'Russell', 'last_name': 'White'}, 'date': '2016/07/13 09: 29: 49', 'gender': 'Male'},
        {'id': 10, 'user': {'first_name': 'Lori', 'last_name': 'Hunter'}, 'date': '2016/12/09 01: 44: 05', 'gender': 'Female'}
      ]
    }
  },
  /* vue function */
  methods: {
  }
}
</script>
