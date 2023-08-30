import app from './app'
import dotenv from 'dotenv';
import { startDB } from './database/db';
dotenv.config();

const PORT = process.env.PORT;
const URI_CONN = process.env.URI_CONN

app.listen(PORT, async () => {
    try {
        if (URI_CONN) {
            const sequelize = await startDB(URI_CONN);
            await sequelize.authenticate();
            await sequelize.sync({ force: true })
            console.log(`App is up and running at port:${PORT}`)

        }

    } catch (error) {
        console.log(error);
        process.abort();
    }

})