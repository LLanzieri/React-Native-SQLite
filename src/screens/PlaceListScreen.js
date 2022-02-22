import * as addressAction from '../store/places.actions'

import { FlatList, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import PlaceItem from '../components/PlaceItem/index'

const PlaceListScreen = ({ navigation }) => {
    const dispatch = useDispatch();
    
    // Traigo de la store todos los lugares que tengo guardados
    const places = useSelector(state => state.places.places);
    console.warn(places);

    useEffect(() => {
        dispatch(addressAction.loadPlaces());
    }, [])

    const onSelectDetail = () => {
        navigation.navigate('Detalle')
    }

    const renderItem = ({ item }) => (
        <PlaceItem
            title={item.title}
            image={item.image}
            address={item.address}
            onSelect={onSelectDetail}
        />
    )

    return (
        <FlatList
            data={places}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default PlaceListScreen
