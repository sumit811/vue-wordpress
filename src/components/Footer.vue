<template>
    <footer id="footer" class="border-top mt-4">
        <div class="container">
            <div class="d-flex flex-column flex-sm-row justify-content-between py-5">
                <p>&copy; {{ year }} Company, Inc. All rights reserved.</p>
                <ul class="list-unstyled d-flex">
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                <use xlink:href="#twitter"></use>
                            </svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                <use xlink:href="#instagram"></use>
                            </svg></a></li>
                    <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24">
                                <use xlink:href="#facebook"></use>
                            </svg></a></li>
                    <li v-if="msgFromNav">{{ msgFromNav }}</li>
                </ul>
            </div>
        </div>
    </footer>
</template>
<script>
export default {
    name: "FooterVue",
    props: {
        msgFromNav: {
            type: String,
            default: null
        }
    },
    computed: {
        year: function () {
            let y = new Date();
            return y.getFullYear()
        }
    }
}
</script>