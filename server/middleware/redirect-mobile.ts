// server/middleware/redirect-mobile.ts

import { defineEventHandler } from 'h3';

export default defineEventHandler((event) => {
  const userAgent = event.req.headers['user-agent'];
  const url = event.req.url;

  // Check if both userAgent and url are defined
  if (userAgent && url) {
    const isMobile = /mobile/i.test(userAgent);

    if (isMobile && !url.startsWith('/m')) {
      return event.res.writeHead(302, { Location: '/m' }).end();
    }
  }
});
