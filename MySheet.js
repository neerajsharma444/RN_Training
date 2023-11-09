import React from 'react';
import ActionSheet, {
  SheetManager,
  SheetProps,
  registerSheet,
} from 'react-native-actions-sheet';

function MySheet(props: SheetProps) {
  return (
    <ActionSheet id={props.sheetId}>
      <View>
        <Text>Hello World</Text>
      </View>
    </ActionSheet>
  );
}

// Register your Sheet component.
registerSheet('mysheet', MySheet);

export default MySheet;
