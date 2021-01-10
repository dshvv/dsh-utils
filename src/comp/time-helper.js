// 根据开始时间-结束时间， 以及间隔分钟。返回一个间隔时间点的数组
export const getDateArray = (startDate, endDate, space) =>{
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
}