
# <img src="logos.svg" alt="Yet another Figma plugin starter">

## Basics
**Typescript** – the best JavaScript to date.  
**React** – renders stuff, so you don't have to.  
**Webpack** – bundles it all together.  

## More goodies
**workers** – heavy computation? Try using Webworkers! Check [demo.worker.ts](src/ui/app/demo.worker.ts) and [app.tsx](src/ui/app/app.tsx). Workers MUST be inlined due to Figma plugins system design, so be size-aware.  
**[debug](https://www.npmjs.com/package/debug)** – smarter `console.log`. Can be switched on/off via `process.env.DEBUG`. Default: `on` in dev mode, `off` on prod.  
**[figma-messenger](https://github.com/okotoki/figma-messenger)** – helper utility for type-safe communication between iframe and main thread.  

## Usage
Clone, copy/paste and run `yarn dev` or `yarn build` for production build.

## License
BSD-3
