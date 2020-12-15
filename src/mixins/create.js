import { http } from '../utils/ajax'

export default {
    data: () => ({
        content: null
    }),
    created() {
        let url = this.$route.path
        if (this.$route.params.name) url = this.$route.params.name
        http.get(url)
            .then(response => {
                this.content = response.data
            })
            .catch(e => {
                console.log(e)
            })
    }
}