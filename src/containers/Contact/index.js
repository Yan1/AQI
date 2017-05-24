import React, { Component } from 'react'
import { Modal, Button } from 'antd'

export default class Contact extends Component {
    constructor(props) {
      super(props)
      this.state = {
        weixinModalVisible: false
      }
    }

    handleWeixinModal = (needShow) => {
      return () => {
        this.setState({
          weixinModalVisible: needShow
        })
      }
    }
    
    render() {
        return(
            <div className="contact">
                <h1 className="contact-title">Contact</h1>
                <div className="contact-content">
                    <div className="main-item">
                      <div className="item-icon">
                          <i className="iconfont icon-weixin"></i>
                          <div className="item-content">微信：xxxx</div>
                      </div>
                    </div>
                </div>
                <div className="contact-other">
                </div>
                <div>
                  <Button type="primary" onClick={ this.handleWeixinModal(true) }>Open a modal dialog</Button>
                  <Modal title="Basic Modal"
                    footer=""
                    onCancel={ this.handleWeixinModal(false) }
                    visible={ this.state.weixinModalVisible }>
                    <p>some contents...</p>
                    <p>some contents...</p>
                    <p>some contents...</p>
                  </Modal>
                </div>
            </div>
        )
    }
}
