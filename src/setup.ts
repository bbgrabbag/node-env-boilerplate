import * as dotenv from 'dotenv';
import * as path from 'path';

export default {
    /** Setup environment variables from .*.env files */
    env: () => {
        if (process.env.NODE_ENV === 'development') {
            dotenv.config({ path: path.resolve(__dirname, '..', '.development.env') });
        } else if (process.env.NODE_ENV === 'production') {
            dotenv.config();
        }
    },
};
