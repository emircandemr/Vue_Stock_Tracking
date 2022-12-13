import httpService from './baseHTTP';

export const get24hrTicker = async () => {
  const result = await httpService()
  return result.data
}

export const filter24hrTicker = async (symbol) => {
  const result = await httpService()
  const filteredData = result.data.filter((item) => item.symbol.toLocaleLowerCase().startsWith(symbol.toLocaleLowerCase()) )
  return filteredData
}


