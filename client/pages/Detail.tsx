import React from 'react';
import '../App.css';
import Mynavbar from './navbar';
//123

import { RootState, addList, removeList } from "./store";
import { useDispatch, useSelector } from "react-redux";

//asd
function Detail() {
  const j_list = useSelector((state: RootState) => state.j_list);
    let dispatch = useDispatch();
    //{ categori : 'none', title :'none',  date : '2023-10-01'}

    //thin line 추가
  return (
<div>
    <Mynavbar></Mynavbar>

    

    <div className="janghak_text"> 장학 </div>

    <button onClick={() => {
      console.log(j_list)
      dispatch(addList({ categori : 'none', title :'none',  date : '2023-10-01'}))
    }}>추가</button>
      
    <button onClick={() => {
      dispatch(removeList(j_list.length-1))
    }}>삭제</button>

    <div className="janghak_container">
      <button className='janghak_categori'> 전체 </button>
      <input className='janghak_search' type='text'/>
      <button className='janghak_icon'> 돋보기 </button>
    </div>


    <div className='janghak_list'>

      <div className='janghak_thick_line'></div>

      <div className='janghak_title'>
        <div className='janghak_text1'>카테고리</div>
        <div className='janghak_text1'>제목</div>
        <div className='janghak_text1'>등록일</div>
      </div>

      {/* <div className='janghak_thin_line'></div> */}

      {
        j_list.map((a,i) => {
          return(

            <div key={i}>

            <div className='j_list_container'>

              <div className='j_list_categori'>
                <div className='j_list_categori_rec'>
                  <p className='j_list_categori_text'>공통</p>  
                </div>
              </div>

              <div className='j_list_title'> 
                <div>[공통][교외] 2023년 통영시 대학생 등록 전액 지원 사업 안내</div> 
              </div>

              <div className='j_list_date'> 
                <div> 2023-10-03</div>
              </div>
              
            </div>

            <div key={i} className='janghak_thin_line'></div>

            </div>
            
          )
        })
      }


    </div>
    
</div>
    
  );
}

export default Detail;