// echarts 使用步骤：
// 1. 导入对象，可以html scripts标签导入全局对象  可以npm install 安装
// 2. 初始化有大小的盒子  一定要有大小！！！
// 3. 初始化echarts实例对象 执行init方法即可
// 4. 指定配置项和数据
// 5. 配置项给echarts实例对象  mychart.resize()方法自适应屏幕大小

// 注意事项： 如果需要使用中国地图，需要引入china.js文件  如果echarts官网案例不足以满足需求，可以去社区： gallery.echartsjs.com

import echarts from 'echarts'
import 'echarts-gl';
import '../node_modules/echarts/map/js/world.js'
// import * as d3counter from 'd3-contour'
// import * as d3geo from 'd3-geo'
// import * as d3timer from 'd3-timer'

// const d3 = {}
// Object.assign(d3, d3counter, d3geo, d3timer)
// console.log(d3);

var myChart = echarts.init(document.getElementById('echarts'));
// console.log('www')
// 绘制图表

var canvas = document.createElement('canvas');
var mapChart = echarts.init(canvas, null, {
    width: 4096, height: 2048
});

var nameMap = {
    'Afghanistan': '阿富汗',
    'Angola': '安哥拉',
    'Albania': '阿尔巴尼亚',
    'United Arab Emirates': '阿联酋',
    'Argentina': '阿根廷',
    'Armenia': '亚美尼亚',
    'French Southern and Antarctic Lands': '法属南半球和南极领地',
    'Australia': '澳大利亚',
    'Austria': '奥地利',
    'Azerbaijan': '阿塞拜疆',
    'Burundi': '布隆迪',
    'Belgium': '比利时',
    'Benin': '贝宁',
    'Burkina Faso': '布基纳法索',
    'Bangladesh': '孟加拉国',
    'Bulgaria': '保加利亚',
    'The Bahamas': '巴哈马',
    'Bosnia and Herzegovina': '波斯尼亚和黑塞哥维那',
    'Belarus': '白俄罗斯',
    'Belize': '伯利兹',
    'Bermuda': '百慕大',
    'Bolivia': '玻利维亚',
    'Brazil': '巴西',
    'Brunei': '文莱',
    'Bhutan': '不丹',
    'Botswana': '博茨瓦纳',
    'Central African Republic': '中非共和国',
    'Canada': '加拿大',
    'Switzerland': '瑞士',
    'Chile': '智利',
    'China': '中国',
    'Ivory Coast': '象牙海岸',
    'Cameroon': '喀麦隆',
    'Democratic Republic of the Congo': '刚果民主共和国',
    'Republic of the Congo': '刚果共和国',
    'Colombia': '哥伦比亚',
    'Costa Rica': '哥斯达黎加',
    'Cuba': '古巴',
    'Northern Cyprus': '北塞浦路斯',
    'Cyprus': '塞浦路斯',
    'Czech Republic': '捷克共和国',
    'Germany': '德国',
    'Djibouti': '吉布提',
    'Denmark': '丹麦',
    'Dominican Republic': '多明尼加共和国',
    'Algeria': '阿尔及利亚',
    'Ecuador': '厄瓜多尔',
    'Egypt': '埃及',
    'Eritrea': '厄立特里亚',
    'Spain': '西班牙',
    'Estonia': '爱沙尼亚',
    'Ethiopia': '埃塞俄比亚',
    'Finland': '芬兰',
    'Fiji': '斐',
    'Falkland Islands': '福克兰群岛',
    'France': '法国',
    'Gabon': '加蓬',
    'United Kingdom': '英国',
    'Georgia': '格鲁吉亚',
    'Ghana': '加纳',
    'Guinea': '几内亚',
    'Gambia': '冈比亚',
    'Guinea Bissau': '几内亚比绍',
    'Equatorial Guinea': '赤道几内亚',
    'Greece': '希腊',
    'Greenland': '格陵兰',
    'Guatemala': '危地马拉',
    'French Guiana': '法属圭亚那',
    'Guyana': '圭亚那',
    'Honduras': '洪都拉斯',
    'Croatia': '克罗地亚',
    'Haiti': '海地',
    'Hungary': '匈牙利',
    'Indonesia': '印尼',
    'India': '印度',
    'Ireland': '爱尔兰',
    'Iran': '伊朗',
    'Iraq': '伊拉克',
    'Iceland': '冰岛',
    'Israel': '以色列',
    'Italy': '意大利',
    'Jamaica': '牙买加',
    'Jordan': '约旦',
    'Japan': '日本',
    'Kazakhstan': '哈萨克斯坦',
    'Kenya': '肯尼亚',
    'Kyrgyzstan': '吉尔吉斯斯坦',
    'Cambodia': '柬埔寨',
    'South Korea': '韩国',
    'Kosovo': '科索沃',
    'Kuwait': '科威特',
    'Laos': '老挝',
    'Lebanon': '黎巴嫩',
    'Liberia': '利比里亚',
    'Libya': '利比亚',
    'Sri Lanka': '斯里兰卡',
    'Lesotho': '莱索托',
    'Lithuania': '立陶宛',
    'Luxembourg': '卢森堡',
    'Latvia': '拉脱维亚',
    'Morocco': '摩洛哥',
    'Moldova': '摩尔多瓦',
    'Madagascar': '马达加斯加',
    'Mexico': '墨西哥',
    'Macedonia': '马其顿',
    'Mali': '马里',
    'Myanmar': '缅甸',
    'Montenegro': '黑山',
    'Mongolia': '蒙古',
    'Mozambique': '莫桑比克',
    'Mauritania': '毛里塔尼亚',
    'Malawi': '马拉维',
    'Malaysia': '马来西亚',
    'Namibia': '纳米比亚',
    'New Caledonia': '新喀里多尼亚',
    'Niger': '尼日尔',
    'Nigeria': '尼日利亚',
    'Nicaragua': '尼加拉瓜',
    'Netherlands': '荷兰',
    'Norway': '挪威',
    'Nepal': '尼泊尔',
    'New Zealand': '新西兰',
    'Oman': '阿曼',
    'Pakistan': '巴基斯坦',
    'Panama': '巴拿马',
    'Peru': '秘鲁',
    'Philippines': '菲律宾',
    'Papua New Guinea': '巴布亚新几内亚',
    'Poland': '波兰',
    'Puerto Rico': '波多黎各',
    'North Korea': '北朝鲜',
    'Portugal': '葡萄牙',
    'Paraguay': '巴拉圭',
    'Qatar': '卡塔尔',
    'Romania': '罗马尼亚',
    'Russia': '俄罗斯',
    'Rwanda': '卢旺达',
    'Western Sahara': '西撒哈拉',
    'Saudi Arabia': '沙特阿拉伯',
    'Sudan': '苏丹',
    'South Sudan': '南苏丹',
    'Senegal': '塞内加尔',
    'Solomon Islands': '所罗门群岛',
    'Sierra Leone': '塞拉利昂',
    'El Salvador': '萨尔瓦多',
    'Somaliland': '索马里兰',
    'Somalia': '索马里',
    'Republic of Serbia': '塞尔维亚共和国',
    'Suriname': '苏里南',
    'Slovakia': '斯洛伐克',
    'Slovenia': '斯洛文尼亚',
    'Sweden': '瑞典',
    'Swaziland': '斯威士兰',
    'Syria': '叙利亚',
    'Chad': '乍得',
    'Togo': '多哥',
    'Thailand': '泰国',
    'Tajikistan': '塔吉克斯坦',
    'Turkmenistan': '土库曼斯坦',
    'East Timor': '东帝汶',
    'Trinidad and Tobago': '特里尼达和多巴哥',
    'Tunisia': '突尼斯',
    'Turkey': '土耳其',
    'United Republic of Tanzania': '坦桑尼亚联合共和国',
    'Uganda': '乌干达',
    'Ukraine': '乌克兰',
    'Uruguay': '乌拉圭',
    'United States of America': '美国',
    'Uzbekistan': '乌兹别克斯坦',
    'Venezuela': '委内瑞拉',
    'Vietnam': '越南',
    'Vanuatu': '瓦努阿图',
    'West Bank': '西岸',
    'Yemen': '也门',
    'South Africa': '南非',
    'Zambia': '赞比亚',
    'Zimbabwe': '津巴布韦'
};
mapChart.setOption({

    // 和 series 中的type : map 一样的效果
    geo: {
    },
    legend: {
        orient: "vertical"
    },
    visualMap: {
        min: 1,
        max: 4,
        splitNumber: 4,
        color: ['#d94e5d', '#eac736', '#50a3ba'],
        textStyle: {
            color: '#fff'
        }
    },
    series: [{
        type: "map",
        map: 'world',
        roam: true, //平移和缩放
        zoom: 1, // 当前视角的缩放比例
        nameMap: nameMap,// 自定义地区的名称映射 英文到中文
        label: {
            fontSize: 12,

        },
        itemStyle: {
            areaColor: 'transparent',
            borderColor: '#00FDFF',
        },
        emphasis: {
            areaColor: 'transparent'
        },
        regions: [
            {
                name: "南海诸岛",
                value: 0,
                itemStyle: {
                    normal: {
                        opacity: 0,
                        label: {
                            show: false
                        }
                    }
                }
            }
        ],
    
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        boundingCoords: [ // 二维数组，定义定位的左上角以及右下角分别所对应的经纬度
            [-180, 90],
            [180, -90]
        ]
    }]
});

