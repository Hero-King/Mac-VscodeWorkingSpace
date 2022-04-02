import { designHeight } from '../const'
import { debounce } from '@/utils/'
export default {
    computed: {
        _xData() {
            return this.data.map((i) => i[this.xAxisKey])
        }
    },
    methods: {
        getFontSize(px) {
            return px / designHeight * window.innerHeight
        },
        resizeChart() {
            if (this.echartInstance) {
                if (this.initChart) {
                    this.initChart()
                }
                this.$nextTick(function () {
                    this.echartInstance.resize()
                    this.echartInstance.resize()
                })
            } else {
                console.warn("echartInstance not found");
            }
        }
    },
    mounted() {
        this.handleResize = debounce(this.resizeChart, 100)
        window.addEventListener('resize', this.handleResize)
    },
    beforeDestroy() {
        if (this.echartInstance) {
            this.echartInstance.dispose()
        }
        window.removeEventListener('resize', this.handleResize)
    },
    watch: {
        data: {
            deep: true,
            handler(v, oldV) {
                this.initChart();
            },
        },
    },
}