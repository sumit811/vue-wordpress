<template>
    <div>
        <div class="p-4 mb-3 bg-light rounded">
            <h4 class="fst-italic">My Headless CMS</h4>
            <p class="mb-0">My Project is a Vue version of Wordpress front-end section.</p>
            <p>Technology Used: Vue2 + Vuex + Bootstrap 5 + Axios + WP-Rest APIs</p>
        </div>
        <AsideCategories />
        <AsideTags />
        <div class="p-4">
            <h4 class="fst-italic">Archives</h4>
            <ol class="list-unstyled mb-0">
                <li><a href="#">March 2021</a></li>
                <li><a href="#">February 2021</a></li>
                <li><a href="#">January 2021</a></li>
                <li><a href="#">December 2020</a></li>
                <li><a href="#">November 2020</a></li>
                <li><a href="#">October 2020</a></li>
                <li><a href="#">September 2020</a></li>
                <li><a href="#">August 2020</a></li>
                <li><a href="#">July 2020</a></li>
                <li><a href="#">June 2020</a></li>
                <li><a href="#">May 2020</a></li>
                <li><a href="#">April 2020</a></li>
            </ol>
        </div>

        <div class="p-4">
            <h4 class="fst-italic">Elsewhere</h4>
            <ol class="list-unstyled">
                <li><a href="https://www.linkedin.com/in/sumit-u-11344329/" target="_blank">GitHub</a></li>
                <li><a href="https://github.com/sumit811" target="_blank">Linkendin</a></li>
            </ol>
        </div>
    </div>
</template>
<script>
import AsideCategories from './AsideCategories.vue';
import AsideTags from './AsideTags.vue';
export default {
    name: "SideBar",
    components: { AsideCategories, AsideTags },
}
</script>