mapChart.on("click", (e) => { console.log(e); })
let option = {
    backgroundColor: '#000',
    visualMap: [{
        show: true,
        type: 'piecewise',
        categories: ['中国', '重度污染', '中度污染', '轻度污染', '良', '优'],
        text: ['scatter3D'],
        textStyle: {
            color: '#fff'
        },
        calculable: true,
        max: 3000,
        // inRange: {
        //     color: ['#87aa66', '#eba438', '#d94d4c'],
        //     symbolSize: [8, 30]
        // }
    }],
    globe: {
        baseTexture: '../images/earth.jpg',
        heightTexture: '../images/bathymetry_bw_composite_4k.jpg',

        displacementScale: 0.04,

        shading: 'lambert',

        environment: '../images/starfield.jpg',
        light: { // 光照阴影
            main: {
                color: '#fff', // 光照颜色
                intensity: 1.2, // 光照强度
                shadow: false, // 是否显示阴影
                alpha: 40,
                beta: -30
            },
            ambient: {
                intensity: 0.5
            }
        },
        viewControl: {
            projection: 'perspective',
            alpha: 90,
            beta: 0,
            center: [0, 50, 0], // 视角
            targetCoord: [110.46, 10.92],
            autoRotate: true,
            autoRotateAfterStill: 10,
            distance: 50 // 视距
        },
        postEffectL: {
            enable: true,
            depthOfFieldL: {
                enable: true,
                focalDistance: 1000,
                fstop: 100
            }
        },
        layers: [{
            type: 'blend',
            texture: mapChart
        }]
    },
    series: [],

    // 值域 数据在哪些范围显示哪些颜色  就是echarts3 中的visualMap
    // dataRange: {
    //     right: "2%",
    //     bottom: "3%",
    //     icon: "circle",
    //     align: "left",
    //     splitList: [{
    //             start: 0,
    //             end: 0,
    //             label: '未发生',
    //             color: "#6ead51"
    //         },
    //         {
    //             start: 0,
    //             end: 250,
    //             label: '0-150',
    //             color: "#92b733"
    //         }
    //     ],
    //     textStyle: {
    //         color: "#0fccff",
    //         fontSize: 16
    //     }
    // },

}

myChart.on("click", (e) => { console.log(e); console.log(22222); })
myChart.setOption(option);


// });
// export default {}