import React, { useEffect, useState } from "react";
import { ethers } from "ethers";

export const SendDubxContext = React.createContext("");

const { ethereum } = window;

const createProvider = () => {
  const provider = new ethers.providers.Web3Provider(ethereum);
  return provider;
};

export const SendDubxProvider = ({ children }) => {
  const [formData, setformData] = useState({
    addressTo: "",
    amount: "",
  });
  const [currentAccount, setCurrentAccount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transact, setTransact] = useState({});
  const [balanceAddr, setBalanceAddr] = useState("");
  const [metamaskLocked, setMetamaskLocked] = useState(false);

  const [transactions, setTransactions] = useState([]);

  const handleChange = (e, name) => {
    setformData((prevState) => ({ ...prevState, [name]: e.target.value }));
  };

  const checkIfWalletIsConnected = async () => {
    try {
      if (!ethereum) return alert("Please install MetaMask.");

      const accounts = await ethereum.request({ method: "eth_accounts" });
      console.log(accounts[0]);

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

  // ethereum.on("accountsChanged", async (accounts) => {
  //   setCurrentAccount(accounts[0]);
  //   let provider = createProvider();
  //   let balance = await provider.getBalance(accounts[0]);
  //   let balanceFormated = ethers.utils.formatEther(balance);
  //   setBalanceAddr(balanceFormated);

  // });
  useEffect(() => {
    if (!ethereum) {
      console.log("MetaMask is not installed");
      return false;
    }
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
      if (!ethereum) return alert("Please install MetaMask.");

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
    console.log("checkIfWalletIsConnected");
    checkIfWalletIsConnected();
  }, []);
  console.log(metamaskLocked);
  return (
    <SendDubxContext.Provider
      value={{
        //transactionCount,
        checkIsMetamaskUnlocked,
        connectWallet,
        transact,
        balanceAddr,
        metamaskLocked,
        //transactions,
        currentAccount,
        isLoading,
        sendTransaction,
        handleChange,
        formData,
      }}
    >
      {children}
    </SendDubxContext.Provider>
  );
};
