import { useEffect, useRef, useState } from "react";


export interface useScrollDetectionProps {
    
}

export const useScrollDetection = (props: useScrollDetectionProps) => {
    const {  } = props
    const [containerHeight, setContainerHeight] = useState(0);
    const [contentHeight, setContentHeight] = useState(0);
    const [isScrollEnabled, setIsScrollEnabled] = useState(false);
    const scrollViewRef = useRef(null);

    const onLayout = (event: any) => {
        const { height } = event.nativeEvent.layout;
        setContainerHeight(height);
    };

    const onContentSizeChange = (contentWidth: number, contentHeight: number) => {
        setContentHeight(contentHeight);
    };

    useEffect(() => {
        const checkScrollEnabled = () => {
            if (containerHeight > 0 && contentHeight > 0) {
                setIsScrollEnabled(containerHeight < contentHeight);
            }
        };
        checkScrollEnabled();
    }, [containerHeight, contentHeight])
    

    return {
        scrollViewRef,
        onLayout,
        onContentSizeChange,
        isScrollEnabled,
        containerHeight,
        contentHeight
    }
}