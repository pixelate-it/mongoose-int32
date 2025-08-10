// src/index.ts
import mongoose from "mongoose";
var INT32_MAX = 2147483647;
var INT32_MIN = -2147483648;
var Int32 = class extends mongoose.SchemaType {
  constructor(key, options) {
    super(key, options, "Int32");
  }
  cast(val) {
    if (val == null) {
      return val;
    }
    let _val = Number(val);
    if (isNaN(_val)) {
      throw new mongoose.Error(`${val} is not a number`);
    }
    _val = Math.round(_val);
    if (_val < INT32_MIN || _val > INT32_MAX) {
      throw new mongoose.Error(
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
Int32.prototype.$conditionalHandlers = mongoose.Schema.Types.Number.prototype.$conditionalHandlers;
(function registerInt32() {
  if (mongoose.Schema && typeof mongoose.Schema.Types === "object") {
    mongoose.Schema.Types.Int32 = Int32;
  }
  if (typeof mongoose.SchemaTypes === "object") {
    mongoose.SchemaTypes.Int32 = Int32;
  }
  if (typeof mongoose.Types === "object") {
    mongoose.Types.Int32 = Int32;
  }
})();
var index_default = Int32;
export {
  Int32,
  index_default as default
};
