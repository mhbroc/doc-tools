<template>
	<div class="_container">
		<DivTextArea v-model="left" />
		<div id="btnCluster">
			<div class="field">
				<b-radio v-model="convertMode"
					native-value="json">
					Json output
				</b-radio>
			</div>
			<div class="field">
				<b-radio v-model="convertMode"
					native-value="table">
					Table output
				</b-radio>
			</div>
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
			output: "",
			convertMode: "json"
		};
	},
	watch: {
		left() { this.convert(); },
		convertMode() { this.convert(); }

	},
	mounted() {

	},
	methods: {
		convert()
		{
			try
			{
				const input = JSON.parse(this.left);
				if (this.convertMode === "json")
					this.output = JSON.stringify(traverseNormal(input), null, 4);
				else
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
._container
{
	padding: 16px 8px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: flex-start;
}

#btnCluster
{
	display: flex;
	flex-direction: column;
}

#btnCluster > button
{
	height: 4em;
}
</style>
