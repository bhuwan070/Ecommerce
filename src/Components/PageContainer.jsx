import React from 'react'
import Banner from "../assets/Blog/header-bg.png"

const PageContainer = () => {
  return (
    <section className='w-full h-[270px] p-4'>
        <div className='w-full h-full bg-no-repeat bg-center bg-cover rounded-3xl'
        style={{backgroundImage: `url(${Banner})`}}>
            <div className=''>
                <div></div>
                <div> </div>
            </div>
        </div>

    </section>
  )
}

export default PageContainer