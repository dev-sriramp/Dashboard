import React ,{useState} from 'react';
import {SafeAreaView, StyleSheet, StatusBar, View,Text} from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoidW5pcXVlcmVkaGF0IiwiYSI6ImNrb28wNXR0cTA1bzIyb29oZGsxZzQ2Zm8ifQ.063Pn5OcpuWQUKzTWU-MXg',
);

const MapScreen = () => {
    const [coordinates, setCoordinates] = useState(null);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={styles.container}>
          <MapboxGL.MapView style={styles.map}
          onPress={event => setCoordinates(event.geometry.coordinates)}>
            <MapboxGL.Camera
              zoomLevel={8}
              centerCoordinate={[77.3105389,11.1817331]}
            />
            <MapboxGL.PointAnnotation
              id="Jack Stack"
              coordinate={[77.3105389,11.1817331]}
            />
          </MapboxGL.MapView>
          {coordinates ? (
            <View style={styles.coordinateViewContainer}>
              <View style={styles.coordinateView}>
                <Text>
                  {coordinates[0]}, {coordinates[1]}
                </Text>
              </View>
            </View>
          ) : null}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
  coordinateViewContainer: {
    position: 'absolute',
    bottom: 0,
    padding: 5,
    width: '100%',
    backgroundColor: 'transparent',
  },
  coordinateView: {
    padding: 5,
    backgroundColor: '#fff',
    flex: 1,
  },
});

export default MapScreen;