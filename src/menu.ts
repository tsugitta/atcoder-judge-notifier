import { getConfig, setConfig } from './config'
import { getI18nText } from './text'

type MenuId = 'ToggleEnabled' | 'ToggleSoundEnabled'

export const createMenu = async () => {
  const extensionEnabled = await getConfig('Enabled')
  const soundEnabled = await getConfig('SoundEnabled')

  const menus: Array<{ id: MenuId; title: string }> = [
    {
      id: 'ToggleEnabled',
      title: extensionEnabled
        ? getI18nText('config_disable_extension')
        : getI18nText('config_enable_extension'),
    },
    {
      id: 'ToggleSoundEnabled',
      title: soundEnabled
        ? getI18nText('config_disable_sound')
        : getI18nText('config_enable_sound'),
    },
  ]

  menus.forEach(menu =>
    chrome.contextMenus.create({
      ...menu,
      contexts: ['all'],
    }),
  )
}

export const refreshMenu = async () => {
  chrome.contextMenus.removeAll()
  await createMenu()
}

chrome.contextMenus.onClicked.addListener(
  async ({ menuItemId }: { menuItemId: MenuId }) => {
    // const handle = async () => {
    switch (menuItemId) {
      case 'ToggleEnabled': {
        const extensionEnabled = await getConfig('Enabled')
        await setConfig('Enabled', !extensionEnabled)
        break
      }
      case 'ToggleSoundEnabled': {
        const soundEnabled = await getConfig('SoundEnabled')
        await setConfig('SoundEnabled', !soundEnabled)
        break
      }
    }
  },
)
