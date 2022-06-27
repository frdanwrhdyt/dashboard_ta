import styles from "../styles/Home.module.css";

import InfoChart from "../components/infoChart";
import InfoColumn from "../components/infoBottom";
import InfoTop from "../components/infoTop";

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

export default function Home({ nowData, data }) {
  return (
    <>
      <div className=" flex flex-row justify-center w-screen ">
        <div className="flex-1 p-5 ">
          <div className="flex pb-5 flex-col">
            <div className="text-black font-bold text-xl">
              Dashboard Summary
            </div>
            <div className="text-black font-light text-md">
              Power meter was installed in P building
            </div>
          </div>
          <InfoTop datas={data} />
          <InfoChart props={data} />
          <div className="md:pt-10 pt-5 flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10 w-full">
              <InfoColumn
                props={nowData?.data}
                title="Total Power Now"
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
              {/* <InfoColumn props={nowData} /> */}
            </div>
          </div>
        </div>
      </div>
      <footer className={styles.footer}>
        Powered by{` `}
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
    </>
  );
}
