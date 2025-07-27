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
  disabled?: boolean,
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

export interface IAppPopupFooterControl {
  text: string,
  onPress: () => void,
  containerStyle?: any,
  textStyle?: any,
}

export interface IAppPopupProps {
  title: string,
  message: string,
  open: boolean,
  onClose: () => void,
  hideCloseButton?: boolean,
  footerControls?: Array<IAppPopupFooterControl>
}

export interface IAuthenticationLayoutProps {
  title: string,
  children: React.ReactNode,
  headerStyle?: any
}

export interface IModalProps {
  open: boolean,
  onClose: () => void
}