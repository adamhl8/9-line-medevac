import { TRequestData } from "./components/View.js"

const getPages = (data: TRequestData, chunkSize = 10) => {
  const chunkedData = []

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize)
    chunkedData.push(chunk)
  }

  return chunkedData
}

export { getPages }
