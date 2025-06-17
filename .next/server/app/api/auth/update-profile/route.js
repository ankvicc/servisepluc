"use strict";
(() => {
var exports = {};
exports.id = 261;
exports.ids = [261];
exports.modules = {

/***/ 2037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 7312:
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

// NAMESPACE OBJECT: ./app/api/auth/update-profile/route.ts
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST),
  dynamic: () => (dynamic),
  fetchCache: () => (fetchCache)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(2394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(9692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(9335);
// EXTERNAL MODULE: ./lib/prisma.ts + 1 modules
var prisma = __webpack_require__(7846);
;// CONCATENATED MODULE: ./app/api/auth/update-profile/route.ts
const dynamic = "force-dynamic"; // Важно для API роутов
const fetchCache = "force-no-store"; // Отключает кэширование


async function POST(request) {
    try {
        const { userId, name, phone } = await request.json();
        const updatedUser = await prisma/* default */.Z.user.update({
            where: {
                id: userId
            },
            data: {
                name,
                phone
            }
        });
        return next_response/* default */.Z.json(updatedUser, {
            status: 200
        });
    } catch (error) {
        console.error("Update profile error:", error);
        return next_response/* default */.Z.json({
            error: "Ошибка при обновлении профиля"
        }, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fupdate-profile%2Froute&name=app%2Fapi%2Fauth%2Fupdate-profile%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fupdate-profile%2Froute.ts&appDir=C%3A%5CUsers%5CTwert%5CDesktop%5Cservice-plus%5Capp&appPaths=%2Fapi%2Fauth%2Fupdate-profile%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/update-profile/route","pathname":"/api/auth/update-profile","filename":"route","bundlePath":"app/api/auth/update-profile/route"},"resolvedPagePath":"C:\\Users\\Twert\\Desktop\\service-plus\\app\\api\\auth\\update-profile\\route.ts","nextConfigOutput":""}
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

    const originalPathname = "/api/auth/update-profile/route"

    

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
var __webpack_exports__ = __webpack_require__.X(0, [212,778], () => (__webpack_exec__(7312)));
module.exports = __webpack_exports__;

})();