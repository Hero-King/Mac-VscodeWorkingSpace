export default {
    data() {
        return {
            rateField: ["delivery_qty_rate", "delivery_cap_rate"],
        }
    },
    methods: {
        size(obj) {
            if (obj == null || typeof obj === 'undefined' || typeof obj === 'function') {
                return 0;
            } else if (Array.isArray(obj) || typeof obj === 'string') {
                return obj.length
            } else if (typeof obj === 'number') {
                return obj !== 0
            }
            return Object.keys(obj)
        },
        validParam() {
            let res = true;
            if (!this.size(this.param)) {
                return false
            }
            for (const key in this.param) {
                if (Object.hasOwnProperty.call(this.param, key)) {
                    if (this.notRequiredParam && this.notRequiredParam.has(key)) {
                        continue
                    }
                    const element = this.param[key];
                    if (this.size(element) < 1) {
                        res = false
                        console.log(key, 'size < 1');
                        break
                    }
                }
            }
            return res
        },
        parseAjaxData(data) {
            data.forEach((i) => {
                for (const key of this.rateField) {
                    if (i.hasOwnProperty(key)) {
                        i[key] = this.formatRate(i[key], 1);
                    } else {
                        // 处理接口返回数据缺失比例字段情况
                        i[key] = 0;
                    }
                }
            });
            return data;
        },
        formatRate(rateString = "", decimals = 2) {
            let res = null;
            res = (Number(rateString) * 100).toFixed(decimals);
            return isNaN(res) ? 0 : res;
        },
        formatNum(number) {
            return Math.round(number).toLocaleString()
        },
        filterDataToOther(data, key, reduceToOtherPercent = 5) {
            let totalNum = 0
            data.forEach(i => totalNum += i[key])
            const percentNum = totalNum * reduceToOtherPercent / 100
            let lessPart = [], lessPartTotal = 0, filterData = []
            data.forEach(i => {
                if (i[key] < percentNum) {
                    lessPartTotal += i[key]
                    lessPart.push(i)
                } else {
                    filterData.push(i)
                }
            })
            return [filterData, lessPart, lessPartTotal]
        }
    },

    filters: {
        parseNum(number) {
            if (typeof number == 'number') {
                return Math.round(number).toLocaleString()
            } else {
                return number
            }
        }
    }
}