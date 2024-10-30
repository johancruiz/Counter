import { StyleSheet, View } from 'react-native'

const FlexDirectionScreen = () => {
  return (
    <View style={ styles.container } >
      <View style={ [styles.box1, styles.box] } />
      <View style={ [styles.box2, styles.box]}   />
      <View style={ [styles.box3, styles.box]}  />
      <View style={ [styles.box4, styles.box]}  />
      <View style={ [styles.box1, styles.box] } />
      <View style={ [styles.box2, styles.box]}   />
      <View style={ [styles.box3, styles.box]}  />
      <View style={ [styles.box4, styles.box]}  />
      <View style={ [styles.box1, styles.box] } />
      <View style={ [styles.box2, styles.box]}   />
      <View style={ [styles.box3, styles.box]}  />
      <View style={ [styles.box4, styles.box]}  />
      <View style={ [styles.box2, styles.box]}   />
      <View style={ [styles.box3, styles.box]}  />
      <View style={ [styles.box4, styles.box]}  />
      <View style={ [styles.box1, styles.box] } />
      <View style={ [styles.box2, styles.box]}   />
      <View style={ [styles.box3, styles.box]}  />
      <View style={ [styles.box4, styles.box]}  />
      <View style={ [styles.box1, styles.box] } />
      <View style={ [styles.box2, styles.box]}   />
      <View style={ [styles.box3, styles.box]}  />
      <View style={ [styles.box4, styles.box]}  />
      <View style={ [styles.box2, styles.box]}   />
      <View style={ [styles.box3, styles.box]}  />
      <View style={ [styles.box4, styles.box]}  />
      <View style={ [styles.box1, styles.box] } />
      <View style={ [styles.box2, styles.box]}   />
      <View style={ [styles.box3, styles.box]}  />
      <View style={ [styles.box4, styles.box]}  />
      <View style={ [styles.box1, styles.box] } />
      <View style={ [styles.box2, styles.box]}   />
      <View style={ [styles.box3, styles.box]}  />
      <View style={ [styles.box4, styles.box]}  />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d1d1',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 10
  },
  box: {
    height: 100,
    width: 100
  },
  box1: {
    backgroundColor: '#5856D6',
  },
  box2: {
    backgroundColor: '#4240A2',
    alignSelf: 'flex-start'
  },
  box3: {
    backgroundColor: '#2e2d71',
  },
  box4: {
    backgroundColor: '#2e2e71',
  }
})

export default FlexDirectionScreen
