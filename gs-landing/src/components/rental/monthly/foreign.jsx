import React, { useState, useEffect } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  ForAllCar,
  BenzCar,
  AudiCar,
  BmwCar,
  RandCar,
  PorsheCar,
  EtcCar,
} from "../../forTabList";
import { useRouter } from "next/router";

export default function ForeignList() {
  const [index, setIndex] = useState(0);

  const router = useRouter();
  const { tab } = router.query;

  const handleSelect = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    tab === "benz" && setIndex(1);
    tab === "audi" && setIndex(2);
    tab === "bmw" && setIndex(3);
    tab === "rand" && setIndex(4);
    tab === "porsche" && setIndex(5);
    tab === "etc" && setIndex(6);
  }, [tab]);

  return (
    <>
      <article className="w-full h-full mx-auto">
        <section>
          <div className="w-full h-[135px] text-white flex flex-col items-center justify-center bg-[url(/images/sub/bg_subbanner01.jpg)] bg-no-repeat bg-cover">
            <h2 className="text-4xl font-medium pb-2">이용안내</h2>
            <p className="text-base">홈 &gt; 월장기대여 &gt; 수입차</p>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[30px] lg:pb-[100px] pt-[15px] pb-[50px]">
            <div className="max-w-[1280px] h-full box-border mx-auto">
              <Tabs selectedIndex={index} onSelect={handleSelect}>
                <TabList>
                  <Tab>전체</Tab>
                  <Tab>벤츠</Tab>
                  <Tab>아우디</Tab>
                  <Tab>BMW</Tab>
                  <Tab>레인지로버</Tab>
                  <Tab>포르쉐</Tab>
                  <Tab>기타</Tab>
                </TabList>
                <TabPanel>
                  <ForAllCar />
                </TabPanel>
                <TabPanel>
                  <BenzCar />
                </TabPanel>
                <TabPanel>
                  <AudiCar />
                </TabPanel>
                <TabPanel>
                  <BmwCar />
                </TabPanel>
                <TabPanel>
                  <RandCar />
                </TabPanel>
                <TabPanel>
                  <PorsheCar />
                </TabPanel>
                <TabPanel>
                  <EtcCar />
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
