import React from 'react';
import { NavLink } from "react-router-dom";

// 子コンポーネントに渡したいReactIconの読み込み
import { BsFillGearFill } from "react-icons/bs"
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

// 使用する子コンポーネントの読み込み
import PageTitle from '../component/PageTitle';
import MenuButton from '../component/MenuButton';

import '../contents/App.css';

// -------------- ここから本文 --------------
export function Menu() {

  // 表示ページ名
  const title: string = "MENU";

  // React Iconsより取得したアイコンを処理
  const ManagementIcon = (): JSX.Element => { 
    return <BsFillGearFill />
  }
  const EventListIcon = (): JSX.Element => { 
    return <HiOutlineClipboardDocumentList />
  }

  // 描画内容
  return (
    <>
      <main>
        <div className='contents-header'>
          <div className='back-button'></div>
          <PageTitle pageTitle={title} />
          <div className='go-button'></div>
        </div>
        <div className='contents-main'>
          <MenuButton buttonLabel='ユーザー画面' buttonName='event-list' buttonIcon={<EventListIcon />}  isUse={false}/>
          <NavLink to='./Management'>
            <MenuButton buttonLabel='管理画面' buttonName='infomation' buttonIcon={<ManagementIcon />}  isUse={false}/>
          </NavLink >
        </div>
      </main>
    </>
  );
}
// -------------- 本文ここまで --------------

export default Menu;
