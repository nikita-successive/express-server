import { diamond,equilateral,pyramid } from "./pattern";
import {hasPermission,validateUsers} from "./utils";
var res=hasPermission('getusers','trainee','read');
console.log(res);
