<template>
    <div class="d-flex align-items-center justify-content-center page-not-found">
        <div class="text-center">
            <h1 class="display-1 fw-bold">404</h1>
            <p class="fs-3"> <span class="text-danger">Opps!</span> Page not found.</p>
            <p class="lead">
                The page you're looking for doesn't exist.
            </p>
            <router-link to="./">Go Home</router-link>
        </div>
    </div>
</template>
<script>
export default {}
</script>
<style>
.page-not-found{
    height:calc(100vh - 320px)
}
</style>