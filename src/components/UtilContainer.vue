<template>
	<div class="_container">
		<DivTextArea v-model="left" />
		<div id="btnCluster">
			<!-- radio select -->
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

			<!-- table options -->
			<div v-if="convertMode === 'table'" class="field">
				<b-field label="Template">
					<b-select v-model="templateSelect">
						<option 
							v-for="(t, i) in Object.keys(templates)"
							:key="i"
							:value="t"
						>
						{{ t }}
						</option>
					</b-select>
				</b-field>
			</div>
		</div>
		<DivTextArea>{{ output }}</DivTextArea>
	</div>
</template>

<script>
import DivTextArea from "./DivTextArea";
import { traverse, traverseNormal } from "../helper/traverse";
import templates from "../data/template";
import { buildTable } from "../helper/table";

export default {
	name: 'UtilContainer',
	data() {
		return {
			left: "",
			output: "",
			convertMode: "json",
			templates,
			templateSelect: "with-rules"
		};
	},
	computed: {
		inputWatch()
		{
			return "".concat(
				this.left,
				this.convertMode,
				this.templateSelect
			);
		}
	},
	watch: {
		inputWatch() { this.convert(); }
	},
	methods: {
		convert()
		{
			try
			{
				const input = JSON.parse(this.left);
				if (this.convertMode === "json")
					this.output = JSON.stringify(traverseNormal(input), null, 4).replace(/\"/g, "");
				else
					this.output = buildTable(traverse(input), templates[this.templateSelect]);
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
