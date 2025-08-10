"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  Int32: () => Int32,
  default: () => index_default
});
module.exports = __toCommonJS(index_exports);
var import_mongoose = __toESM(require("mongoose"));
var INT32_MAX = 2147483647;
var INT32_MIN = -2147483648;
var Int32 = class extends import_mongoose.default.SchemaType {
  constructor(key, options) {
    super(key, options, "Int32");
  }
  cast(val) {
    if (val == null) {
      return val;
    }
    let _val = Number(val);
    if (isNaN(_val)) {
      throw new import_mongoose.default.Error(`${val} is not a number`);
    }
    _val = Math.round(_val);
    if (_val < INT32_MIN || _val > INT32_MAX) {
      throw new import_mongoose.default.Error(
        `${val} is outside of the range of valid BSON int32s: ${INT32_MIN} - ${INT32_MAX}`
      );
    }
    return _val;
  }
};
Int32.INT32_BSON_TYPE = 16;
Int32.INT32_MAX = INT32_MAX;
Int32.INT32_MIN = INT32_MIN;
Int32.instance = "Int32";
Int32.schemaName = "Int32";
Int32.defaultOptions = {};
Int32.prototype.$conditionalHandlers = import_mongoose.default.Schema.Types.Number.prototype.$conditionalHandlers;
(function registerInt32() {
  if (import_mongoose.default.Schema && typeof import_mongoose.default.Schema.Types === "object") {
    import_mongoose.default.Schema.Types.Int32 = Int32;
  }
  if (typeof import_mongoose.default.SchemaTypes === "object") {
    import_mongoose.default.SchemaTypes.Int32 = Int32;
  }
  if (typeof import_mongoose.default.Types === "object") {
    import_mongoose.default.Types.Int32 = Int32;
  }
})();
var index_default = Int32;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Int32
});
