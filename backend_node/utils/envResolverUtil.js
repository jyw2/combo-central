const { envId: env } = require("../../frontend/src/env");

const comboDetailsSchema = require(`../envs/env-${env}/${env}-comboDetailsSchema`)
const commonButtonVariants = require(`../envs/env-${env}/${env}-commonButtonVariants`)
module.exports={ comboDetailsSchema, commonButtonVariants}