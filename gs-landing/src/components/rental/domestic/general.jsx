import React, { useState, useEffect } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import {
  AllCar,
  CheCar,
  HyundaiCar,
  KiaCar,
  SamCar,
  SsangYong,
} from "../../tabList";
import { useRouter } from "next/router";

export default function GeneralList() {
  const [index, setIndex] = useState(0);

  const router = useRouter();
  const { tab } = router.query;

  const handleSelect = (index) => {
    setIndex(index);
  };

  useEffect(() => {
    tab === "hyundai" && setIndex(1);
    tab === "kia" && setIndex(2);
    tab === "chevolet" && setIndex(3);
    tab === "samsung" && setIndex(4);
    tab === "ssangyong" && setIndex(5);
  }, [tab]);

  return (
    <>
      <article className="w-full h-full mx-auto">
        <section>
          <div className="w-full h-[135px] text-white flex flex-col items-center justify-center bg-[url(/images/sub/bg_subbanner01.jpg)] bg-no-repeat bg-cover">
            <h2 className="text-4xl font-medium pb-2">이용안내</h2>
            <p className="text-base">홈 &gt; 일반대여 &gt; 국산차</p>
          </div>
        </section>
        <section>
          <div className="w-full h-full lg:pt-[30px] lg:pb-[100px] pt-[15px] pb-[50px]">
            <div className="max-w-[1280px] h-full box-border mx-auto">
              <div>
                <Tabs selectedIndex={index} onSelect={handleSelect}>
                  <TabList>
                    <Tab>전체</Tab>
                    <Tab>현대</Tab>
                    <Tab>기아</Tab>
                    <Tab>쉐보레</Tab>
                    <Tab>르노삼성</Tab>
                    <Tab>쌍용</Tab>
                  </TabList>
                  <TabPanel>
                    <AllCar />
                  </TabPanel>
                  <TabPanel>
                    <HyundaiCar />
                  </TabPanel>
                  <TabPanel>
                    <KiaCar />
                  </TabPanel>
                  <TabPanel>
                    <CheCar />
                  </TabPanel>
                  <TabPanel>
                    <SamCar />
                  </TabPanel>
                  <TabPanel>
                    <SsangYong />
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </section>
      </article>
    </>
  );
}
