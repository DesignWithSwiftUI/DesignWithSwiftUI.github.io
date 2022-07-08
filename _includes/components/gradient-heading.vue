<script>
    export default {
        props: {
            text: String
        }
    }
</script>

<template>
    <div class="gradient-heading">
        <div class="background-glow  background-glow--small">
            <h3>{{ text }}</h3>
        </div>
    </div>
</template>