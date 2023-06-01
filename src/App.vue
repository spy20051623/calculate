<template>
	<div class="app">
		<el-container class="container1">
			<el-header class="header" height="60px">
				<el-page-header @back="back" content="忘川风华录随机概率模拟器"/>
			</el-header>
			<el-container class="container2">
				<el-aside class="aside" width="120px">
					<el-menu class="menu" default-active="attack" router>
						<el-menu-item index="attack"><span>伤害计算</span></el-menu-item>
						<el-menu-item index="control"><span>命中率计算</span></el-menu-item>
					</el-menu>
				</el-aside>
				<el-main class="main">
					<router-view/>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
export default {
    methods: {
        back() {
            location.assign('/../..')
        }
    }
}
</script>

<style>
.app {
    height: 100%;
}

.container1 {
    height: 100%;
}

.container2 {
    height: calc(100% - 60px);
    width: 100%;
}

.header {
    display: flex;
    background-color: #81e7ff;
    align-items: center;
}

.aside {
    text-align: center;
    line-height: 200px;
}

.menu {
    text-align: center;
    background-color: #a9eeff;
    height: 100%;
}

.main {
    text-align: center;
    background-color: #c6f7ff;
}

html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
</style>