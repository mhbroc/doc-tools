<template>
    <div class="_textarea" contenteditable="true" @input="sendUpdate($event.target)" @paste.prevent="pasteHandler" >{{ message }}</div>
</template>

<script>
export default {
    name: "DivTextArea",
    props: ["message"],
    methods: {
        pasteHandler(e)
        {
            let text = e.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", false, text);
        },
        sendUpdate(e)
        {
            this.$emit("input", e.innerText);
        }
    }
}
</script>

<style scoped>
._textarea {
	width: 40%;
	min-height: 200px;
	height: auto;
    /* width:auto; */
	border:1px solid rgba(63,63,63,1);
    white-space: pre-wrap;
    overflow: auto;
}
</style>