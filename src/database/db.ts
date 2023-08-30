import { Sequelize } from "sequelize";



export const startDB = async (url: string): Promise<Sequelize> => {
    let sequelize:Sequelize = new Sequelize(url);
    return sequelize
}