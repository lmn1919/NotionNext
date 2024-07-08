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
 top:-15px
}
  
.nav-item{

  color: #fff;
  position:fixed;
  top:30px;
  right:30px;
  background: #18191b;
  display: inline-flex;
  height: 135px;
  padding:20px;
  z-index:1000
}
.tabs-item{
  width:35px;
  padding:0 5px;
  margin-right:15px;
  position: relative;
}
.tabs-active{
  border:4px solid #e94328;
  display:inline-block;
  height:15px;
  width:15px;
  position: absolute;
  border-radius: 50%;
  right: 0;
}

.content-main{
 width:1000px;
 box-shadow: 0px 0px 30px 0px  #f5f5f5;  
}
  

  `}</style>
}

export { Style }

