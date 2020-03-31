'use strict';

import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

import styles from './style.js';

class HmBalanceCard extends Component {
  constructor(props) {
    super(props);
    let defaultState = {
      layer: "'./images/img_25821_0_0.png'",
      info: '信用卡余额',
      zhanghaoguanli: "'./images/img_25821_0_2.png'",
      bd: '¥12929.05',
      main: '5326 5149 4497 1577',
      date: '日期',
      word: '12/24',
      cvv: 'CVV',
      num: '235',
      largeIcon: "'./images/img_25821_0_1.png'"
    };
    this.state = Object.assign(defaultState, JSON.parse(JSON.stringify(props)));
  }

  render() {
    return (
      <View style={styles.hmBalanceCard}>
        <View style={styles.box}>
          <Image style={styles.layer} src={this.state.layer} />
          <View style={styles.hd}>
            <Text style={styles.info}>{this.state.info}</Text>
            <View style={styles.wrap}>
              <View style={styles.empty} />
              <Image style={styles.zhanghaoguanli} src={this.state.zhanghaoguanli} />
            </View>
          </View>
          <Text style={styles.bd}>{this.state.bd}</Text>
          <Text style={styles.main}>{this.state.main}</Text>
          <View style={styles.ft}>
            <View style={styles.block}>
              <Text style={styles.date}>{this.state.date}</Text>
              <Text style={styles.word}>{this.state.word}</Text>
            </View>
            <View style={styles.group}>
              <Text style={styles.cvv}>{this.state.cvv}</Text>
              <Text style={styles.num}>{this.state.num}</Text>
            </View>
            <Image style={styles.largeIcon} src={this.state.largeIcon} />
          </View>
        </View>
      </View>
    );
  }
}
export default HmBalanceCard;
