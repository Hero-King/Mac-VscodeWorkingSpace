/**
 * 文件里存放所有的生成actiond对象的工厂函数
 */

export const readAll = () => ({
    type: 'readAll',
    
})
export const decrement = (number) => ({
    type: 'decrement',
    data: number
})