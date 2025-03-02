import "normalize.css"
import "./assets/main.css"
import "./styles/index.css"

import { createApp } from "vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"
import { far } from "@fortawesome/free-regular-svg-icons"
import App from "./App.vue"

library.add(fab, fas, far)

createApp(App).mount("#app")
