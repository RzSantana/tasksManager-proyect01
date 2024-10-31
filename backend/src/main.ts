import { serve } from 'bun'
import ENV from './config/env';
import app from './app';

serve({
    port: ENV.port,
    fetch: app.fetch
})

console.log(`🚀 Server running a\x1B[1;36m http://localhost:${ENV.port} \x1B[0m`);
