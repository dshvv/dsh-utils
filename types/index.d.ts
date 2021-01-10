
interface getArrAdjParams {
	/** 数据源 */
	arr: Array<any>;
	/** next or prev  上一个或者下一个 */
	type: string; 
	/** 当前激活的元素索引 与 currentItem组成可选 */
	currentIndex: Number;
	/** 当前激活的元素 */
	currentItem: any;
	/** 是否闭环取值，还是循环取值素 */
	circular: boolean;
}

interface isLeftSlideParams {
	/** 数据源 */
 	arr: Array<any>;
	/** 当前激活的元素索引 与 oldVal组成可选, */
	oldIndex: Number;
	/** 当前激活的元素索引 与 newVal组成可选 */
	newIndex: Number;
	/** 当前激活的元素 */
	oldVal: any;
	/** 即将激活的元素 */
	newVal: any;
}


declare module DshUtils {
	/** 查找数组的上一个或者下一个元素 */
	function getArrAdj(params: getArrAdjParams): any
	/** Swiper循环的数组中，根据当前active和下一个的index判断是否向左滑动 **/
	function isLeftSlide(params: isLeftSlideParams): any
	/** 根据开始时间-结束时间， 以及间隔分钟。返回一个间隔时间点的数组 **/
	function getDateArray(startDate: any, endDate: any, space: number): any
}


export default DshUtils;
