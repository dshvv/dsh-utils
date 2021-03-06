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
            return circular ? arr[0] : false;
        } else {
            return arr[currentIndex + 1]
        }
    } else {
        // 如果到达边界
        if (currentIndex === 0) {
            // 循环，则下一个是数组的终点元素
            return circular ? arr[arr.length - 1] : false;
        } else {
            return arr[currentIndex - 1]
        }
    }
}

/*
 *@description: Swiper循环的数组中，根据当前active和下一个的index判断是否向左滑动
 *@author:  丁少华
 *@date: 2020-1-4 9:00:00
 */
export const isLeftSlide = (params) => {
    let { arr, oldIndex, newIndex, oldVal, newVal } = params;
    // 如果没有传递索引，从arr+val来取到索引(val仅支持基本类型)
    if (oldIndex === '' || oldIndex == null) {
        oldIndex = arr.findIndex(item => item === oldVal);
        newIndex = arr.findIndex(item => item === newVal);
    }
    // 除了末尾的下一个是第一个，其余的均是比较新旧索引
    if (oldIndex === arr.length - 1) {
        return newIndex === 0
    } else if (oldIndex === 0) {
        return newIndex !== 2
    } else {
        return newIndex > oldIndex
    }
};
