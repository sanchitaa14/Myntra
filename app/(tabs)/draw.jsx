import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Canvas } from 'expo-2d-context';

const DrawingCanvas = () => {
  const drawOnCanvas = (ctx) => {
    // Drawing operations using CanvasRenderingContext2D methods
    ctx.fillStyle = 'red';
    ctx.fillRect(10, 10, 50, 50);
  };

  return (
    <View style={styles.container}>
      <Canvas draw={drawOnCanvas} style={styles.canvas} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  canvas: {
    width: 200,
    height: 200,
  },
});

export default DrawingCanvas;
