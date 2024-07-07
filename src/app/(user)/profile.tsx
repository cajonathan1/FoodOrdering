import { supabase } from '@/lib/supabase'
import { Stack } from 'expo-router'
import { View, Text, Button } from 'react-native'

const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>

      <Button title='Sign out' onPress={async () => await supabase.auth.signOut()} />
    </View>
  )
}

export default ProfileScreen