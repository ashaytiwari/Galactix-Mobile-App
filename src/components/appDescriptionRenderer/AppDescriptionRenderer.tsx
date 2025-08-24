import React, { useState } from 'react';
import { View, Text, LayoutChangeEvent, useWindowDimensions, TouchableOpacity } from 'react-native';

import RenderHTML from 'react-native-render-html';

import { IAppDescriptionRendererProps } from '@interfaces/uiInterfaces/generic';

import styles from './AppDescriptionRenderer.styles';

const MAX_HEIGHT = 65;

const AppDescriptionRenderer: React.FC<IAppDescriptionRendererProps> = React.memo((props) => {

  const { description } = props;

  const [isExpanded, setIsExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const [measuredHeight, setMeasuredHeight] = useState<number | null>(null);
  const [measuredWidth, setMeasuredWidth] = useState<number | null>(null);

  const { width } = useWindowDimensions();

  function onTextLayout(event: LayoutChangeEvent) {

    const { height, width } = event.nativeEvent.layout;

    if (measuredHeight === null) {
      setMeasuredHeight(height);
      setMeasuredWidth(width);

      if (height > MAX_HEIGHT) {
        setShowReadMore(true);
      }
    }

  }

  function renderReadMoreControl() {

    if (isExpanded === true || showReadMore === false) {
      return;
    }

    return (
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <Text style={styles.readMoreControlText}>read more</Text>
      </TouchableOpacity>
    );
  }

  const descriptionWrapperAttributes = {
    style: {
      maxHeight: !isExpanded && showReadMore ? MAX_HEIGHT : undefined,
      overflow: 'hidden' as const,
    },
    onLayout: onTextLayout
  };

  const renderHTMLElementAttributes = {
    contentWidth: measuredWidth || width - 50,
    source: {
      html: description
    },
    tagsStyles: {
      p: styles.contentP,
      strong: styles.contentStrong,
      li: styles.contentP
    }
  };

  return (
    <View style={styles.appDescriptionRendererMain}>

      <View {...descriptionWrapperAttributes}>
        <RenderHTML {...renderHTMLElementAttributes} />
      </View>

      {renderReadMoreControl()}

    </View>
  );

});

export default AppDescriptionRenderer;