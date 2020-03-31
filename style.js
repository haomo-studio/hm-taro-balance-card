import Taro from '@tarojs/taro';
export default {
  hmBalanceCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    width: Taro.pxTransform(750),
    height: Taro.pxTransform(527)
  },
  box: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'column',
    width: Taro.pxTransform(720),
    height: Taro.pxTransform(484)
  },
  layer: {
    position: 'absolute',
    top: Taro.pxTransform(0),
    alignSelf: 'center',
    width: Taro.pxTransform(720),
    height: Taro.pxTransform(484),
    overflow: 'hidden'
  },
  hd: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: Taro.pxTransform(32),
    marginLeft: Taro.pxTransform(54),
    width: Taro.pxTransform(634),
    height: Taro.pxTransform(52)
  },
  info: {
    maxWidth: Taro.pxTransform(569),
    height: Taro.pxTransform(26),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(26),
    whiteSpace: 'nowrap',
    color: 'rgba(19,19,21,0.50)',
    fontSize: Taro.pxTransform(21),
    fontWeight: 400
  },
  wrap: {
    display: 'flex',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'rgba(28,143,248,0.00)',
    width: Taro.pxTransform(52),
    height: Taro.pxTransform(52)
  },
  empty: {
    position: 'absolute',
    top: Taro.pxTransform(20),
    left: Taro.pxTransform(19),
    borderWidth: '2px',
    borderStyle: 'solid',
    borderRadius: Taro.pxTransform(10),
    borderColor: 'rgba(255, 255, 255, 1.00)',
    width: Taro.pxTransform(13),
    height: Taro.pxTransform(13)
  },
  zhanghaoguanli: { position: 'relative', width: Taro.pxTransform(38), height: Taro.pxTransform(38) },
  bd: {
    position: 'relative',
    opacity: 1,
    marginTop: Taro.pxTransform(4),
    marginLeft: Taro.pxTransform(54),
    maxWidth: Taro.pxTransform(653),
    height: Taro.pxTransform(75),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(75),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontFamily: 'MicrosoftYaHei, Microsoft YaHei',
    fontSize: Taro.pxTransform(70),
    fontWeight: 'normal'
  },
  main: {
    position: 'relative',
    opacity: 1,
    marginTop: Taro.pxTransform(133),
    marginLeft: Taro.pxTransform(54),
    maxWidth: Taro.pxTransform(653),
    height: Taro.pxTransform(37),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(37),
    whiteSpace: 'pre',
    color: '#ffffff',
    fontFamily: 'MicrosoftYaHei, Microsoft YaHei',
    fontSize: Taro.pxTransform(32),
    fontWeight: 'normal'
  },
  ft: {
    display: 'flex',
    position: 'relative',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: Taro.pxTransform(35),
    marginLeft: Taro.pxTransform(54),
    height: Taro.pxTransform(67)
  },
  block: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginRight: Taro.pxTransform(84),
    height: Taro.pxTransform(67)
  },
  date: {
    position: 'relative',
    maxWidth: Taro.pxTransform(69),
    height: Taro.pxTransform(26),
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    lineHeight: Taro.pxTransform(26),
    whiteSpace: 'nowrap',
    color: 'rgba(19,19,21,0.60)',
    fontFamily: 'MicrosoftYaHei, Microsoft YaHei',
    fontSize: Taro.pxTransform(21),
    fontWeight: 'normal'
  },
  word: {
    position: 'relative',
    opacity: 1,
    marginTop: Taro.pxTransform(4),
    lineHeight: Taro.pxTransform(37),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontFamily: 'MicrosoftYaHei, Microsoft YaHei',
    fontSize: Taro.pxTransform(32),
    fontWeight: 'normal'
  },
  group: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginRight: Taro.pxTransform(341),
    height: Taro.pxTransform(67)
  },
  cvv: {
    position: 'relative',
    lineHeight: Taro.pxTransform(26),
    whiteSpace: 'nowrap',
    color: 'rgba(19,19,21,0.60)',
    fontFamily: 'MicrosoftYaHei, Microsoft YaHei',
    fontSize: Taro.pxTransform(21),
    fontWeight: 'normal'
  },
  num: {
    position: 'relative',
    opacity: 1,
    marginTop: Taro.pxTransform(4),
    lineHeight: Taro.pxTransform(37),
    whiteSpace: 'nowrap',
    color: '#ffffff',
    fontFamily: 'MicrosoftYaHei, Microsoft YaHei',
    fontSize: Taro.pxTransform(32),
    fontWeight: 'normal'
  },
  largeIcon: { marginTop: Taro.pxTransform(18), width: Taro.pxTransform(73), height: Taro.pxTransform(43) }
};
