import React from 'react'
import { Stack } from 'expo-router';
import { Text, View } from 'react-native'

const LayoutModal = () => {
	return (
		<Stack
			screenOptions={{
				headerShown: false
			}}
		>
      <Stack.Screen name="index" />
      <Stack.Screen
        name="modal-window"
        options={{
          presentation: 'modal',
        }}
      />
			<Stack.Screen
        name="modal-window-two"
        options={{
          presentation: 'modal',
        }}
      />
    </Stack>
	)
}

export default LayoutModal;