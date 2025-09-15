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

export interface IAppAvatarProps {
  text: string,
  containerStyle?: any,
  textStyle?: any
}

export interface IAppHeaderProps {
  title: string
}

export interface IAppSearchBarProps {
  placeholder: string,
  name: string,
  value: string,
  onChange: (value: string) => void,
  onClear: () => void
}

export interface IAppScaledImageProps {
  url: string,
  width: number,
  height: any,
  imageStyle?: any
}

export interface IAppDescriptionRendererProps {
  description: string
}

export type ImageFile = {
  uri: string,
  fileName: string,
  fileType: string
} | null
export interface IAppImagePickerProps {
  buttonTitle: string,
  onImagePicked: (imageFile: ImageFile | null) => void
}

export interface ISpinnerProps {
  transparentBackground?: boolean
}

export interface IAppBottomSheetProps {
  open: any,
  onClose: () => void,
  children: React.ReactNode
}