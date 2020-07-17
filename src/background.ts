import { getConfig } from './config'
import { createMenu, refreshMenu } from './menu'

const generateId = () => String(Math.random())

export type Message = {
  title: string
  body: string
  ok: boolean
}

const notify = async ({
  notificationId,
  message,
}: {
  notificationId: string
  message: Message
}) => {
  const extensionEnabled = await getConfig('Enabled')

  if (!extensionEnabled) {
    return
  }

  const soundEnabled = await getConfig('SoundEnabled')

  if (soundEnabled) {
    const audio = new Audio('./notification.mp3')
    audio.play()
  }

  chrome.notifications.create(notificationId, {
    type: 'basic',
    title: message.title,
    iconUrl: message.ok ? './ok.png' : './ng.png',
    message: message.body,
    priority: 1,
  })
}

chrome.runtime.onMessage.addListener(
  (message: Message, sender: chrome.runtime.MessageSender) => {
    const tab = sender.tab!
    const notificationId = generateId()

    chrome.windows.get(tab.windowId, window => {
      if (window.focused && tab.highlighted) {
        return
      }

      notify({ notificationId, message })

      const onClickNotficationHandler = (id: string) => {
        if (notificationId !== id) return

        try {
          chrome.windows.update(tab.windowId, { focused: true })

          chrome.tabs.highlight({
            windowId: tab.windowId,
            tabs: [tab.index],
          })
        } catch (e) {
          // The tab has already been closed
        }
      }

      chrome.notifications.onClicked.addListener(id =>
        onClickNotficationHandler(id),
      )
    })
  },
)

chrome.runtime.onInstalled.addListener(() => {
  createMenu()
})

chrome.storage.onChanged.addListener(changes => {
  refreshMenu()
})
