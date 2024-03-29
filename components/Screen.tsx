/**
 * Screen
 */

import React from "react";
import { Stack } from "expo-router";
import { KeyboardAvoidingView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useTheme } from "react-native-paper";
import Styles from "../styles";
import Message from "./Message";
import { ScreenProps } from "../types";
import LoadingIndicator from "./LoadingIndicator";

export default function Screen(props: ScreenProps) {
  // Theme
  const theme = useTheme();

  return (
    <KeyboardAvoidingView style={Styles.screen}>
      <Stack.Screen
        options={{
          ...props.options,
          animation: "slide_from_right",
        }}
      />
      <StatusBar animated style={theme.dark ? "light" : "dark"} />
      {props.loading ? <LoadingIndicator /> : props.children}

      <Message
        message={props.message || ""}
        visible={props.displayMessage || false}
        onDismiss={() =>
          props.onDismissMessage !== undefined
            ? props.onDismissMessage()
            : () => {}
        }
      />
    </KeyboardAvoidingView>
  );
}
