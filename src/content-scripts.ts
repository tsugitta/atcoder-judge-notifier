import { Message } from './background'

const judgingImageSrc = '//img.atcoder.jp/assets/icon/waiting.gif'
const judgingImageSelector = `img[src='${judgingImageSrc}']`
const labelSelector = '.label'
const labelTitlesToBeIgnored = ['ジャッジ待ち', 'ジャッジ中']
const acLabelTitle = '正解'
const interval = 500

const judgingTrElements = ([].slice.call(
  document.querySelectorAll(`td ${judgingImageSelector}`),
) as HTMLElement[]).map(e => e.parentElement!.parentElement!)

const lastTitles = judgingTrElements.map(e =>
  getLabelTitle(e.querySelector(labelSelector)!),
)

const isDone = judgingTrElements.map(_ => false)

const id = setInterval(() => {
  if (isDone.every(e => e)) {
    clearInterval(id)
    return
  }

  judgingTrElements.forEach((trElement, i) => {
    if (isDone[i]) return

    const labelElement = trElement.querySelector(labelSelector)! as HTMLElement
    const labelTitle = getLabelTitle(labelElement)

    if (!getIsTrJudging(trElement)) {
      isDone[i] = true
    }

    if (labelTitle === lastTitles[i]) return
    lastTitles[i] = labelTitle

    if (labelTitlesToBeIgnored.includes(labelTitle)) return

    const message: Message = {
      title: labelElement.innerText,
      body: getProblemNameFromTrElement(trElement),
      ok: labelTitle === acLabelTitle,
    }

    chrome.runtime.sendMessage(message)
  })
}, interval)

function getLabelTitle(labelElement: Element) {
  return (
    labelElement.getAttribute('title') ||
    labelElement.getAttribute('data-original-title') ||
    ''
  )
}

function getIsTrJudging(trElement: HTMLElement) {
  return !!trElement.querySelector(judgingImageSelector)
}

function getProblemNameFromTrElement(trElement: HTMLElement) {
  return (trElement.children[1] as HTMLElement).innerText
}
