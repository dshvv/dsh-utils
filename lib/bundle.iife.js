var dshUtils = (function (exports) {
    'use strict';

    /*
     *@description: 查找数组的上一个或者下一个元素
     *@author:  丁少华
     *@date: 2020-12-31 11:11:12
     */
    const getArrAdj = (param) => {
        const { arr, type = 'next', currentIndex, currentItem, circular = true } = param;
        // 如果没有传当前元素的index只传了item，我们找到item的index即可
        if (!currentIndex && currentItem) {
            currentIndex = arr.findIndex(item => item === currentItem);
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
    };

    /*
     *@description: Swiper循环的数组中，根据当前active和下一个的index判断是否向左滑动
     *@author:  丁少华
     *@date: 2020-1-4 9:00:00
     */
    const isLeftSlide = (params) => {
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

    var arrayHelper = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getArrAdj: getArrAdj,
        isLeftSlide: isLeftSlide
    });

    const getStorage = (key)=>{
        const resStr = localStorage.getItem(key);
        return JSON.parse(resStr);
    };

    var storageHelper = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getStorage: getStorage
    });

    // 根据开始时间-结束时间， 以及间隔分钟。返回一个间隔时间点的数组
    const getDateArray = (startDate, endDate, space) =>{
        if (!endDate) {
            endDate = new Date();
        }
        if (!startDate) {
            startDate = new Date(new Date().getTime() - 1 * 60 * 60 * 1000);
        }
        if (!space) {
            space = 30 * 60 * 1000;
        } else {
            space = space * 60 * 1000;
        }
        var endTime = endDate.getTime();
        var startTime = startDate.getTime();
        var mod = endTime - startTime;
        if (mod < space) {
            console.log("时间太短");
            return;
        }
        var dateArray = [];
        while (mod >= space) {
            var d = new Date();
            d.setTime(startTime + space);
            dateArray.push(d);
            mod = mod - space;
            startTime = startTime + space;
        }
        var end = endDate.getTime();
        var start = startDate.getTime();
        dateArray.unshift(new Date(start)); // 插入开头时间
        // 正序
        return dateArray.sort(function (a, b) {
            return Date.parse(b) - Date.parse(a);
        });
    };

    var timeHelper = /*#__PURE__*/Object.freeze({
        __proto__: null,
        getDateArray: getDateArray
    });

    // 导入所有
    var index = {
        ...arrayHelper,
        ...storageHelper,
        ...timeHelper
    };

    exports.default = index;
    exports.getArrAdj = getArrAdj;
    exports.getDateArray = getDateArray;
    exports.getStorage = getStorage;
    exports.isLeftSlide = isLeftSlide;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}));
//# sourceMappingURL=bundle.iife.js.map
