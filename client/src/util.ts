import { TRequestData } from "./schema.js"

const chunkPages = (data: TRequestData, chunkSize = 10) => {
  const chunkedData = []

  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize)
    chunkedData.push(chunk)
  }

  return chunkedData
}

export { chunkPages }
