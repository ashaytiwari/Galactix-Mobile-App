import React from "react";

export interface IBackgroundGradientImageWrapperProps {
  children: React.ReactNode
}

export interface IButtonProps {
  title: string,
  rounded?: boolean,
  containerStyle?: any,
  textStyle?: any,
  content?: React.ReactNode,
  onPress: () => void
}

export interface ILottieAnimationProps {
  animationSource: any,
  loop: boolean,
  animationStyle?: any,
  animationWrapperStyle?: any
}

export interface IChildrenProps {
  children: React.ReactNode
}