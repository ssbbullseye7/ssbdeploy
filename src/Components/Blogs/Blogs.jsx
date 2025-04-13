import React, { useEffect, useState, useMemo } from "react";
import "./style.css";
import im1 from "../../im3.jpg";
import im4 from "../../im4.avif";
import im5 from "../../im5.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import tempimg from "../../Designer 4.png"
import tempimg1 from "../../Designer 1.png"
import tempimg2 from "../../Designer 2.png"
import tempimg3 from "../../Designer 3.png"
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, FreeMode, Pagination, Navigation } from "swiper/modules";
const images = [tempimg, tempimg1, tempimg2, tempimg3];
const Card=({data})=>{
  let tem=data[5];
  if(data[5]>=0&&data[5]<=4){
    tem=images[data[5]];
  }

  return (<>
  <div className="carousal-card" onClick={() => {
    window.open(data[4], '_blank');
  }}>
    <div className="card-img">
      <img src={tem} alt="" />
    </div>
    <div className="card-title">{data[2]}</div>
    <div className="card-date">{data[1]} | {data[0]}</div>
  </div>
  </>);
};


function Blogs() {
  const [sheetData, setSheetData] = useState([]);
  const [data, setData] = useState(null);

  const sheetId = process.env.REACT_APP_SHEET_ID;
  const apiKey = process.env.REACT_APP_API_KEY; // Replace with your Google Sheets API key
  const sheetName = "Sheet1"; // Replace with your sheet name

  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${sheetName}?key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        const values = data.values || [];
        setSheetData(values);
        setData(values.slice(1).reverse()); // Skip the first row (headers)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 10 seconds
    }, 5000);

    return () => {
      clearInterval(intervalId); 
    };
  }, [sheetId, apiKey, sheetName]);

  // const columns = React.useMemo(
  //   () =>
  //     sheetData.length > 0
  //       ? sheetData[0].map((col, index) => ({
  //           Header: col,
  //           accessor: String(index), // Using column index as accessor
  //         }))
  //       : [],
  //   [sheetData]
  // );
  return (
    <div className="blogs-container">
      <div className="blogs-container-header">
        <div className="blogs-container-header-title">Recent Blogs & News</div>
        <div className="blogs-container-header-content">
          Insight right in what you need to know and plan for achieving your
          goals and planning your future.
        </div>
      </div>
      <div className="blogs-carousal">
        <div className="blogs-carousal-container">
        <Swiper
        spaceBetween={30}
       
        breakpoints={{
          // When screen width is at least 640px
          780: {
            slidesPerView: 'auto',
            centeredSlides: true,
            // loop:true,
          },
          1100:{
            slidesPerView:3,
            centeredSlides:true,
            initialSlide:1,
          }
        }}
        navigation={{
          nextEl: ".next",
    
          prevEl: ".prev",
          clickable: true,
        }}
        modules={[Navigation]}
        className="swiper"
      >
        { data &&
         data?.map((e,i)=>{
return (   <SwiperSlide className="swiperSlide"><Card data={e}/></SwiperSlide>);
         })
        }
     
        {/* <SwiperSlide className="swiperSlide"><Card/></SwiperSlide>
        <SwiperSlide className="swiperSlide"><Card/></SwiperSlide>
        <SwiperSlide className="swiperSlide"><Card/></SwiperSlide>
        <SwiperSlide className="swiperSlide"><Card/></SwiperSlide>
        <SwiperSlide className="swiperSlide"><Card/></SwiperSlide>
        <SwiperSlide className="swiperSlide"><Card/></SwiperSlide> */}
      </Swiper>
        </div>
     <div className="next-prev-button">
      <div className="prev" style={{cursor:"pointer"}}>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.56 25.0601C15.2788 25.341 14.8975 25.4988 14.5 25.4988C14.1025 25.4988 13.7213 25.341 13.44 25.0601L4.94002 16.5601C4.65912 16.2788 4.50134 15.8976 4.50134 15.5001C4.50134 15.1026 4.65912 14.7214 4.94002 14.4401L13.44 5.9401C13.7245 5.67528 14.1006 5.53107 14.4893 5.53779C14.8779 5.5445 15.2488 5.70161 15.524 5.9761C15.7985 6.25131 15.9556 6.62221 15.9623 7.01084C15.969 7.39947 15.8248 7.77558 15.56 8.0601L9.62002 14.0001L24.5 14.0001C24.8978 14.0001 25.2794 14.1581 25.5607 14.4394C25.842 14.7207 26 15.1023 26 15.5001C26 15.8979 25.842 16.2795 25.5607 16.5608C25.2794 16.8421 24.8978 17.0001 24.5 17.0001L9.62002 17.0001L15.56 22.9401C15.8409 23.2213 15.9987 23.6026 15.9987 24.0001C15.9987 24.3976 15.8409 24.7788 15.56 25.0601Z" fill="#FFCB11"/>
</svg>
</div>
<div className="next"style={{cursor:"pointer"}}>
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.44 25.0601C16.7212 25.341 17.1025 25.4988 17.5 25.4988C17.8975 25.4988 18.2787 25.341 18.56 25.0601L27.06 16.5601C27.3409 16.2788 27.4987 15.8976 27.4987 15.5001C27.4987 15.1026 27.3409 14.7214 27.06 14.4401L18.56 5.9401C18.2755 5.67528 17.8994 5.53107 17.5107 5.53779C17.1221 5.5445 16.7512 5.70161 16.476 5.9761C16.2015 6.25131 16.0444 6.62221 16.0377 7.01084C16.031 7.39947 16.1752 7.77558 16.44 8.0601L22.38 14.0001L7.49998 14.0001C7.10215 14.0001 6.72062 14.1581 6.43932 14.4394C6.15801 14.7207 5.99998 15.1023 5.99998 15.5001C5.99998 15.8979 6.15801 16.2795 6.43932 16.5608C6.72062 16.8421 7.10215 17.0001 7.49998 17.0001L22.38 17.0001L16.44 22.9401C16.1591 23.2213 16.0013 23.6026 16.0013 24.0001C16.0013 24.3976 16.1591 24.7788 16.44 25.0601Z" fill="#FFCB11"/>
</svg></div>
     </div>
      </div>
      {/* <div className="blogs-header">
        <div className="blog-heading">Recent Blogs & News</div>
      </div>

      <div className="blog-box-container">
        {data && (
             <>
          <div className="blog" onClick={() => {
    window.open(data[data.length-1][4], '_blank');
  }}>
            <div className="blog-image">
              <img src={im1} alt="" />
            </div>
            <div className="blog-content">
              <div className="keyword">
                {data[data.length - 1][1]} | {data[data.length - 1][0]}
              </div>
              <div className="blog-title">{data[data.length - 1][2]}</div>
              <div className="blog-para">{data[data.length - 1][3]}</div>
            </div>
          </div>
        
        <div className="blog" onClick={() => {
    window.open(data[data.length-2][4], '_blank');
  }}>
          <div className="blog-image">
            <img src={im4} alt="" />
          </div>
          <div className="blog-content">
          <div className="keyword">
                {data[data.length - 2][1]} | {data[data.length - 2][0]}
              </div>
              <div className="blog-title">{data[data.length - 2][2]}</div>
              <div className="blog-para">{data[data.length - 2][3]}</div>
          </div>
        </div>
        <div className="blog" onClick={() => {
    window.open(data[data.length-3][4], '_blank');
  }}>
          <div className="blog-image">
            <img src={im5} alt="" />
          </div>
          <div className="blog-content">
          <div className="keyword">
                {data[data.length - 3][1]} | {data[data.length - 3][0]}
              </div>
              <div className="blog-title">{data[data.length - 3][2]}</div>
              <div className="blog-para">{data[data.length - 3][3]}</div>
          </div>
        </div>
       </>
        )}
      </div> */}
    </div>
  );
}

export default Blogs;
