/*
 *@description: 查找数组的上一个或者下一个元素
 *@author:  丁少华
 *@date: 2020-12-31 11:11:12
 */

export const getArrAdj = (param) => {
    const { arr, type = 'next', currentIndex, currentItem, circular = true } = param;
    // 如果没有传当前元素的index只传了item，我们找到item的index即可
    if (!currentIndex && currentItem) {
        currentIndex = arr.findIndex(item => item === currentItem)
    }

    if (type === 'next') {
        // 如果到达边界
        if (currentIndex && currentIndex === arr.length - 1) {
            // 循环，则下一个是数组的起点元素
            return circular?arr[0]: false;
        } else {
            return arr[currentIndex + 1]
        }
    } else {
        // 如果到达边界
        if (currentIndex === 0) {
            // 循环，则下一个是数组的终点元素
            return circular?arr[arr.length - 1]:false;
        } else {
            return arr[currentIndex - 1]
        }
    }
}