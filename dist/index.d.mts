import mongoose from 'mongoose';

declare module "mongoose" {
    namespace Types {
        class Int32 extends mongoose.SchemaType {
        }
    }
}
declare class Int32 extends mongoose.SchemaType {
    static INT32_BSON_TYPE: number;
    static INT32_MAX: number;
    static INT32_MIN: number;
    static instance: string;
    static schemaName: "Int32";
    static defaultOptions: Record<string, any>;
    constructor(key: string, options?: mongoose.SchemaTypeOptions<any>);
    cast(val: any): number | null | undefined;
}

export { Int32, Int32 as default };
