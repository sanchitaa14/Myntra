import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { TouchableOpacity } from 'react-native-web'

const FormField = ( {title, value, placeholder, handleChangeText, otherStyles, ...props}) => {

    const [showPassword, setshowPaswword] = useState(false)
  return (
    <View className="space-y-2">
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="border-2 w-full h-16 px-4 bg-slate-400 roundede-2xl focus: border-secondary items-center flex-row">
        <TextInput 
        className="flex-1 text-black font-psemibold text-base"
        value={value}
        placeholder={placeholder}
        placeholderTextColor="#7b7b8b"
        onChangeText={handleChangeText}
        secureTextEntry={title === 'Password' && !showPassword}
        />

        {title === 'Password' && (
            <TouchableOpacity onPress={() =>
                setshowPaswword(!showPassword)
                // <Image source={!showPassword ? icons.eye : icons.eyehide} className="w-6 h-6" resizeMode='contain'/>
            }>

            </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

export default FormField