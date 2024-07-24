import { mergeResolvers } from "@graphql-tools/merge";


import userResolver from "./user.resolver.js";


const mergedResolvers = mergeResolvers([userResolver]);

export default mergedResolvers;