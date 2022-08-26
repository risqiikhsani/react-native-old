import * as React from 'react'
import {
    Text,
    Link,
    HStack,
    Center,
    Heading,
    Switch,
    useColorMode,
    NativeBaseProvider,
    extendTheme,
    VStack,
    Box,
  } from "native-base";

  import BaseBox from '../BaseBox';
import BaseVStack from '../BaseVStack';

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      {console.log(colorMode)}
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}


export default function SettingScreen({navigation}){
    return(
      <BaseBox>
      <BaseVStack>
      <ToggleDarkMode />
      </BaseVStack>
      </BaseBox>
        
    )
}


  