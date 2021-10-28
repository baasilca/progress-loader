import * as React from 'react';
import { ActivityIndicator, Platform, View } from 'react-native';
import { Paragraph, Colors, Portal, Dialog, Provider } from 'react-native-paper';

const isIOS = Platform.OS === 'ios';

export default function App({
  visible,
  close,
  title = 'Loading.....',
}) {
  return (
    <Provider>
      <Portal>
        <Dialog onDismiss={close} visible={visible}>
          <Dialog.Content>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <ActivityIndicator
                color={Colors.indigo500}
                size={isIOS ? 'large' : 48}
                style={{ marginRight: 16 }}
              />
              <Paragraph>{title}</Paragraph>
            </View>
          </Dialog.Content>
        </Dialog>
      </Portal>
    </Provider>
  )
}
