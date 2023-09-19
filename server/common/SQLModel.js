import { DataTypes, literal } from "sequelize"

const UUIDModel = {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
    },
}

const SQLModel = {
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: literal('NOW()')
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: literal('NOW()')
    },
}

export default SQLModel
