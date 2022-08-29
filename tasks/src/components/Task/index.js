import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Feather } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import { styles } from "./styles";
import { colors } from "../../styles/colors";

export function Task({data, action}) {
  return (
    <Swipeable
      renderRightActions={() => (
        <TouchableOpacity 
          style={styles.containerDelete}
          onPress={() => action(data.id)}
        >
          <Feather 
            name={data.isFinished ? 'trash-2' : 'check-circle'} 
            size={35} 
            color={data.isFinished ? colors.RED_PRIMARY : colors.BLUE_SECONDARY }
          />
        </TouchableOpacity>
      )}
      containerStyle={{
        paddingHorizontal: 20,
        marginTop: 10
      }}
    >
      <TouchableOpacity 
        style={[styles.container,  data.isFinished && {backgroundColor: colors.GRAY_SECONDARY}]}
      >
        <Text 
          style={[styles.title, data.isFinished && {color: colors.GRAY_PRIMARY}]}
        >
          {data?.content}
        </Text>
      </TouchableOpacity>
    </Swipeable>
  )
}