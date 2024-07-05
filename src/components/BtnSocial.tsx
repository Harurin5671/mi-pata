import React from 'react'
import {
  Image,
  TouchableWithoutFeedback,
  View,
  type GestureResponderEvent,
  type ImageSourcePropType
} from 'react-native'

interface BtnSocialProps {
  onPress: (event: GestureResponderEvent) => void
  imageSource: ImageSourcePropType
}

const BtnSocial: React.FC<BtnSocialProps> = ({ onPress, imageSource }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View
        style={{
          width: 60,
          height: 60,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 40,
          // Sombra para iOS
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 2
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 8,
          marginRight: 15
        }}
      >
        <Image
          source={imageSource}
          style={{ height: 40, width: 40 }}
          resizeMode="contain"
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

export default BtnSocial
