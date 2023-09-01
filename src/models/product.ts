import { DataTypes, Sequelize, Model } from "sequelize";
import { Column } from "sequelize-typescript";

export class Product extends Model {
  @Column({
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataTypes.TEXT,
    allowNull: false,
  })
  product!: string;

  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
  })
  quantity!: number;

  @Column({
    type: DataTypes.DATEONLY,
    allowNull: false,
    field: "purchaseDate",
  })
  purchaseDate!: string;

  @Column({
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "shoppingListId",
  })
  shoppingListId!: number;
}

export const setUpProduct = (sequelize: Sequelize) => {
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      product: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      purchaseDate: {
        type: DataTypes.DATEONLY,
        allowNull: false,
        field: "purchaseDate",
      },
      shoppingListId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "shoppingListId",
      },
    },
    {
      sequelize,
      modelName: "Product",
      timestamps: false,
    }
  );
  return Product;
};
