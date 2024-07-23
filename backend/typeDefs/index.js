import { mergeTypeDefs } from "@graphql-tools/merge";

import userTypeDef from "./user.typeDefs.js";
import transactionTypeDef from "./transaction.typeDef.js";

const  mergedTypeDefs = mergeTypeDefs([userTypeDef, transactionTypeDef]);

export default mergedTypeDefs;