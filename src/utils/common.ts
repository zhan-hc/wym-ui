/**
 *  转换播放量
 * @param num 数值
 */
export function formatCount(num: number): string  {
  let str = String(num)
  const length = str.length
  if (length > 5 && length < 9) {
    str = str.substring(0, length - 4) + "万"
  } else if (length >= 9) {
    str = str.substring(0, length - 8) + "亿"
  }
  return str
}

  /**
 * Get Middle Value
 *
 * @param num to judge the value
 * @param min min value, default value 0
 * @param max max value, default value 100
 * @returns middle value
 */
export function middleNum (num: number, min = 0, max = 100): number {
  let middle = 0;
  middle = Math.min(num, max);
  middle = Math.max(middle, min);
  return middle;
}
