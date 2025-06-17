"use strict";
(() => {
var exports = {};
exports.id = 873;
exports.ids = [873];
exports.modules = {

/***/ 4300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 2781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 3837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 4536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./app/api/auth/login/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./lib/prisma.ts + 1 modules
var prisma = __webpack_require__(7846);
// EXTERNAL MODULE: ./node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(3600);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(9877);
var jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
;// CONCATENATED MODULE: ./app/api/auth/login/route.ts
// app/api/auth/login/route.ts




async function POST(req) {
    try {
        const { email, password } = await req.json();
        // Валидация входных данных
        if (!email || !password) {
            return next_response/* default */.Z.json({
                error: "Email и пароль обязательны"
            }, {
                status: 400
            });
        }
        const user = await prisma/* default */.Z.user.findUnique({
            where: {
                email
            },
            select: {
                id: true,
                email: true,
                password: true,
                name: true
            }
        });
        if (!user) {
            return next_response/* default */.Z.json({
                error: "Неверные учетные данные"
            }, {
                status: 401
            });
        }
        const isValid = await (0,bcryptjs/* compare */.qu)(password, user.password);
        if (!isValid) {
            return next_response/* default */.Z.json({
                error: "Неверные учетные данные"
            }, {
                status: 401
            });
        }
        const token = jsonwebtoken_default().sign({
            userId: user.id,
            email: user.email
        }, process.env.JWT_SECRET, {
            expiresIn: "1h"
        });
        const response = next_response/* default */.Z.json({
            token,
            user: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        }, {
            status: 200
        });
        response.cookies.set("token", token, {
            httpOnly: true,
            secure: "production" === "production",
            sameSite: "lax",
            maxAge: 3600,
            path: "/"
        });
        return response;
    } catch (error) {
        console.error("Login error:", error);
        return next_response/* default */.Z.json({
            error: "Внутренняя ошибка сервера"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Flogin%2Froute&name=app%2Fapi%2Fauth%2Flogin%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CTwert%5CDesktop%5Cservice-plus%5Capp&appPaths=%2Fapi%2Fauth%2Flogin%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/login/route","pathname":"/api/auth/login","filename":"route","bundlePath":"app/api/auth/login/route"},"resolvedPagePath":"C:\\Users\\Twert\\Desktop\\service-plus\\app\\api\\auth\\login\\route.ts","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/auth/login/route"

    

/***/ }),

/***/ 7846:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ lib_prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

const prisma = globalThis.prisma || new client_namespaceObject.PrismaClient();
if (false) {}
/* harmony default export */ const lib_prisma = (prisma);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [212,778,600,877], () => (__webpack_exec__(4536)));
module.exports = __webpack_exports__;

})();