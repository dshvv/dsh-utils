// 判断是不是json字符串
export const isJsonStr = (str) => {
    if (typeof str == 'string') {
        try {
            var obj = JSON.parse(str);
            if (typeof obj == 'object' && obj) {
                return true;
            } else {
                return false;
            }
        } catch (e) {
            console.log('error：' + str + '!!!' + e);
            return false;
        }
    }
};

// 判断是不是json
export const isJson = (data) => {
    const typeofRes = typeof (data) == "object";
    const toStringRes = Object.prototype.toString.call(data).toLowerCase() == "[object object]";
    const isLen = !(data && data.length);
    return typeofRes && toStringRes && isLen;
}