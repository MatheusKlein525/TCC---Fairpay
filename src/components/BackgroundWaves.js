import React from 'react';
import { View, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function BackgroundWaves() {
  return (
    <View style={styles.container} pointerEvents="none">

      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 400 800"
        preserveAspectRatio="none"
      >

        {/* Onda verde superior esquerda */}
        <Path
          d="M0 55 C55 20, 85 75, 145 45 C190 22, 220 50, 260 25"
          fill="none"
          stroke="#8FE8C1"
          strokeWidth="1"
        />

        {/* Onda verde superior direita */}
        <Path
          d="M400 0 C365 30, 375 50, 400 65"
          fill="none"
          stroke="#8FE8C1"
          strokeWidth="1"
        />

        {/* Onda verde inferior esquerda */}
        <Path
          d="M0 745 C55 710, 85 765, 140 735 C185 710, 220 750, 260 720"
          fill="none"
          stroke="#8FE8C1"
          strokeWidth="1"
        />

        {/* Onda azul inferior */}
       <Path
  d="M0 760 C65 720, 105 785, 165 750 C215 720, 270 790, 330 750 C360 730, 380 740, 400 725 L400 800 L0 800 Z"
  fill="#1717E8"
/>

        {/* Onda azul clara */}
        <Path
          d="M0 755 C65 715, 105 775, 165 745 C215 715, 270 780, 330 745 C360 725, 380 735, 400 720"
          fill="none"
          stroke="#1720FF"
          strokeWidth="3"
        />

      </Svg>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',

    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    zIndex: 0,
  },
});