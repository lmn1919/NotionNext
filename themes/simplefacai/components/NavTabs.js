

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
  let [activeUrl,chnageActiveUrl] = useState('/')
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
  // let activeUrl=
  const handleChange = (el) => {
    console.log(el)
    // activeUrl=el.href
    chnageActiveUrl(el.href)
    // this.setState({ activeUrl:el.href })
    // console.log(activeUrl)
  }

  return  <div  className='nav-item flex'>
            {tabs.map((sLink, index) => {
            return (
              <div
                key={index}
                className={`tabs-item`} >
                <Link href={sLink.href}  onClick={() => handleChange(sLink,index)}>
                  <span> 
                 
                     
                    {activeUrl==sLink.href? (
                             <span className='tabs-active' ></span>
                    ):''}
                 
                    {sLink.name}
                  </span>
                </Link>
              </div>
            )
          })}
         </div>
}

export default NavTabs
