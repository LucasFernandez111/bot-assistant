import { toAsk } from "@builderbot-plugins/openai-assistants";
import { BotContext, BotMethods } from "@builderbot/bot/dist/types";
import { ASSISTANT_ID } from "config";



export default  async (_:BotContext,{ flowDynamic,gotoFlow,state}:BotMethods) => {

const promp = ""

const response = await toAsk(ASSISTANT_ID,promp,state)
} 