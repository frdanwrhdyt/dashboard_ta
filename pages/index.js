import styles from "../styles/Home.module.css";

import InfoChart from "../components/infoChart";
import InfoColumn from "../components/infoBottom";
import InfoTop from "../components/infoTop";

import react, { useState, useEffect } from "react";
import { ChipIcon } from "@heroicons/react/outline";

export async function getStaticProps() {
  const res1 = await fetch("http://103.183.74.167:8000/data");
  const res2 = await fetch("http://103.183.74.167:8000/predict/hour");
  const res3 = await fetch("http://103.183.74.167:8000/predict/day");
  const res4 = await fetch("http://103.183.74.167:8000/predict/week");
  const nowData = await res1.json();
  const hour = await res2.json();
  const day = await res3.json();
  const week = await res4.json();

  const data = {
    hour,
    day,
    week,
  };
  return {
    props: {
      nowData,
      data,
    },
    revalidate: 10,
  };
}

export default function Home({ data, nowData }) {
  // const [hour, setHour] = useState();
  // const [day, setDay] = useState();
  // const [week, setWeek] = useState();
  // const [now, setNow] = useState();

  // useEffect(() => {
  //   fetch("http://103.183.74.167:8000/predict/hour")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setHour(res);
  //     });
  //   fetch("http://103.183.74.167:8000/predict/day")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setDay(res);
  //     });
  //   fetch("http://103.183.74.167:8000/predict/week")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setWeek(res);
  //     });

  //   fetch("http://103.183.74.167:8000/data")
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setNow(res);
  //     });
  //   setInterval(() => {}, 300000);
  // }, []);
  // const data = {
  //   hour,
  //   day,
  //   week,
  // };
  // const nowData = now;
  // console.log(now);
  return (
    <>
      <div className="flex w-screen">
        <div className="md:flex hidden sticky h-screen w-1/8 top-0 bg-cyan-900 rounded-r-md p-4">
          <ChipIcon className="h-5 md:h-10 aspect-square text-white" />
        </div>
        <div className="flex flex-col w-full">
          <div className=" flex flex-row justify-center w-full ">
            <div className="flex-1 p-5 ">
              <div className="flex pb-5 flex-col">
                <div className="text-black font-bold text-xl">
                  Dashboard Summary
                </div>
                <div className="text-black font-light text-md ">
                  Power meter was installed in P building
                </div>
              </div>
              <InfoTop datas={data} />
              <InfoChart props={data} />
              <div className="md:pt-10 pt-5 flex justify-center">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-2 md:gap-10 w-full">
                  <InfoColumn
                    props={nowData?.data}
                    title="Total power now"
                    lastUpdate={true}
                  />
                  <InfoColumn
                    props={data?.hour?.predict}
                    title="Predict an hour later"
                    lastUpdate={false}
                  />
                  <InfoColumn
                    props={data?.day?.predict}
                    title="Predict a day later"
                    lastUpdate={false}
                  />
                  <InfoColumn
                    props={data?.week?.predict}
                    title="Predict a week later"
                    lastUpdate={false}
                  />
                </div>
              </div>
            </div>
          </div>
          <footer className={`${styles.footer} " text-xs md:text-md "`}>
            Created by{` `}
            <span className="font-bold">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/farid-anwar-hidayat-3091281a3/"
                rel="noreferrer"
              >
                Farid Anwar Hidayat
              </a>
            </span>
          </footer>
        </div>
      </div>
    </>
  );
}
// export async function getStaticProps() {
//   const res1 = await fetch("http://103.183.74.167:8000/data");
//   const res2 = await fetch("http://103.183.74.167:8000/predict/hour");
//   const res3 = await fetch("http://103.183.74.167:8000/predict/day");
//   const res4 = await fetch("http://103.183.74.167:8000/predict/week");
//   const nowData = await res1.json();
//   const hour = await res2.json();
//   const day = await res3.json();
//   const week = await res4.json();

//   const data = {
//     hour,
//     day,
//     week,
//   };
//   return {
//     props: {
//       nowData,
//       data,
//     },
//   };
// }
