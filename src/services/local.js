export const getStockFromLocal = () => {
  const data = localStorage.getItem('stocks');
  const stocks = JSON.parse(data);
  return stocks;
}

export const setStocksToLocal = stocks => {
  localStorage.setItem('stocks', JSON.stringify(stocks))
}

export const removeStocksFromLocal = stock => {
  const data = JSON.parse(localStorage.getItem('stocks')) || [];
  const stocks = data.filter((item) => item.symbol !== stock.symbol)
  localStorage.setItem('stocks', JSON.stringify(stocks))
}

export const updateStocksLocal = updatedStock => {
  const data = JSON.parse(localStorage.getItem('stocks')) || [];
  const findStock = data.find((item) => item.symbol === updatedStock.stock.symbol)
  findStock.quantity = updatedStock.quantity
  localStorage.setItem('stocks', JSON.stringify(data))
}
