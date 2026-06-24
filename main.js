/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n\n\nconst getCity = document.getElementById(\"city\");\nconst getUserButton = document.getElementById(\"userButton\");\n\n\n// const apiKey = \"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[unitgroup]?key=N59K5JC6UM8WVFGRNZN9KRJJB\"\n\n//apiaddress + location=getCityinput.value + gettodaydate + key + unitGroup + elements=temp + timezone=z\n//buttonaddeventlistener\n\ngetUserButton.addEventListener(\"click\", ()=>{\n     // const apiAddress = \"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/\"\n\n    // const getSearchValue = `location=${getCity.value}`;\n\n    // const getTodayDate = format(new Date(), \"yyyy-MM-dd\");\n\n    // const apiKey = \"key=N59K5JC6UM8WVFGRNZN9KRJJB\"\n\n    // const getTemp = \"elements=temp\"\n\n\n\nconsole.log(\"clicked\")\n    \n    \n})\n\n\n\n\n\nasync function getWeather(){\n    const response = await fetch(\"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/location=Manila/2026-6-24?key=N59K5JC6UM8WVFGRNZN9KRJJB&unitGroup=uk&elements=temp&timezone&tzoffset\")\n    const data = await response.json();\n\n    console.log(data);\n    console.log(data.days[0].temp)\n    console.log(data.resolvedAddress)\n    \n}\n\ngetWeather();\n\n\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IjtBQUFrQzs7QUFFbEM7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDBDQUEwQyxjQUFjOztBQUV4RDs7QUFFQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7OztBQU1EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzPzgyMGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmNvbnN0IGdldENpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNpdHlcIik7XG5jb25zdCBnZXRVc2VyQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ1c2VyQnV0dG9uXCIpO1xuXG5cbi8vIGNvbnN0IGFwaUtleSA9IFwiaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvW2xvY2F0aW9uXS9bdW5pdGdyb3VwXT9rZXk9TjU5SzVKQzZVTThXVkZHUk5aTjlLUkpKQlwiXG5cbi8vYXBpYWRkcmVzcyArIGxvY2F0aW9uPWdldENpdHlpbnB1dC52YWx1ZSArIGdldHRvZGF5ZGF0ZSArIGtleSArIHVuaXRHcm91cCArIGVsZW1lbnRzPXRlbXAgKyB0aW1lem9uZT16XG4vL2J1dHRvbmFkZGV2ZW50bGlzdGVuZXJcblxuZ2V0VXNlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgLy8gY29uc3QgYXBpQWRkcmVzcyA9IFwiaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvXCJcblxuICAgIC8vIGNvbnN0IGdldFNlYXJjaFZhbHVlID0gYGxvY2F0aW9uPSR7Z2V0Q2l0eS52YWx1ZX1gO1xuXG4gICAgLy8gY29uc3QgZ2V0VG9kYXlEYXRlID0gZm9ybWF0KG5ldyBEYXRlKCksIFwieXl5eS1NTS1kZFwiKTtcblxuICAgIC8vIGNvbnN0IGFwaUtleSA9IFwia2V5PU41OUs1SkM2VU04V1ZGR1JOWk45S1JKSkJcIlxuXG4gICAgLy8gY29uc3QgZ2V0VGVtcCA9IFwiZWxlbWVudHM9dGVtcFwiXG5cblxuXG5jb25zb2xlLmxvZyhcImNsaWNrZWRcIilcbiAgICBcbiAgICBcbn0pXG5cblxuXG5cblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcigpe1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXCJodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS9sb2NhdGlvbj1NYW5pbGEvMjAyNi02LTI0P2tleT1ONTlLNUpDNlVNOFdWRkdSTlpOOUtSSkpCJnVuaXRHcm91cD11ayZlbGVtZW50cz10ZW1wJnRpbWV6b25lJnR6b2Zmc2V0XCIpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1swXS50ZW1wKVxuICAgIGNvbnNvbGUubG9nKGRhdGEucmVzb2x2ZWRBZGRyZXNzKVxuICAgIFxufVxuXG5nZXRXZWF0aGVyKCk7XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"](0,__webpack_exports__,__webpack_require__);
/******/ 	
/******/ })()
;