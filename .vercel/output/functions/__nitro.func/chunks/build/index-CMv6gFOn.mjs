import { jsxs, jsx } from 'react/jsx-runtime';
import { M as Mt } from '../runtime.mjs';
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
import 'react';
import 'react-dom/server';

const g = function() {
  const t = Mt.useLoaderData({ select: (s) => s.message });
  return jsxs("div", { children: [jsx("h1", { children: "Home" }), jsx("p", { children: "Welcome to the home page!" }), jsxs("p", { children: ["API Greeting message: ", jsx("strong", { children: t })] })] });
}, u = async () => await (await fetch("http://localhost:3000/api/hello")).json();

export { g as component, u as loader };
//# sourceMappingURL=index-CMv6gFOn.mjs.map
