import EnvTypes from './EnvTypes'
import ServerTypes from './ServerTypes'
import { getBaseURL, setEnv } from "./config";

setEnv(EnvTypes.DEV)

const baseUrl = getBaseURL(ServerTypes.ORDER)
