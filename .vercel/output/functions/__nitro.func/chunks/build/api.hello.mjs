import { K } from '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import '@tanstack/react-router';
import 'react/jsx-runtime';
import 'react';
import 'react-dom/server';

const s = "server-fn-return-type";
function o(e, n) {
  return new Response(JSON.stringify(e), { status: 200, statusText: void 0, headers: { "Content-Type": "application/json", [s]: "json" } });
}
const l = K("/api/hello")({ GET: () => o({ message: "Hello /api/hello" }) });

export { l as Route };
//# sourceMappingURL=api.hello.mjs.map
