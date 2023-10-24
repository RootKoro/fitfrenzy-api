import React from "react"
import { View, ViewStyle } from "react-native"

export interface SeparatorProps {
    width?: number | string
    height?: number | string
    color?: string
}
const separatorStyle: ViewStyle = {
    height: 10,
    width: '100%',
    backgroundColor: '#ddd',
}
export const Separator = (props: SeparatorProps) => {
    const { width = '100%', height = 1, color = '#ddd' } = props

    return <View style={{ height, width, backgroundColor: color } as ViewStyle} ></View>
}