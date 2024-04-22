import './styles/index.css'

function getDomList(name: string): NodeListOf<HTMLElement> {
  const domList: NodeListOf<HTMLElement> = document.querySelectorAll<HTMLElement>(name)
  return domList
}
function getRandomDomList(domList: NodeListOf<HTMLElement>, num: number): HTMLElement[] {
  const list = Array.from(domList)
  return new Array(num).fill(0).map(() => {
    const randomIndex = Math.floor(Math.random() * list.length)
    const randomDom = list[randomIndex]
    list.splice(randomIndex, 1)
    return randomDom
  })
}

function init(interval: NodeJS.Timeout) {
  const domList = getDomList('div[class="truncate"]')
  if (domList.length <= 0) return
  else clearInterval(interval)
  const randomDomList = getRandomDomList(domList, 5)
  return randomDomList.map((dom) => dom.innerText)
}
window.onload = () => {
  const domInterval: NodeJS.Timeout = setInterval(() => {
    console.log(init(domInterval))
  }, 300)
}
