import EnvTypes from './EnvTypes';
import ServerTypes from './ServerTypes';
import { getBaseURL, setEnv } from './config';

setEnv(EnvTypes.DEV);
setEnv(EnvTypes.PRE);

const baseUrl = getBaseURL(ServerTypes.ORDER);
