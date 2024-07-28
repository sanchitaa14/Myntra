import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
import FormField from '../../components/FormField'
// import CustomButton from '../../components/CustomButton'
const SignIn = () => {

  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  return (
    <SafeAreaView className="bg-purple-100">
      <ScrollView>
        <View className="flex-1 justify-center items-center">
          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Login To Myntra
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e})}
            otherStyles ="mt-7"
            keyboardType ="email-address" //used for auto filling information
          />
          <FormField
          title="password"
          value={form.password}
          handleChangeText={(e) => setForm({ ...form, email: e})}
          otherStyles ="mt-7"
          keyboardType ="password" //used for auto filling information
        />
        <CustomButton
          title="Sign In"
          handlePress={submit}
          containerStyles="mt-7"
          isLoading={isSubmitting}
        />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})