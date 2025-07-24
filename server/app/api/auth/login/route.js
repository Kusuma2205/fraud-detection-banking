/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/login/route";
exports.ids = ["app/api/auth/login/route"];
exports.modules = {

/***/ "(rsc)/./app/api/auth/login/route.ts":
/*!*************************************!*\
  !*** ./app/api/auth/login/route.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n// Mock user database - in real app, this would be in your Java backend\nconst users = [\n    // Admin users\n    {\n        username: \"admin\",\n        password: \"admin123\",\n        role: \"admin\"\n    },\n    {\n        username: \"superadmin\",\n        password: \"super123\",\n        role: \"admin\"\n    },\n    // Analyst users\n    {\n        username: \"analyst\",\n        password: \"analyst123\",\n        role: \"analyst\"\n    },\n    {\n        username: \"data_analyst\",\n        password: \"analyst456\",\n        role: \"analyst\"\n    },\n    // Regular users\n    {\n        username: \"user\",\n        password: \"user123\",\n        role: \"user\"\n    },\n    {\n        username: \"john_doe\",\n        password: \"password\",\n        role: \"user\"\n    },\n    {\n        username: \"jane_smith\",\n        password: \"password\",\n        role: \"user\"\n    },\n    {\n        username: \"demo_user\",\n        password: \"demo123\",\n        role: \"user\"\n    },\n    // Test users\n    {\n        username: \"test\",\n        password: \"test\",\n        role: \"user\"\n    },\n    {\n        username: \"demo\",\n        password: \"demo\",\n        role: \"user\"\n    }\n];\nasync function POST(request) {\n    try {\n        const { username, password, role } = await request.json();\n        // In a real application, this would make a request to your Java backend\n        // Example: const response = await fetch('http://localhost:8080/api/auth/login', {...})\n        // Mock authentication\n        const user = users.find((u)=>u.username === username && u.password === password && u.role === role);\n        if (user) {\n            // Generate a mock JWT token (in real app, this comes from Java backend)\n            const token = `mock-jwt-token-${Date.now()}`;\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: true,\n                token,\n                user: {\n                    username: user.username,\n                    role: user.role\n                }\n            });\n        } else {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                success: false,\n                message: \"Invalid credentials\"\n            }, {\n                status: 401\n            });\n        }\n    } catch (error) {\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            success: false,\n            message: \"Server error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvbG9naW4vcm91dGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEQ7QUFFNUQsdUVBQXVFO0FBQ3ZFLE1BQU1DLFFBQVE7SUFDWixjQUFjO0lBQ2Q7UUFBRUMsVUFBVTtRQUFTQyxVQUFVO1FBQVlDLE1BQU07SUFBUTtJQUN6RDtRQUFFRixVQUFVO1FBQWNDLFVBQVU7UUFBWUMsTUFBTTtJQUFRO0lBRTlELGdCQUFnQjtJQUNoQjtRQUFFRixVQUFVO1FBQVdDLFVBQVU7UUFBY0MsTUFBTTtJQUFVO0lBQy9EO1FBQUVGLFVBQVU7UUFBZ0JDLFVBQVU7UUFBY0MsTUFBTTtJQUFVO0lBRXBFLGdCQUFnQjtJQUNoQjtRQUFFRixVQUFVO1FBQVFDLFVBQVU7UUFBV0MsTUFBTTtJQUFPO0lBQ3REO1FBQUVGLFVBQVU7UUFBWUMsVUFBVTtRQUFZQyxNQUFNO0lBQU87SUFDM0Q7UUFBRUYsVUFBVTtRQUFjQyxVQUFVO1FBQVlDLE1BQU07SUFBTztJQUM3RDtRQUFFRixVQUFVO1FBQWFDLFVBQVU7UUFBV0MsTUFBTTtJQUFPO0lBRTNELGFBQWE7SUFDYjtRQUFFRixVQUFVO1FBQVFDLFVBQVU7UUFBUUMsTUFBTTtJQUFPO0lBQ25EO1FBQUVGLFVBQVU7UUFBUUMsVUFBVTtRQUFRQyxNQUFNO0lBQU87Q0FDcEQ7QUFFTSxlQUFlQyxLQUFLQyxPQUFvQjtJQUM3QyxJQUFJO1FBQ0YsTUFBTSxFQUFFSixRQUFRLEVBQUVDLFFBQVEsRUFBRUMsSUFBSSxFQUFFLEdBQUcsTUFBTUUsUUFBUUMsSUFBSTtRQUV2RCx3RUFBd0U7UUFDeEUsdUZBQXVGO1FBRXZGLHNCQUFzQjtRQUN0QixNQUFNQyxPQUFPUCxNQUFNUSxJQUFJLENBQUMsQ0FBQ0MsSUFBTUEsRUFBRVIsUUFBUSxLQUFLQSxZQUFZUSxFQUFFUCxRQUFRLEtBQUtBLFlBQVlPLEVBQUVOLElBQUksS0FBS0E7UUFFaEcsSUFBSUksTUFBTTtZQUNSLHdFQUF3RTtZQUN4RSxNQUFNRyxRQUFRLENBQUMsZUFBZSxFQUFFQyxLQUFLQyxHQUFHLElBQUk7WUFFNUMsT0FBT2IscURBQVlBLENBQUNPLElBQUksQ0FBQztnQkFDdkJPLFNBQVM7Z0JBQ1RIO2dCQUNBSCxNQUFNO29CQUNKTixVQUFVTSxLQUFLTixRQUFRO29CQUN2QkUsTUFBTUksS0FBS0osSUFBSTtnQkFDakI7WUFDRjtRQUNGLE9BQU87WUFDTCxPQUFPSixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO2dCQUFFTyxTQUFTO2dCQUFPQyxTQUFTO1lBQXNCLEdBQUc7Z0JBQUVDLFFBQVE7WUFBSTtRQUM3RjtJQUNGLEVBQUUsT0FBT0MsT0FBTztRQUNkLE9BQU9qQixxREFBWUEsQ0FBQ08sSUFBSSxDQUFDO1lBQUVPLFNBQVM7WUFBT0MsU0FBUztRQUFlLEdBQUc7WUFBRUMsUUFBUTtRQUFJO0lBQ3RGO0FBQ0YiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcS3VzdW1hIEJhbmRhcnVwYWxsaVxcRG93bmxvYWRzXFxiYW5raW5nLWZyYXVkLWRldGVjdGlvblxcYXBwXFxhcGlcXGF1dGhcXGxvZ2luXFxyb3V0ZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIlxuXG4vLyBNb2NrIHVzZXIgZGF0YWJhc2UgLSBpbiByZWFsIGFwcCwgdGhpcyB3b3VsZCBiZSBpbiB5b3VyIEphdmEgYmFja2VuZFxuY29uc3QgdXNlcnMgPSBbXG4gIC8vIEFkbWluIHVzZXJzXG4gIHsgdXNlcm5hbWU6IFwiYWRtaW5cIiwgcGFzc3dvcmQ6IFwiYWRtaW4xMjNcIiwgcm9sZTogXCJhZG1pblwiIH0sXG4gIHsgdXNlcm5hbWU6IFwic3VwZXJhZG1pblwiLCBwYXNzd29yZDogXCJzdXBlcjEyM1wiLCByb2xlOiBcImFkbWluXCIgfSxcblxuICAvLyBBbmFseXN0IHVzZXJzXG4gIHsgdXNlcm5hbWU6IFwiYW5hbHlzdFwiLCBwYXNzd29yZDogXCJhbmFseXN0MTIzXCIsIHJvbGU6IFwiYW5hbHlzdFwiIH0sXG4gIHsgdXNlcm5hbWU6IFwiZGF0YV9hbmFseXN0XCIsIHBhc3N3b3JkOiBcImFuYWx5c3Q0NTZcIiwgcm9sZTogXCJhbmFseXN0XCIgfSxcblxuICAvLyBSZWd1bGFyIHVzZXJzXG4gIHsgdXNlcm5hbWU6IFwidXNlclwiLCBwYXNzd29yZDogXCJ1c2VyMTIzXCIsIHJvbGU6IFwidXNlclwiIH0sXG4gIHsgdXNlcm5hbWU6IFwiam9obl9kb2VcIiwgcGFzc3dvcmQ6IFwicGFzc3dvcmRcIiwgcm9sZTogXCJ1c2VyXCIgfSxcbiAgeyB1c2VybmFtZTogXCJqYW5lX3NtaXRoXCIsIHBhc3N3b3JkOiBcInBhc3N3b3JkXCIsIHJvbGU6IFwidXNlclwiIH0sXG4gIHsgdXNlcm5hbWU6IFwiZGVtb191c2VyXCIsIHBhc3N3b3JkOiBcImRlbW8xMjNcIiwgcm9sZTogXCJ1c2VyXCIgfSxcblxuICAvLyBUZXN0IHVzZXJzXG4gIHsgdXNlcm5hbWU6IFwidGVzdFwiLCBwYXNzd29yZDogXCJ0ZXN0XCIsIHJvbGU6IFwidXNlclwiIH0sXG4gIHsgdXNlcm5hbWU6IFwiZGVtb1wiLCBwYXNzd29yZDogXCJkZW1vXCIsIHJvbGU6IFwidXNlclwiIH0sXG5dXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IE5leHRSZXF1ZXN0KSB7XG4gIHRyeSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQsIHJvbGUgfSA9IGF3YWl0IHJlcXVlc3QuanNvbigpXG5cbiAgICAvLyBJbiBhIHJlYWwgYXBwbGljYXRpb24sIHRoaXMgd291bGQgbWFrZSBhIHJlcXVlc3QgdG8geW91ciBKYXZhIGJhY2tlbmRcbiAgICAvLyBFeGFtcGxlOiBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL2F1dGgvbG9naW4nLCB7Li4ufSlcblxuICAgIC8vIE1vY2sgYXV0aGVudGljYXRpb25cbiAgICBjb25zdCB1c2VyID0gdXNlcnMuZmluZCgodSkgPT4gdS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgdS5wYXNzd29yZCA9PT0gcGFzc3dvcmQgJiYgdS5yb2xlID09PSByb2xlKVxuXG4gICAgaWYgKHVzZXIpIHtcbiAgICAgIC8vIEdlbmVyYXRlIGEgbW9jayBKV1QgdG9rZW4gKGluIHJlYWwgYXBwLCB0aGlzIGNvbWVzIGZyb20gSmF2YSBiYWNrZW5kKVxuICAgICAgY29uc3QgdG9rZW4gPSBgbW9jay1qd3QtdG9rZW4tJHtEYXRlLm5vdygpfWBcblxuICAgICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHtcbiAgICAgICAgc3VjY2VzczogdHJ1ZSxcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIHVzZXI6IHtcbiAgICAgICAgICB1c2VybmFtZTogdXNlci51c2VybmFtZSxcbiAgICAgICAgICByb2xlOiB1c2VyLnJvbGUsXG4gICAgICAgIH0sXG4gICAgICB9KVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJJbnZhbGlkIGNyZWRlbnRpYWxzXCIgfSwgeyBzdGF0dXM6IDQwMSB9KVxuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBzdWNjZXNzOiBmYWxzZSwgbWVzc2FnZTogXCJTZXJ2ZXIgZXJyb3JcIiB9LCB7IHN0YXR1czogNTAwIH0pXG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJ1c2VycyIsInVzZXJuYW1lIiwicGFzc3dvcmQiLCJyb2xlIiwiUE9TVCIsInJlcXVlc3QiLCJqc29uIiwidXNlciIsImZpbmQiLCJ1IiwidG9rZW4iLCJEYXRlIiwibm93Iiwic3VjY2VzcyIsIm1lc3NhZ2UiLCJzdGF0dXMiLCJlcnJvciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/login/route.ts\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CKusuma%20Bandarupalli%5CDownloads%5Cbanking-fraud-detection%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKusuma%20Bandarupalli%5CDownloads%5Cbanking-fraud-detection&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CKusuma%20Bandarupalli%5CDownloads%5Cbanking-fraud-detection%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKusuma%20Bandarupalli%5CDownloads%5Cbanking-fraud-detection&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Kusuma_Bandarupalli_Downloads_banking_fraud_detection_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/login/route.ts */ \"(rsc)/./app/api/auth/login/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/login/route\",\n        pathname: \"/api/auth/login\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/login/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Kusuma Bandarupalli\\\\Downloads\\\\banking-fraud-detection\\\\app\\\\api\\\\auth\\\\login\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Kusuma_Bandarupalli_Downloads_banking_fraud_detection_app_api_auth_login_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGbG9naW4lMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkZsb2dpbiUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNLdXN1bWElMjBCYW5kYXJ1cGFsbGklNUNEb3dubG9hZHMlNUNiYW5raW5nLWZyYXVkLWRldGVjdGlvbiU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDS3VzdW1hJTIwQmFuZGFydXBhbGxpJTVDRG93bmxvYWRzJTVDYmFua2luZy1mcmF1ZC1kZXRlY3Rpb24maXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ21EO0FBQ2hJO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxLdXN1bWEgQmFuZGFydXBhbGxpXFxcXERvd25sb2Fkc1xcXFxiYW5raW5nLWZyYXVkLWRldGVjdGlvblxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcbG9naW5cXFxccm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2F1dGgvbG9naW4vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9hdXRoL2xvZ2luXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL2xvZ2luL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcS3VzdW1hIEJhbmRhcnVwYWxsaVxcXFxEb3dubG9hZHNcXFxcYmFua2luZy1mcmF1ZC1kZXRlY3Rpb25cXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXGxvZ2luXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CKusuma%20Bandarupalli%5CDownloads%5Cbanking-fraud-detection%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKusuma%20Bandarupalli%5CDownloads%5Cbanking-fraud-detection&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fauth%2Flogin%2Froute&page=%2Fapi%2Fauth%2Flogin%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2Flogin%2Froute.ts&appDir=C%3A%5CUsers%5CKusuma%20Bandarupalli%5CDownloads%5Cbanking-fraud-detection%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CKusuma%20Bandarupalli%5CDownloads%5Cbanking-fraud-detection&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();