import React from 'react'
import RcUpload from 'rc-upload'

class Upload extends React.Component {
  constructor(props) {
    super(props)
    this.uploaderProps = {
      action: '',
      data: { a: 1, b: 2 },
      headers: {
        Authorization: 'xxxxxxx',
      },
      multiple: true,
      beforeUpload(file) {
        console.log('beforeUpload', file.name)
      },
      onStart: (file) => {
        console.log('onStart', file.name)
      },
      onSuccess(file) {
        console.log('onSuccess', file)
      },
      onProgress(step, file) {
        console.log('onProgress', Math.round(step.percent), file.name)
      },
      onError(err) {
        console.log('onError', err)
      },
    }
  }
  render() {
    return (
          <RcUpload {...this.uploaderProps} component="div" style={{ display: 'inline-block' }}>
            <a>upload</a>
          </RcUpload>)
  }
}

export default Upload
