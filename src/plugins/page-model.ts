import PageModel from "../components/page-model/index.vue"
import {App} from "vue";

export default PageModel.install = (app: App) => {
    app.component("PageModel", PageModel)
}