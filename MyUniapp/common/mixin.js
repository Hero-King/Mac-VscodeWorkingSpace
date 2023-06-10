export default {
    data() {
        return {
        }
    },
	onShow(){
		console.log('show  -- mixin', this.$options.name);
	},
	onPullDownRefresh(){
		console.log('onPullDownRefresh');
		setTimeout(function() {
			uni.stopPullDownRefresh()
		}, 1000);
	}
}
