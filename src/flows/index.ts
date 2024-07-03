import { createFlow } from "@builderbot/bot";
import { welcomeFlow } from "./welcome_flow";

/**
 * Declaramos todos los flujos que vamos a utilizar
 */

export default createFlow([welcomeFlow])