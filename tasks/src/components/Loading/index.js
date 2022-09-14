import React from "react";
import { View, ActivityIndicator, Text } from "react-native";

import { styles } from "./styles";
import { colors } from "../../styles";

export function Loading({text}) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={colors.BLUE_SECONDARY} />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}