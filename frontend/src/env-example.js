
const apiHost = "localhost:3001"
const frontEndUrl = "localhost:3000"
const envId = "local"
const httpType = "https"
const enableCors = true
const mongoAuthString = "admin:<PW>"  //  set to "" for local env

module.exports = {
    apiHost,
    frontEndUrl,
    envId,
    enableCors,
    httpType,
    mongoAuthString
}