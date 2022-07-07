<script>
    import moment from 'moment'

    export default {
        props: {
            showDate: {
                type: Boolean,
                default: true
            },
            isLatest: {
                type: Boolean,
                default: false
            },
            post: Object
        },
        computed: {
            publishedDate() {
                return moment(this.post.page.date).format('Do MMM, YYYY')
            },
            isHighlighted() {
                return this.isLatest ? 'tile--highlight' : ''
            }
        }
    }
</script>

<template>
    <div class="tile  tile--article" v-bind:class="isHighlighted">
        <div class="tile__info">
            <div class="tag-list">
                <div class="tag  tag--highlight" v-if="isLatest">Latest ✨</div>
                <div class="tag" v-if="showDate">{{ publishedDate }}</div>
                <div class="tag" v-for="tag in post.categories">
                    {{ tag }}
                </div>
            </div>
            <h2 class="tile__heading">{{ post.title }}</h2>
            <p class="tile__excerpt">{{ post.page.excerpt }}</p>
            <a href="/" class="button">
                <span>Read More</span>
                <div class="spacer  spacer--8"></div>
                <svg class="icon" width="20" height="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" color="#fff"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </a>
        </div>

        <div class="tile__preview">
            <div class="tile__preview__container">
                <video :src="post.preview" autoplay playsinline muted loop></video>
            </div>
        </div>
    </div>
</template>