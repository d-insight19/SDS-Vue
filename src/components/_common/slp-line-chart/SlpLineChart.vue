<script>
import { Line, mixins } from 'vue-chartjs'
const { reactiveProp } = mixins

// chart인 경우, keepalive 활용 시 rendering 우선순위 이슈 존재
export default {
  name: 'SlpLineChart',
  extends: Line,
  mixins: [ reactiveProp ],
  props: ['options', 'dataChange'],
  data () {
    return {
    }
  },
  watch: {
    dataChange: function () {
      this.renderChart(this.chartData, this.options)
    }
  },
  mounted () {
    this.render()
  },
  activated () {
  },
  methods: {
    render: function () {
      this.renderChart(this.chartData, this.options)
    }
  }
}
</script>
