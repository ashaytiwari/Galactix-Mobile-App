import React from "react";

export interface IBackgroundGradientImageWrapperProps {
  children: React.ReactNode
}

export interface IButtonProps {
  title: string,
  rounded?: boolean,
  containerStyle?: any,
  content?: React.ReactNode,
  onPress: () => void
}