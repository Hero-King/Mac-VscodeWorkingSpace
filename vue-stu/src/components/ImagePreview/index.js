import Vue from 'vue'
import ElImagePreview from 'element-ui/packages/image/src/image-viewer'
import DownloadIcon from './DownloadIcon.vue'
const ImagePreviewCtor = Vue.extend(ElImagePreview)
const DownloadIconCtor = Vue.extend(DownloadIcon)

let ins = null
let icon = null
export default function Preview(opts) {
  if (!ins) {
    ins = new ImagePreviewCtor()
  }
  const close = opts.onClose
  opts.onClose = function() {
    ins.$el?.remove()
    close && close()
  }
  Object.keys(opts).forEach((key) => {
    ins[key] = opts[key]
    if (key == 'fileList') {
      ins.urlList = opts[key].map((i) => i.url)
    }
  })
  ins.$mount()
  document.body.appendChild(ins.$el)
  Vue.nextTick(() => {
    if (!icon) {
      icon = new DownloadIconCtor()
    }
    icon.$mount()
    icon.$parent = ins
    ins.$el.appendChild(icon.$el)
  })
  return ins
}

Preview.install = function(Vue) {
  Vue.prototype.$MyImagePreview = Preview
}
