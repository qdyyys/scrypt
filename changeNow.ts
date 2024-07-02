// @ts-ignore
const apiKey = (import.meta as any).env.VITE_CHANGENOW_API_KEY;

export const getCoinsData = async () => {
  const response = await fetch(
    "https://api.changenow.io/v1/currencies?active=true&fixedRate=false"
  );
  const data = await response.json();
  return data;
};

export const checkAmount = async (from: string, to: string, amount: number) => {
  const response = await fetch(
    `https://api.changenow.io/v1/exchange-amount/${amount}/${from}_${to}?api_key=${apiKey}`
  );
  const data = response.json();
  return data;
};

export const createExchange = async (
  from: string,
  to: string,
  address: string,
  amount: number
) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: from,
      to: to,
      address: address,
      amount: amount,
    }),
  };
  try {
    const response = await fetch(
      `https://api.changenow.io/v1/transactions/${apiKey}`,
      options
    );
    const data = await response.json();
    console.log(
      `Полученные данные: Отправляю ${amount} ${from}, Получаю: ${address}`
    );
    return data;
  } catch (e) {
    console.log(e);
    console.log(
      `Полученные данные: Отправляю ${amount} ${from}, Мой адресс ${address}`
    );
  }
};
