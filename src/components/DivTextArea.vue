<template>
    <div class="_textarea textarea" contenteditable="true" @input="sendUpdate($event.target)" @paste.prevent="pasteHandler" >
        <slot></slot>
    </div>
</template>

<script>
import { debounce } from "debounce";

export default {
    name: "DivTextArea",
    props: ["message"],
    methods: {
        pasteHandler(e)
        {
            let text = e.clipboardData.getData("text/plain");
            document.execCommand("insertHTML", false, text);
        },
        sendUpdate: debounce(function(e) {
            this.$emit("input", e.innerText);
        }, 300)
    }
}
</script>

<style scoped>
._textarea {
	width: 40%;
	min-height: 200px;
    min-width: inherit !important;
	height: auto;
    /* width:auto; */
	border:1px solid rgba(63,63,63,1);
    white-space: pre-wrap;
    overflow: auto;
    align-items: start !important;
    resize: none;
}
</style>