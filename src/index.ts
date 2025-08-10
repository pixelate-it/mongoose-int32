import mongoose from "mongoose";

declare module "mongoose" {
    namespace Types {
        class Int32 extends mongoose.SchemaType {}
    }
}

const INT32_MAX = 0x7fffffff;
const INT32_MIN = -0x80000000;

export class Int32 extends mongoose.SchemaType {
    static INT32_BSON_TYPE = 16;
    static INT32_MAX = INT32_MAX;
    static INT32_MIN = INT32_MIN;

    static instance = "Int32";
    static schemaName: "Int32" = "Int32";

    static defaultOptions: Record<string, any> = {};

    constructor(key: string, options?: mongoose.SchemaTypeOptions<any>) {
        super(key, options, "Int32");
    }

    cast(val: any): number | null | undefined {
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
}

Int32.prototype.$conditionalHandlers =
    mongoose.Schema.Types.Number.prototype.$conditionalHandlers;

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

export default Int32;
