/**
 * @param e 
 * @returns string
 * event.target 这是一个 HTMLElement 它是所有 HTML 元素的父元素，但不保证具有属性 value 。 
   TypeScript 检测到这一点并抛出错误。将 event.target 转换为适当的 HTML 元素，
   以确保它是 HTMLInputElement 它确实具有 value 属性：
 */
export function getInputValue(e: Event) {
    return (e.target as HTMLInputElement).value;
}