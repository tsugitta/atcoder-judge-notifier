const SettingItem = {
  enabled: 'Enabled',
  sound: 'SoundEnabled',
} as const

type SettingItemType = typeof SettingItem[keyof typeof SettingItem]

export const getConfig = async (type: SettingItemType) => {
  return await new Promise<boolean>(resolve =>
    chrome.storage.sync.get(type, res => {
      resolve(res[type] ?? true)
    }),
  )
}

export const setConfig = async (type: SettingItemType, value: boolean) => {
  return await new Promise(resolve =>
    chrome.storage.sync.set({ [type]: value }, () => {
      resolve()
    }),
  )
}
