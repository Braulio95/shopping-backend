import { Sequelize } from "sequelize";
import { setUpProduct } from "../models/product";

let sequelize: Sequelize;
export const startDB = (url: string): Sequelize => {
  sequelize = new Sequelize(url);
  setUpProduct(sequelize);
  sequelize.authenticate();
  sequelize.sync();
  return sequelize;
};
