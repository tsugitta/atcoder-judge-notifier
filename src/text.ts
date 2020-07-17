type I18nTextType =
  | 'config_enable_extension'
  | 'config_disable_extension'
  | 'config_enable_sound'
  | 'config_disable_sound'

export const getI18nText = (type: I18nTextType) => {
  return chrome.i18n.getMessage(type)
}
