Component({
  properties: {
    //验证码个数
    codeNum: {
      type: Number,
      value: 4
    },
    autoFocus: Boolean
  },
  observers: {
    autoFocus: function () {
      this.setData({
        isFocus: this.data.autoFocus
      })
    }
  },
  data: {
    code: "",
    isFocus: false,
  },
  methods: {
    focus() {
      if (!this.data.isFocus) {
        this.setData({
          isFocus: true
        });
      }

    },
    onBlur() {
      this.data.isFocus = false;
    },
    onInput(e) {
      if (this.data.code.length === this.data.codeNum && e.detail.value.length === this.data.codeNum) return;

      this.setData({
        code: e.detail.value
      });
      this.triggerEvent('change', e.detail.value);
    }
  }
})