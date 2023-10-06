import React from 'react';
import { NavLink } from "react-router-dom";

// 子コンポーネントに渡したいReactIconの読み込み
import { BiCalendarEvent } from "react-icons/bi";
import { FaPenFancy } from "react-icons/fa";
import { RiDeleteBack2Fill } from "react-icons/ri";

// 使用する子コンポーネントの読み込み
import PageTitle from '../component/PageTitle';
import MenuButton from '../component/MenuButton';

import '../contents/App.css';

// -------------- ここから本文 --------------
export function Management() {
  
  // 表示ページ名
  const title: string = "MANAGEMENT";
  
  // React Iconsより取得したアイコンを処理
  const EventManageIcon = (): JSX.Element => { 
    return <BiCalendarEvent />
  }
  const GoodsManageIcon = (): JSX.Element => { 
    return <FaPenFancy />
  }
  
  // 描画内容
  return (
    <>
      <main>
        <div className='contents-header'>
          <div className='back-button'><NavLink to='../'><RiDeleteBack2Fill /></NavLink></div>
          <PageTitle pageTitle={title} />
          <div className='go-button'></div>
        </div>
        <div className='contents-main'>
          <MenuButton buttonLabel='イベント管理' buttonName='event-management' buttonIcon={<EventManageIcon />} isUse={true} />
          <MenuButton buttonLabel='グッズ管理' buttonName='goods-management' buttonIcon={<GoodsManageIcon />} isUse={true} />
        </div>
      </main>
    </>
  );
}
// -------------- 本文ここまで --------------

export default Management;