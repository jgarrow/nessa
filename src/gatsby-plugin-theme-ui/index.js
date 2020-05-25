// See other presets to try at https://theme-ui.com/packages/presets
import { bulma } from "@theme-ui/presets"
console.log("bulma: ", bulma)
export default {
  ...bulma,
  styles: {
    ...bulma.styles,
  },
}
