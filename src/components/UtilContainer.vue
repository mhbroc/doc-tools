<template>
	<div class="container">
		<DivTextArea v-model="left" />
		<div id="btnCluster">
			<button @click="convertJson" >Convert json output</button>
			<button @click="convertTable" >Convert table output</button>
		</div>
		<DivTextArea :message="output" />
	</div>
</template>

<script>
import DivTextArea from "./DivTextArea";
import { traverse, traverseNormal } from "../helper/traverse";
import withrules from "../data/templates/with-rules";
import { buildTable } from "../helper/table";

export default {
	name: 'UtilContainer',
	data() {
		return {
			left: "",
			output: ""
		};
	},
	mounted() {

	},
	methods: {
		convertJson()
		{
			try
			{
				const input = JSON.parse(this.left);
				this.output = JSON.stringify(traverseNormal(input), null, 4);
			} catch (error) { console.log(error); }
		},
		convertTable()
		{
			try {
				const input = JSON.parse(this.left);
				this.output = buildTable(traverse(input), withrules);
			} catch (error) { console.log(error); }
		}
	},
	components: {
		DivTextArea
	}
}
</script>

<style scoped>
.container
{
	display: flex;
	flex-direction: row;
	justify-content: space-between;
}

#btnCluster
{
	align-self: flex-start;

	display: flex;
	flex-direction: column;
}

#btnCluster > button
{
	height: 4em;
}
</style>
