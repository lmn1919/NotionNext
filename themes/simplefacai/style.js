/* eslint-disable react/no-unknown-property */
/**
 * 此处样式只对当前主题生效
 * 此处不支持tailwindCSS的 @apply 语法
 * @returns
 */
const Style = () => {
  return <style jsx global>{`
    
  // 底色
  .dark body{
      background-color: black;
  }
  // 文本不可选取
    .forbid-copy {
        user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
  
  #theme-simple #announcement-content {
    /* background-color: #f6f6f6; */
  }
  
  #theme-simple .blog-item-title {
    color: #18191b;
  }
  
  .dark #theme-simple .blog-item-title {
    color: #d1d5db;
  }
  
  .notion {
    margin-top: 0 !important;
    margin-bottom: 0 !important;
  }
  
  
  /*  菜单下划线动画 */
  #theme-simple .menu-link {
      text-decoration: none;
      background-image: linear-gradient(#dd3333, #dd3333);
      background-repeat: no-repeat;
      background-position: bottom center;
      background-size: 0 2px;
      transition: background-size 100ms ease-in-out;
  }
   
  #theme-simple .menu-link:hover {
      background-size: 100% 2px;
      color: #dd3333;
      cursor: pointer;
  }

  .yellow-color{
  color: #e94328;
  }

  .text-14{
  font-size: 14px;
}

.relative{
position: relative;
}
.article-line{
 height: 2px;
 background-color: #999;
 width: 50px;
 position: absolute;
 top:-20px
}
  
.nav-item{

color: #fff;
position:fixed;
top:80px;
right:20px;
background: #18191b;
display: inline-flex;
height: 130px;
padding:20px

}
.tabs-item{
width:45px;
padding:0 10px;
}
  

  `}</style>
}

export { Style }

