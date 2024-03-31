<template>
	<view>
		<map style="height: 800rpx;width: 100%;" :latitude="location[0]" :longitude="location[1]" :markers="markers"></map>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				location: [31.568079,120.405522],
				// 标记点用于在地图上显示标记的位置
				markers: [{
					id: '0',
					latitude: '31.567079',	// 维度
					longitude: "120.405522",	// 经度
					title: "家",	// 标注点名	点击时显示，callout存在时将被忽略
					iconPath: '/static/uni.png',	// 项目目录下的图片路径，支持相对路径写法，以'/'开头则表示相对小程序根目录；也支持临时路径
					label: {
						content: "label label label",
					},
					// 自定义标记点上方的气泡窗口
					callout: {
						content: "自定义content\n 第二行",
						// color: "#ccc",
						borderRadius: 5,
						// borderColor: "yellow",
						borderWidth: 2,
						
						display: "ALWAYS",	// 'BYCLICK':点击显示; 'ALWAYS':常显	
					}
				}]
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
