export default {
    methods:{
        removeMoreLink(v) {
            let parser = new DOMParser();
            const doc = parser.parseFromString(v, "text/html");
            let links = doc.getElementsByClassName("more-link");
            [...links].forEach((link) => {
                // console.log('link:-',link)
                link.remove();
            });
            return doc.documentElement.innerHTML;
        },
    }
}