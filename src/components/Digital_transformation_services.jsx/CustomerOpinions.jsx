import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './CustomerOpinions.css'
import { CommentOutlined, DoubleLeftOutlined, QuestionCircleFilled, StarFilled } from '@ant-design/icons';
import user from '../../assets/user.jpg';
import { useEffect } from 'react';
import { SpaceCompactItemContext } from 'antd/es/space/Compact';
import { useTranslation } from 'react-i18next';
function CustomerOpinions (){
  const {t} = useTranslation();
    return(
       <div className='container'>
         <Swiper style={{width:"100%" , }}
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={25}
        loop={true}
        navigation
        breakpoints ={{
          578: {
            slidesPerView: 1,
        },
          768 : {
              slidesPerView:2,
          },
          1024 : {
              slidesPerView:3,
          }
        }}


        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide className='swiperslide'>
        <div className="img-person" style={{width:"100px",height:"100px",margin:"0px auto 10px",}}>
              <img src={user} alt="" style={{width:"100%", height:"100%", borderRadius:"50%"}} />
        </div>

            <h6 style={{margin:"10px 0 10px" , }}>{t("clientName-1")}</h6>
            <div className="starts" style={{marginBottom:10}}>
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
             </div>
             <div>
                <p>{t("seeClient-1")}</p>
             </div>
            <DoubleLeftOutlined className='quote'  />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <div className="img-person" style={{width:"100px",height:"100px",margin:"0px auto 10px",}}>
              <img src={user} alt="" style={{width:"100%", height:"100%", borderRadius:"50%"}} />
        </div>

        <h6 style={{margin:"10px 0 10px"}}>{t("clientName-2")}</h6>
            <div className="starts" style={{marginBottom:10}}>
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
             </div>
             <div>
             <p>{t("seeClient-2")}</p>
             </div>
            <DoubleLeftOutlined className='quote'  />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <div className="img-person" style={{width:"100px",height:"100px",margin:"0px auto 10px",}}>
              <img src={user} alt="" style={{width:"100%", height:"100%", borderRadius:"50%"}} />
        </div>

        <h6 style={{margin:"10px 0 10px"}}>{t("clientName-3")}</h6>
            <div className="starts" style={{marginBottom:10}}>
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
             </div>
             <div>
             <p>{t("seeClient-3")}</p>
             </div>
            <DoubleLeftOutlined className='quote'  />
        </SwiperSlide>
        <SwiperSlide className='swiperslide'>
        <div className="img-person" style={{width:"100px",height:"100px",margin:"0px auto 10px",}}>
              <img src={user} alt="" style={{width:"100%", height:"100%", borderRadius:"50%"}} />
        </div>

        <h6 style={{margin:"10px 0 10px"}}>{t("clientName-6")}</h6>
            <div className="starts" style={{marginBottom:10}}>
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
              <StarFilled style={{marginLeft:"10px",color:'yellow'}} />
             </div>
             <div>
             <p>{t("seeClient-4")}</p>
             </div>
            <DoubleLeftOutlined className='quote'  />
        </SwiperSlide>

      </Swiper>
       </div>
    )
}
export default CustomerOpinions;