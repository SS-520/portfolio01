import React from 'react';
// import { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";

// 子コンポーネントに渡したいReactIconの読み込み
import { RiDeleteBack2Fill } from "react-icons/ri";

// 使用する子コンポーネントの読み込み
import PageTitle from '../component/PageTitle';

import '../contents/App.css';
// import { isLoading } from '../common/common.js';
import EventListData from '../data/eventlist.json';

// -------------- ここから本文 --------------
export function EventList() {

  // ローディング画面表示
  // isLoading(true);

  // 表示ページ名
  const title: string = 'EVENT LIST';

  // オブジェクトの型指定
  type EventList = {
    year: number;
    eventId: number;
    eventName: string;
    goodsRegisted: boolean;
  }

  // JSONのデータを配列に格納
  const eventList: Array<EventList> = EventListData.eventlist.map((list: EventList, index) => {
    return list;
  });

  console.log(eventList[0]);

  // ローディング画面非表示
  // isLoading(false);

  // 描画内容
  return (
    <main id='event-list'>
      <div className='contents-header'>
        <div className='back-button'><NavLink to='../'><RiDeleteBack2Fill /></NavLink></div>
        <PageTitle pageTitle={title} />
        <div className='go-button'></div>
      </div>
          {
            // イベント数分の配列処理開始
          }
      <section className='contents-main'>
        <h2 className='event-year'>2023</h2>
        <div className='event-list common-container'>
          <div className='event'>
            <p className='event-name'></p>
            <button className='wish-button'>wish</button>
            <button className='result-button'>result</button>
          </div>
        </div>
      </section>
          {
            // イベント数分の配列処理ここまで
          }
    </main>
  );
}
// -------------- 本文ここまで --------------

export default EventList;