import { Sequelize } from "sequelize"

const db = new Sequelize('workfrom-database', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db;