<!--
 * @Description:
 * @Author: 孙少聪
 * @Date: 2022-09-19 09:55:35
 * @LastEditTime: 2022-12-12 09:34:29
 * @LastEditors: 孙少聪
-->
<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view :key="key" />
    </transition>
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
	.app-main {
		/*50 = navbar  */
		min-height: calc(100vh - 50px);
		width: 100%;
		position: relative;
		overflow: hidden;
		margin-left: 0px
	}

	.fixed-header+.app-main {
		padding-top: 15px;
	}
</style>

<style lang="scss">
	/*fix css style bug in open el-dialog*/
	.el-popup-parent--hidden {
		.fixed-header {
			padding-right: 15px;
		}
	}
</style>
