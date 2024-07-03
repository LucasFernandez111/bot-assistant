import { createBot, createProvider} from '@builderbot/bot'
import { MemoryDB as Database } from '@builderbot/bot'
import { BaileysProvider } from '@builderbot/provider-baileys'
import flows from './flows'


const PORT = process.env.PORT ?? 3008




const main = async () => {
 
    const provider = createProvider(BaileysProvider)
    const adapterDB = new Database()

    const { httpServer } = await createBot({
        flow: flows ,
        provider: provider,
        database: adapterDB,
    })


    httpServer(+PORT)
}

main()
