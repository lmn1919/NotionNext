

import { useGlobal } from '@/lib/global'
import { useEffect, useState } from 'react'
import Link from 'next/link'
/**
 * 跳转到网页顶部
 * 当屏幕下滑500像素后会出现该控件
 * @param targetRef 关联高度的目标html标签
 * @param showPercent 是否显示百分比
 * @returns {JSX.Element}
 * @constructor
 */
const NavTabs = () => {
  const { locale } = useGlobal()
  const [show, switchShow] = useState(false)
  const tabs=[{
    name:'文章',
    href:'/'
  },{
    name:'历史归档',
    href:'/archive'
  },{
    name:'文章分类',
    href:'/category'
  },{
    name:'文章标签',
    href:'/tag'
  },]


  return  <div id='nav-menu-pc' className='nav-item flex'>
            {tabs.map((sLink, index) => {
            return (
              <div
                key={index}
                className='tabs-item'>
                <Link href={sLink.href} >
                  <span>
                    
                    {sLink.name}
                  </span>
                </Link>
              </div>
            )
          })}
         </div>
}

export default NavTabs
