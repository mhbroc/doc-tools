<template>
    <div class="textarea" contenteditable="true" @input="sendUpdate($event.target)" >{{ message }}</div>
</template>

<script>
export default {
    name: "DivTextArea",
    props: ["message"],
    methods: {
        sendUpdate(e)
        {
            this.$emit("input", e.innerText);
        }
    }
}
</script>

<style scoped>
.textarea {
	width: 40%;
	min-height: auto;
	height: auto;
    /* width:auto; */
	border:1px solid rgba(63,63,63,1);
    white-space: pre-wrap;
    overflow: auto;
}
</style>