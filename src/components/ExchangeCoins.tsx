import { useEffect, useState } from "react";
import { getCoinsData, checkAmount, createExchange } from "../../changeNow";
import { IoIosArrowDown } from "react-icons/io";
import { ThemeProps } from "../types";
import ChangeIco from "./ChangeIco";
import { TbLoader2 } from "react-icons/tb";
import { RiExchangeDollarFill } from "react-icons/ri";
import { TbArrowsExchange2 } from "react-icons/tb";
import { GoCheck } from "react-icons/go";
import { IoLogoUsd } from "react-icons/io5";
import { GiCardExchange } from "react-icons/gi";
import Footer from "./Footer";

interface Coin {
  ticker: string;
  image: string;
}

const ExchangeCoins: React.FC<ThemeProps> = ({ lightTheme }) => {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [visibSend, setVisibSend] = useState(false);
  const [visibReceive, setVisibReceive] = useState(false);
  const [send, setSend] = useState("BTC");
  const [sendIco, setSendIco] = useState("");
  const [receive, setReceive] = useState("ETH");
  const [receiveIco, setReceiveIco] = useState("");
  const [sendAmount, setSendAmount] = useState("");
  const [receiveAmount, setReceiveAmount] = useState("");
  const [sendWarn, setSendWarn] = useState(false);
  const [receiveWarn, setReceiveWarn] = useState(false);
  const [sendLoad, setSendLoad] = useState(false);
  const [receiveLoad, setReceiveLoad] = useState(false);
  const [userAddress, setUserAddress] = useState("");
  const [userAddressWarn, setUserAddressWarn] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoinsData();
      setCoins(data);
      setSendIco(data[0].image);
      setReceiveIco(data[1].image);
    };
    fetchData();
  }, []);

  const handleVisibReceive = () => {
    setVisibReceive(!visibReceive);
    setVisibSend(false);
  };
  const handleVisibSend = () => {
    setVisibReceive(false);
    setVisibSend(!visibSend);
  };

  const handleSelectSend = async (ticker: string, image: string) => {
    const sendTicker = ticker;
    setSend(ticker);
    setSendIco(image);
    setVisibSend(false);
    if (sendAmount) {
      setReceiveLoad(true);
      try {
        const data = await checkAmount(sendTicker, receive, Number(sendAmount));
        const estimatedAmount = data.estimatedAmount;
        setReceiveAmount(estimatedAmount);
        console.log(sendAmount);
      } catch (e) {
        console.error(e);
      } finally {
        setReceiveLoad(false);
      }
    }
  };
  const handleSelectReceive = async (ticker: string, image: string) => {
    const receiveTicker = ticker;
    setReceive(ticker);
    setReceiveIco(image);
    setVisibReceive(false);
    if (receiveAmount) {
      setSendLoad(true);
      try {
        const data = await checkAmount(
          receiveTicker,
          send,
          Number(receiveAmount)
        );
        const estimatedAmount = data.estimatedAmount;
        setSendAmount(estimatedAmount);
      } catch (e) {
        console.error(e);
      } finally {
        setSendLoad(false);
      }
    }
  };

  const handleChangeSend = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*(\.\d{0,9})?$/.test(value) && Number(value) < 99999999999) {
      setSendAmount(value);
      setReceiveLoad(true);
      try {
        const data = await checkAmount(send, receive, Number(value));
        const estimatedAmount = data.estimatedAmount;
        if (data.error) {
          setSendWarn(true);
        } else {
          setReceiveAmount(estimatedAmount);
          setSendWarn(false);
          setReceiveWarn(false);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setReceiveLoad(false);
      }
    }
  };
  const handleChangeReceive = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (/^\d*(\.\d{0,2})?$/.test(value) && Number(value) < 99999999999) {
      setReceiveAmount(value);
      setSendLoad(true);
      try {
        const data = await checkAmount(receive, send, Number(value));
        const estimatedAmount = data.estimatedAmount;
        if (data.error) {
          setReceiveWarn(true);
        } else {
          setReceiveWarn(false);
          setSendAmount(estimatedAmount);
          setReceiveWarn(false);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setSendLoad(false);
        console.log(sendLoad);
      }
    }
  };
  const handleCreateExchange = async () => {
    if (userAddress === "") {
      setUserAddressWarn(true);
    } else {
      const data = await createExchange(
        send,
        receive,
        userAddress,
        Number(sendAmount)
      );
      if (data.error === "not_valid_address") {
        setUserAddressWarn(true);
        console.log(data, "123");
      } else {
        setUserAddressWarn(false);
        console.log(data, "fewf");
      }
    }
  };
  const hideListCoins = () => {
    setVisibReceive(false);
    setVisibSend(false);
  };
  return (
    <>
      <div className="max-w-[940px] mx-auto font-SFProRegular">
        <h2
          className={`mb-[20px] ml-3 text-[14px] ${
            lightTheme ? "text-textGray" : "text-[#ECEAFF73]"
          }`}
        >
          Обмен монет
        </h2>

        <div className="flex w-full gap-[12px] mb-[30px]">
          <div
            className={`border w-full rounded-[12px] p-[20px] gap-[8px] flex flex-col transition ${
              lightTheme ? "bg-blockGray" : "bg-blockDark"
            } ${sendWarn ? "border-rose-300" : "border-transparent"}`}
          >
            <div className="relative ">
              <div
                className="flex items-center gap-[10px] cursor-pointer"
                onClick={handleVisibSend}
              >
                <div>
                  {coins.length > 0 ? (
                    <img src={sendIco} alt="" />
                  ) : (
                    <ChangeIco lightTheme={lightTheme} />
                  )}
                </div>
                <p
                  className={`transition uppercase ${
                    lightTheme ? "text-black" : "text-white"
                  }`}
                >
                  {send}
                </p>
                <IoIosArrowDown
                  className={`${
                    lightTheme ? "text-textGray" : "text-[#eceaff40]"
                  }`}
                />
              </div>

              <ul
                className={`absolute max-h-[160px] overflow-scroll p-[4px] rounded-[12px] top-8 -left-1 transition  ${
                  visibSend ? "opacity-1 visible" : "opacity-0 invisible"
                } ${
                  lightTheme
                    ? "bg-white text-black shadow-lightShadowBlock"
                    : "bg-darkBg text-white shadow-darkSHadowBlock"
                }`}
              >
                {coins.length > 0
                  ? coins.map((item, i) => {
                      return (
                        <li
                          key={i}
                          onClick={() =>
                            handleSelectSend(item.ticker, item.image)
                          }
                          className={`flex p-[8px] justify-between rounded-[8px] cursor-pointer transition ${
                            lightTheme
                              ? "hover:bg-itemCoinHov "
                              : "hover:bg-blockDark"
                          }`}
                        >
                          <span className="flex items-center gap-[10px]">
                            <img src={item.image} alt="" />
                            <p className="text-[16px] uppercase">
                              {item.ticker}
                            </p>
                          </span>

                          <p className="text-right text-nowrap">23,123 USDT</p>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>

            {sendLoad ? (
              <span>
                <TbLoader2
                  className={`loader ${
                    lightTheme ? "text-black" : "text-white"
                  }`}
                />
              </span>
            ) : (
              <input
                type="text"
                placeholder="0.00"
                value={sendAmount}
                onClick={hideListCoins}
                onChange={handleChangeSend}
                className={`bg-transparent outline-none ${
                  lightTheme
                    ? "placeholder:text-textGray"
                    : "placeholder:text-[#eceaff40] text-white"
                } text-[24px]`}
              />
            )}
            <p
              className={`text-[13px] ${
                lightTheme ? "text-darkGray" : "text-[#eceaff99]"
              }`}
            >
              1 ETH = 62.422.00
            </p>
          </div>

          <div
            className={`border w-full rounded-[12px] p-[20px] gap-[8px] flex flex-col transition ${
              lightTheme ? "bg-blockGray" : "bg-blockDark"
            } ${receiveWarn ? "border-rose-300" : "border-transparent"}`}
          >
            <div className="relative ">
              <div
                className="flex items-center gap-[10px] cursor-pointer"
                onClick={handleVisibReceive}
              >
                <div>
                  {coins.length > 0 ? (
                    <img src={receiveIco} alt="" />
                  ) : (
                    <ChangeIco lightTheme={lightTheme} />
                  )}
                </div>
                <p
                  className={`transition uppercase ${
                    lightTheme ? "text-black" : "text-white"
                  }`}
                >
                  {receive}
                </p>
                <IoIosArrowDown
                  className={`${
                    lightTheme ? "text-textGray" : "text-[#eceaff40]"
                  }`}
                />
              </div>

              <ul
                className={`absolute max-h-[160px] overflow-scroll p-[4px] rounded-[12px] top-8 -left-1 transition  ${
                  visibReceive ? "opacity-1 visible" : "opacity-0 invisible"
                } ${
                  lightTheme
                    ? "bg-white text-black shadow-lightShadowBlock"
                    : "bg-darkBg text-white shadow-darkSHadowBlock"
                }`}
              >
                {coins.length > 0
                  ? coins.map((item, i) => {
                      return (
                        <li
                          key={i}
                          onClick={() =>
                            handleSelectReceive(item.ticker, item.image)
                          }
                          className={`flex p-[8px] justify-between rounded-[8px] cursor-pointer transition ${
                            lightTheme
                              ? "hover:bg-itemCoinHov "
                              : "hover:bg-blockDark"
                          }`}
                        >
                          <span className="flex items-center gap-[10px]">
                            <img src={item.image} alt="" />
                            <p className="text-[16px] uppercase">
                              {item.ticker}
                            </p>
                          </span>

                          <p className="text-right text-nowrap">23,123 USDT</p>
                        </li>
                      );
                    })
                  : null}
              </ul>
            </div>

            {receiveLoad ? (
              <span>
                <TbLoader2
                  className={`loader ${
                    lightTheme ? "text-black" : "text-white"
                  }`}
                />
              </span>
            ) : (
              <input
                type="text"
                placeholder="0.00"
                value={receiveAmount}
                onClick={hideListCoins}
                onChange={handleChangeReceive}
                className={`bg-transparent outline-none ${
                  lightTheme
                    ? "placeholder:text-textGray"
                    : "placeholder:text-[#eceaff40] text-white"
                } text-[24px]`}
              />
            )}
            <p
              className={`text-[13px] ${
                lightTheme ? "text-darkGray" : "text-[#eceaff99]"
              }`}
            >
              1 ETH = 62.422.00
            </p>
          </div>
        </div>

        <div className="mb-[30px]">
          <h2
            className={`mb-[20px] ml-3 text-[14px] ${
              lightTheme ? "text-textGray" : "text-[#ECEAFF73]"
            }`}
          >
            Контактные данные (Необязательно)
          </h2>
          <div className="flex gap-[36px]">
            <div className="flex flex-col gap-[12px] w-1/2">
              <input
                type="text"
                placeholder={`Ваш ${receive} адресс`}
                onChange={(e) => setUserAddress(e.target.value)}
                value={userAddress}
                className={`transition outline-none rounded-[10px] p-[12px] ${
                  lightTheme
                    ? "placeholder:text-textGray bg-blockGray"
                    : "placeholder:text-[#eceaff40] text-white bg-blockDark"
                } text-[14px] border ${
                  userAddressWarn ? "border-rose-300" : "border-transparent"
                }`}
              />
              <input
                type="text"
                placeholder="Telegram (Необязательно)"
                className={`transition outline-none rounded-[10px] p-[12px] ${
                  lightTheme
                    ? "placeholder:text-textGray bg-blockGray"
                    : "placeholder:text-[#eceaff40] text-white bg-blockDark"
                } text-[14px]`}
              />
            </div>

            <div className="w-1/2 flex flex-col gap-[12px]">
              <div
                className={`text-center text-[14px] p-[12px] rounded-[10px] flex items-center justify-center gap-[10px] cursor-pointer bg-purple text-white`}
                onClick={handleCreateExchange}
              >
                <RiExchangeDollarFill className="text-[20px]" />
                <p>Создать обмен</p>
              </div>

              <div
                className={`border text-center text-[14px] p-[12px] rounded-[10px] flex items-center justify-center gap-[10px] cursor-pointer ${
                  lightTheme
                    ? "border-[#100f1b1a] text-black"
                    : "border-[#eceaff1a] text-white"
                }`}
              >
                <TbArrowsExchange2 className="text-[20px]" />
                <p>Отзеркалить</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-[30px]">
          <h2
            className={`mb-[20px] ml-3 text-[14px] ${
              lightTheme ? "text-textGray" : "text-[#ECEAFF73]"
            }`}
          >
            Статистика нашего обменника
          </h2>

          <div className="grid grid-cols-3 gap-[12px]">
            <div
              className={`transition border ${
                lightTheme
                  ? "bg-white border-[#100f1b1a]"
                  : "bg-blockDark border-[#ECEAFF1A]"
              } p-[24px] rounded-[24px]`}
            >
              <div className="flex items-center gap-[10px] text-[24px] ">
                <GoCheck className="text-green-500" />
                <p className={`${lightTheme ? "text-black" : "text-white"}`}>
                  125
                </p>
              </div>
              <p
                className={`text-[16px] ${
                  lightTheme ? "text-textGray" : "text-[#ECEAFF73]"
                }`}
              >
                успешных сделок
              </p>
            </div>

            <div
              className={`transition border ${
                lightTheme
                  ? "bg-white border-[#100f1b1a]"
                  : "bg-blockDark border-[#ECEAFF1A]"
              } p-[24px] rounded-[24px]`}
            >
              <div className="flex items-center gap-[10px] text-[24px] ">
                <IoLogoUsd className="text-[#F09B33]" />
                <p className={`${lightTheme ? "text-black" : "text-white"}`}>
                  62,823
                </p>
              </div>
              <p
                className={`text-[16px] ${
                  lightTheme ? "text-textGray" : "text-[#ECEAFF73]"
                }`}
              >
                оборот в месяц
              </p>
            </div>

            <div
              className={`transition border ${
                lightTheme
                  ? "bg-white border-[#100f1b1a]"
                  : "bg-blockDark border-[#ECEAFF1A]"
              } p-[24px] rounded-[24px]`}
            >
              <div className="flex items-center gap-[10px] text-[24px] ">
                <GiCardExchange className="text-[#4D7BF2]" />
                <p className={`${lightTheme ? "text-black" : "text-white"}`}>
                  125
                </p>
              </div>
              <p
                className={`text-[16px] ${
                  lightTheme ? "text-textGray" : "text-[#ECEAFF73]"
                }`}
              >
                кол-во обмененных пар
              </p>
            </div>
          </div>
        </div>

        <div>
          <h2
            className={`mb-[20px] ml-3 text-[14px] ${
              lightTheme ? "text-textGray" : "text-[#ECEAFF73]"
            }`}
          >
            Рекомендуем ознакомиться
          </h2>

          <div className="grid grid-cols-2 gap-[12px] mb-[36px]">
            <article
              className={`cursor-pointer rounded-[16px] border p-[8px] ${
                lightTheme ? "border-[#100F1B1A]" : "border-[#ECEAFF1A]"
              }`}
              onClick={() =>
                window.open(
                  "https://www.coinbase.com/ru/learn/crypto-basics/what-is-bitcoin",
                  "_blank"
                )
              }
            >
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/lUIdMeDm9tf33LZNjPqz8/a44f28b20bd9846efc62cf5a230d875a/Learn_Illustration_Ultimate_Guide_Bitcoin.webp?w=768&fm=png"
                alt=""
                className="rounded-[8px] mb-[8px] brightness-75 hover:brightness-100 transition"
              />
              <div>
                <h2 className={`${lightTheme ? "text-black" : "text-white"}`}>
                  What is Bitcoin?
                </h2>
                <p
                  className={`${
                    lightTheme ? "text-[#100F1B73]" : "text-[#ECEAFF73]"
                  }`}
                >
                  02.02.2022
                </p>
              </div>
            </article>

            <article
              className={`cursor-pointer rounded-[16px] border p-[8px] ${
                lightTheme ? "border-[#100F1B1A]" : "border-[#ECEAFF1A]"
              }`}
              onClick={() =>
                window.open(
                  "https://etherplan.com/2020/11/16/introduction-to-cryptocurrencies/13648/",
                  "_blank"
                )
              }
            >
              <img
                src="https://etherplan.com/wp-content/uploads/2020/11/The-purpose-of-cryptocurrencies-is-trust-minimization.-1.png"
                alt=""
                className="rounded-[8px] mb-[8px] brightness-75 hover:brightness-100 transition"
              />
              <div>
                <h2 className={`${lightTheme ? "text-black" : "text-white"}`}>
                  Introduction to Cryptocurrencies
                </h2>
                <p
                  className={`${
                    lightTheme ? "text-[#100F1B73]" : "text-[#ECEAFF73]"
                  }`}
                >
                  16.11.2020
                </p>
              </div>
            </article>

            <article
              className={`cursor-pointer rounded-[16px] border p-[8px] ${
                lightTheme ? "border-[#100F1B1A]" : "border-[#ECEAFF1A]"
              }`}
            >
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/3thWklmvu2WmAHJh0k1AcC/51521feeef170d94a446fbec6f262912/what-is-ethereum.png?w=768&fm=png"
                alt=""
                className="rounded-[8px] mb-[8px] brightness-75 hover:brightness-100 transition"
                onClick={() =>
                  window.open(
                    "https://www.coinbase.com/ru/learn/crypto-basics/what-is-ethereum",
                    "_blank"
                  )
                }
              />
              <div>
                <h2 className={`${lightTheme ? "text-black" : "text-white"}`}>
                  What is Ethereum?
                </h2>
                <p
                  className={`${
                    lightTheme ? "text-[#100F1B73]" : "text-[#ECEAFF73]"
                  }`}
                >
                  22.06.2022
                </p>
              </div>
            </article>

            <article
              className={`cursor-pointer rounded-[16px] border p-[8px] ${
                lightTheme ? "border-[#100F1B1A]" : "border-[#ECEAFF1A]"
              }`}
              onClick={() =>
                window.open(
                  "https://www.coinbase.com/ru/learn/crypto-basics/what-is-cryptocurrency",
                  "_blank"
                )
              }
            >
              <img
                src="https://images.ctfassets.net/q5ulk4bp65r7/5FbQ4oiMCnZMZZ1udW3jYZ/fd738c69fc6508d3286163661713f684/Learn_Illustration_What_is_a_Crypto_Wallet.png?w=768&fm=png"
                alt=""
                className="rounded-[8px] mb-[8px] brightness-75 hover:brightness-100 transition"
              />
              <div>
                <h2
                  className={`${
                    lightTheme ? "text-black" : "text-white"
                  } text-[16px]`}
                >
                  What is cryptocurrency?
                </h2>
                <p
                  className={`text-[14px] ${
                    lightTheme ? "text-[#100F1B73]" : "text-[#ECEAFF73]"
                  }`}
                >
                  03.04.2022
                </p>
              </div>
            </article>
          </div>

          <Footer lightTheme={lightTheme} />
        </div>
      </div>
    </>
  );
};
export default ExchangeCoins;
