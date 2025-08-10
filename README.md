# mongoose-int32

Mongoose type for storing MongoDB int32 [(bson type 16)](http://bsonspec.org/spec.html)

# Usage

Requires `mongoose >= 4.4.0`. Do not use with mongoose 3.x.

```javascript
const mongoose = require("mongoose");
const Int32 = require("mongoose-int32").loadType(mongoose);
```
