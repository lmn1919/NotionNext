import DarkModeButton from '@/components/DarkModeButton'
import { siteConfig } from '@/lib/config'

/**
 * 页脚
 * @param {*} props
 * @returns
 */
export default function Footer (props) {
  const d = new Date()
  const currentYear = d.getFullYear()
  const since = siteConfig('SINCE')
  const copyrightDate = parseInt(since) < currentYear ? since + '-' + currentYear : currentYear

  return <footer className="relative w-full px-6 border-t">
        {/* <DarkModeButton className='text-center pt-4'/> */}

        <div className=" container mx-auto max-w-4xl py-6 md:flex flex-wrap md:flex-no-wrap md:justify-center items-center text-sm">
            {/* <div className='text-center'> &copy;{`${copyrightDate}`} {siteConfig('AUTHOR')}. All rights reserved.</div> */}
            <a href="https://beian.miit.gov.cn/" target="_blank">桂ICP备2022006957号-2</a>
        </div>
    </footer>
}
