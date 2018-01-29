import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  Modal,
} from 'react-native';


export default class CheckoutDialog extends Component {
  static defaultProps = {
    visible: false,
    subTitle: '',
    defaultValue: '',

};


render() {
    return (
      <Modal
        onDismiss={this.handleClose}
        transparent={true}
        visible={this.state.visible}
        animationType="fade"
        onRequestClose={this.handleClose}
      >
        {this.renderContent()}
      </Modal>
    );
  }

renderContent = () => {

};
}