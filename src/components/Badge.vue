<template>
    <div id="badge">
        <img src="{{ hrefimg }}"></img>
        <a  :style="{backgroundColor:color}">{{text}}</a>
    </div>
</template>

<script lang="ts">
    export default{
        props:['hrefimg','color','text']
    }
</script>
<style>
</style>