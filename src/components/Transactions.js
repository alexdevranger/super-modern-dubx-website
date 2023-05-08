import React, { useContext, useEffect, useState } from "react";
import { shortenAddress } from "../utils/shortenAddress";
import moment from "moment";

const Transactions = () => {
  const [apiData, setApiData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://explorer.arabianchain.org/api/v1/tx/latest/6/1`
      );
      const jsonData = await response.json();
      setApiData(jsonData);
    } catch (error) {
      // console.error(error.message);
      setApiData([]);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(apiData);

  return (
    <div className="flex w-full justify-center items-center 2xl:px-20  gradient-bg-transactions pt-[100px]">
      {apiData.length > 0 && (
        <div className="flex flex-col md:p-12 py-12 px-4">
          <h1 className="text-3xl sm:text-5xl text-center my-2 font-bold">
            Latest Transactions
          </h1>
          <div className="flex flex-wrap justify-center items-center mt-10">
            {apiData.reverse().map((transaction, i) => (
              <div
                key={i}
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
                      href={`https://explorer.arabianchain.org/#/address/${transaction.from}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-white text-base">
                        From: {shortenAddress(transaction.from)}
                      </p>
                    </a>
                    <a
                      href={`https://explorer.arabianchain.org/#/address/${transaction.to}`}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <p className="text-white text-base">
                        To: {shortenAddress(transaction.to)}
                      </p>
                    </a>
                    <p className="text-white text-base">
                      Amount: {transaction.value} DUBX
                    </p>
                  </div>

                  <div className="bg-black p-3 px-5 w-max rounded-3xl -mt-5 shadow-2xl">
                    <p className="text-[#37c7da] font-bold">
                      {moment(transaction.timestamp * 1000).format(
                        "DD/MM/YYYY HH:mm"
                      )}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Transactions;
