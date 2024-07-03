import { EVENTS, addKeyword } from "@builderbot/bot";
import main_layer from "~/layers/main_layer";


const welcomeFlow = addKeyword(EVENTS.WELCOME).addAction(main_layer)



export {welcomeFlow}


