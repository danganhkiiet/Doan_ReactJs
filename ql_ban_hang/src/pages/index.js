import Header from "../components/header";
import Carousels from "../components/carousel";
import ProductType from "../components/content";
import Footer from "../components/footer";
import { useEffect, useState } from "react";


function Index() {
  const [dsLoaiSanPham,setdsLoaiSanPham] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:9000/get-data.php')
    .then(response =>response.json())
    .then(json =>setdsLoaiSanPham(json))
  },[]);


  const dsloaisanpham = dsLoaiSanPham.map(function(item){
    return(
      <>
          <ProductType data={item}/>
      </>
    );
  })
    return (
      <>
          <Header/>
          <div className='carousels'>
          <Carousels/>
          </div>
          <div>{dsloaisanpham}</div>
          <Footer/>
      </>
    );
  }
  export default Index