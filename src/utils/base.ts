const baseMixin = {
  methods: {
    // 转换播放量等数据
    formatCount(num: number): string {
      let str = String(num);
      const length = str.length;
      if (length > 5 && length < 9) {
        str = str.substring(0, length - 4) + "万";
      } else if (length >= 9) {
        str = str.substring(0, length - 8) + "亿";
      }
      return str;
    },
  },
};

export default baseMixin;
