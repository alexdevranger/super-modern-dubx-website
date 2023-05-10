import React, { useContext, useEffect, useState } from "react";
import { BsInfoCircle } from "react-icons/bs";
import Dubx from "../images/logo.png";
import { shortenAddress } from "../utils/shortenAddress";
import { Loader } from ".";
import moment from "moment";
import { ethers } from "ethers";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
const { ethereum } = window;

const companyCommonStyles =
  "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border-gray-400 text-sm font-light text-white";

const Input = ({ placeholder, name, type, value, handleChange }) => (
  <input
    placeholder={placeholder}
    type={type}
    step="0.0001"
    value={value}
    onChange={(e) => handleChange(e, name)}
    className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism"
  />
);

const Welcome = () => {
  const createProvider = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    return provider;
  };
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
  });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transact, setTransact] = useState({});
  const [balanceAddr, setBalanceAddr] = useState("");
  const [metamaskLocked, setMetamaskLocked] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) setIsInstalled(false);
      if (ethereum) setIsInstalled(true);

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
        let provider = createProvider();
        let balance = await provider.getBalance(accounts[0]);
        let balanceFormated = ethers.utils.formatEther(balance);
        setBalanceAddr(balanceFormated);
      } else {
        console.log("No accounts found");
        setMetamaskLocked(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!ethereum) return;
    async function getAccounts() {
      const accounts = await ethereum.request({
        method: "eth_accounts",
      });
      if (accounts && accounts.length > 0) {
        setCurrentAccount(accounts[0]);
        setMetamaskLocked(false);
      } else {
        console.log("MetaMask is locked");
        setMetamaskLocked(true);
      }
    }

    async function handleAccountsChanged(newAccounts) {
      setCurrentAccount(newAccounts[0]);
      let provider = createProvider();
      let balance = await provider.getBalance(newAccounts[0]);
      let balanceFormated = ethers.utils.formatEther(balance);
      setBalanceAddr(balanceFormated);
      setMetamaskLocked(false);
    }
    // Fetch initial accounts
    getAccounts();

    // Set up the event listener for account changes
    ethereum.on("accountsChanged", handleAccountsChanged);

    // Clean up the event listener when the component is unmounted
    return () => {
      ethereum.removeListener("accountsChanged", handleAccountsChanged);
    };
  }, []);

  const connectWallet = async () => {
    try {
      if (!ethereum) setIsInstalled(false);
      if (ethereum) setIsInstalled(true);

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      if (accounts && accounts.length) {
        setCurrentAccount(accounts[0]);
        setMetamaskLocked(false);
      } else {
        setMetamaskLocked(true);
      }
      window.location.reload();
    } catch (error) {
      throw new Error("No ethereum object");
    }
  };

  const checkIsMetamaskUnlocked = async () => {
    const acc = await ethereum.request({
      method: "eth_requestAccounts",
    });
    if (acc && acc.length) {
      console.log("false metamask is not locked");
      return false;
    } else {
      console.log("false metamask is locked");
      return true;
    }
  };

  const sendTransaction = async () => {
    try {
      if (ethereum) {
        setIsInstalled(true);
        const { addressTo, amount } = formData;
        // const transactionsContract = createEthereumContract();
        const parsedAmount = ethers.utils.parseEther(amount);
        let provider = createProvider();
        const signer = provider.getSigner();

        const tx = await signer.sendTransaction({
          to: addressTo,
          value: parsedAmount._hex,
        });

        console.log("Transaction sent:", tx);
        setIsLoading(true);
        setTransact({});
        // Wait for the transaction to be confirmed
        const receipt = await provider.waitForTransaction(tx.hash);
        setTransact(receipt);
        console.log("Transaction confirmed:", receipt);

        setIsLoading(false);
      } else {
        console.log("No ethereum object");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object");
    }
  };

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const [txObject, setTxObject] = useState({});
  const [locked, setLocked] = useState(false);

  const handleSubmit = (e) => {
    const { addressTo, amount } = formData;

    e.preventDefault();

    if (!addressTo || !amount) return;

    sendTransaction();
  };
  const fetchTx = async () => {
    try {
      const response = await fetch(
        `https://explorer.arabianchain.org/api/v1/tx/${transact.transactionHash}`
      );
      const jsonData = await response.json();
      console.log(jsonData);
      setTxObject(jsonData[0]);
    } catch (error) {
      setTxObject({});
    }
  };
  useEffect(() => {
    if (transact !== null || transact !== undefined) {
      if (
        transact &&
        Object.keys(transact).length &&
        Object.keys(transact).length !== 0
      ) {
        fetchTx();
      } else {
        console.log("txObject = {}");
      }
    } else {
      console.log("transact not exist yet");
    }
  }, [transact]);
  useEffect(() => {
    const testIsLocked = () => {
      if (checkIsMetamaskUnlocked) {
        setLocked(false);
      } else {
        setLocked(true);
      }
    };
    testIsLocked();
  });

  return (
    <div className="flex w-full justify-center items-center mt-[100px]">
      <div className="flex mf:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
        <div className="flex flex-1 justify-start items-start flex-col mf:mr-10">
          <h1 className="text-3xl sm:text-5xl py-1">
            Easy Send DUBX <br /> across the world
          </h1>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            Integrated wallet for very fast send in 3 simple steps:
          </p>
          <p className="text-left mt-5 text-white font-light md:w-9/12 w-11/12 text-base">
            1. Connect your Metamask account
            <br />
            2. Fill Address To and Amount
            <br /> 3. Send
            {/* {import.meta.env.VITE_API_URL} */}
          </p>
          {!currentAccount && (
            <button
              type="button"
              onClick={connectWallet}
              className="flex flex-row justify-center items-center my-5 bg-[#1BF8EC] p-3 rounded-full cursor-pointer  hover:bg-white hover:border-[#1BF8EC] "
            >
              {/* <AiFillPlayCircle className="text-white mr-2" /> */}
              <p className="text-[#4a2084] hover:text-[#1BF8EC] text-base font-semibold">
                Connect Wallet
              </p>
            </button>
          )}

          <div className="grid sm:grid-cols-3 grid-cols-2 w-full mt-10">
            <div className={`rounded-tl-2xl ${companyCommonStyles}`}>
              Reliability
            </div>
            <div className={companyCommonStyles}>Security</div>
            <div className={`sm:rounded-tr-2xl ${companyCommonStyles}`}>
              Dubxcoin
            </div>
            <div className={`sm:rounded-bl-2xl ${companyCommonStyles}`}>
              Web 3.0
            </div>
            <div className={companyCommonStyles}>Low Fees</div>
            <div className={`rounded-br-2xl ${companyCommonStyles}`}>
              Blockchain
            </div>
          </div>
        </div>

        <div className="flex flex-col flex-1 items-center justify-start w-full mf:mt-0 mt-10 md:ml-[13rem] sm:ml-[0]">
          <div className="p-3 flex justify-end items-start flex-col rounded-xl h-40 sm:w-72 w-full my-5 eth-card .white-glassmorphism ">
            <div className="flex justify-between flex-col w-full h-full">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full border-2 border-white flex justify-center items-center">
                  <img src={Dubx} fontSize={21} color="#fff" />
                </div>
                <BsInfoCircle fontSize={17} color="#fff" />
              </div>
              {currentAccount && balanceAddr && (
                <div className="relative">
                  <p className="text-white font-light text-sm">
                    {shortenAddress(currentAccount)}
                  </p>
                  <p className="text-white font-semibold text-lg mt-1">
                    Dubxcoin
                  </p>
                  {balanceAddr && (
                    <>
                      <p className="absolute right-1.5 bottom-7 text-white font-semibold text-lg mt-1">
                        Balance
                      </p>
                      <p className="absolute right-1.5 bottom-0 text-white font-semibold text-lg mt-1">
                        {parseFloat(balanceAddr).toFixed(2)}
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
          {isInstalled && metamaskLocked && (
            <div>
              <p className="text-white mb-[20px]">
                Please unlock your Metamask wallet
                <br /> by clicking button CONNECT WALLET
              </p>
            </div>
          )}
          {!isInstalled && (
            <div>
              <p className="text-white mb-[20px]">
                Please install Metamask wallet
              </p>
            </div>
          )}
          <div className="p-5 sm:w-96 w-full flex flex-col justify-start items-center blue-glassmorphism">
            <Input
              placeholder="Address To"
              name="addressTo"
              type="text"
              handleChange={handleChange}
            />
            <Input
              placeholder="Amount (DUBX)"
              name="amount"
              type="number"
              handleChange={handleChange}
            />

            <div className="h-[1px] w-full bg-gray-400 my-2" />

            {isLoading ? (
              <Loader />
            ) : (
              <button
                type="button"
                onClick={handleSubmit}
                className="text-white w-full mt-2 border-[1px] p-2 border-[#1BF8EC] hover:bg-[#1BF8EC] hover:text-black rounded-full cursor-pointer"
              >
                Send now
              </button>
            )}
            {Object.keys(txObject).length !== 0 && (
              <div className="flex flex-col md:p-12 py-12 px-4">
                <h3 className="text-white text-3xl text-center my-2">
                  Transaction
                </h3>

                <a
                  href={`https://explorer.arabianchain.org/#/tx/${txObject.hash}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {" "}
                  <h3 className="text-[#1af9ec] text-2xl text-center my-2">
                    {shortenAddress(txObject.hash)}
                  </h3>
                </a>
                <div className="flex flex-wrap justify-center items-center mt-10">
                  <div
                    className="white-glassmorphism m-4 flex flex-1
              2xl:min-w-[450px]
              2xl:max-w-[500px]
              sm:min-w-[270px]
              sm:max-w-[300px]
              min-w-full
              flex-col p-3 rounded-md hover:shadow-2xl"
                  >
                    <div className="flex flex-col items-center w-full mt-3">
                      <div className="display-flex justify-start w-full mb-6 p-2">
                        <a
                          href={`https://explorer.arabianchain.org/#/address/${txObject.from}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="text-white text-base">
                            From: {shortenAddress(txObject.from)}
                          </p>
                        </a>
                        <a
                          href={`https://explorer.arabianchain.org/#/address/${txObject.to}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <p className="text-white text-base">
                            To: {shortenAddress(txObject.to)}
                          </p>
                        </a>
                        <p className="text-white text-base">
                          Amount: {txObject.value} DUBX
                        </p>
                      </div>

                      <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                        <p className="text-[#37c7da] font-bold">
                          {moment(txObject.timestamp * 1000).format(
                            "DD/MM/YYYY HH:mm"
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
