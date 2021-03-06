import * as arrayHelper from './comp/array-helper.js';
import * as storageHelper from './comp/storage-helper.js';
import * as timeHelper from './comp/time-helper.js';
import * as otherHelper from './comp/other-helper.js';

// 按需导入
export * from './comp/array-helper.js';
export * from './comp/storage-helper.js';
export * from './comp/time-helper.js';
export * from './comp/other-helper.js';

// 导入所有
export default {
    ...arrayHelper,
    ...storageHelper,
    ...timeHelper,
    ...otherHelper
}