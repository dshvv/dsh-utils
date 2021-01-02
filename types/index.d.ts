
interface getArrAdjParams {
	arr: Array<any>; // 数组
	type: string; // next/prev  上一个或者下一个
	currentIndex: Number;// 当前激活的元素索引 与 currentItem组成可选
	currentItem: any;// 当前激活的元素
	circular: boolean; // 是否闭环取值，还是循环取值
}


declare module DshUtils {
	function getArrAdj(params: getArrAdjParams): any
}


export default DshUtils;
