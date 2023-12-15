import {  Typography } from "antd";
import { useEffect,  useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector , useDispatch } from "react-redux";
import { DeleteFilled, HeartOutlined , PercentageOutlined } from "@ant-design/icons";
import { removeFromCart } from "../../app/features/CartSlice";
import Swal from 'sweetalert2';
import './Products.css';
import { Link } from "react-router-dom";
function Product (){

    const carts = useSelector(state => state.cart);
    const{t , i18n} = useTranslation();
   
        const TotalPrice = carts.reduce((acc , product)=>{
            acc += +product.price ;
            return acc;
        } , 0);

    window.onscroll=()=>{
      const product = document.querySelector(".product");
      const discount = document.querySelector(".discount");
      const stop = document.querySelector(".stop");
      if(window.scrollY >= product.offsetTop && window.scrollY < stop.offsetTop - 400 ){
         discount.classList.add("active-discount"); 
      }else{
       discount.classList.remove("active-discount");
      }
   }
   const [photo , setPhoto] = useState("");
   const [name , setName] = useState("");
   const [name_ar , setName_ar] = useState("");
   const [price , setPrice] = useState("");
   const [price_ar , setPrice_ar] = useState("");
   
   useEffect(()=>{  
    
    const savedData = JSON.parse(localStorage.getItem("orderFormData"))||{};
    setPhoto(savedData.photo || "");
    setName(savedData.name || "");
    setName_ar(savedData.name_ar || "");
    setPrice(savedData.price || "");
    setPrice_ar(savedData.price_ar || "");
    console.log("saved" , savedData);


    const seles = document.querySelectorAll(".selece_1");
    const seles_2 = document.querySelectorAll(".selece_2");
     seles.forEach((sele)=>{ 
          if(sele.innerText === ''){
          sele.style.display ="none";        
          }
          else {
            sele.style.display ="block";         
          }
     });

     seles_2.forEach((sele_2)=>{ 

      if(sele_2.innerText === ''){
      sele_2.style.display ="none";

      }
      else {
        sele_2.style.display ="block";

      }

     });
     const notes = document.querySelectorAll(".notes");
     
     notes.forEach((note)=>{ 
   
      if(note.innerText === ''){
        note.style.display ="none";
        }
        else {
          note.style.display ="block";
        }

     });

         }
        
    ,[])
       
    const savedToLocalStorage = ()=>{
        const savedData = JSON.parse(localStorage.getItem("orderFormData"))||{};
        const formData = {
            photo,
            name,
            name_ar,
            price,
            price_ar
        }
        localStorage.setItem("orderFormData" , JSON.stringify(formData));
    }

    return(
      <>
       <div className="sessCarts" style={{display:"flex" , justifyContent:'space-between' , margin:"80px 0 "}}>
        <div className="product" style={{width:"60%"}} >    
       {carts.map((cart)=>{
        if(i18n.language == 'en'){
            return(
                <div className="producten container" key={cart.id} >           
                 <div style={{display:"flex", justifyContent:"flex-start" , marginBottom:20 }}>
                 <Link to={`/${cart.id}`}>
                 <img  src={cart.photo} style={{width:"120px",height: "100px",borderRadius: "10px"}} />
                 </Link>
                <div style={{marginRight:15}}>
                <Typography.Text>{cart.name}</Typography.Text>
                <Typography style={{marginTop:10 , textAlign:"right"}}>{cart.price}{t("sort")}</Typography>
                </div>
                 </div>

                 <hr style={{padding:"10px 0 "}} />
                 <div style={{marginBottom:"50px" ,display: "flex",justifyContent: "space-between",alignItems:"center"}}>
                    <div style={{textAlign: "right", marginBottom:" 20px"}}>
                        <Typography.Text >{t("total")} : {cart.price}{t("sort")}</Typography.Text>
                    </div>
                    <div style={{display:"flex"}}>
                    <AddToItem />
                   <button>
                   <DeleteButton item={cart} />
                   </button>
                    </div>
                 </div>
                </div>  
            )
        }else{
            return(
                <div className="productar container" key={cart.id}>      
                 <div style={{display:"flex", justifyContent:"flex-start" , marginBottom:20 }}>
                 <img src={cart.photo} style={{width:"120px",height: "100px",borderRadius: "10px"}} />
                <div style={{marginRight:15}}>
                <Typography.Text>{cart.name_ar}</Typography.Text>
                <Typography style={{marginTop:10 , textAlign:"right"}}>{cart.price_ar}{t("sort")}</Typography>
                </div>
                 </div>
                     
                 <hr style={{padding:"10px 0 " }} />
                 <div style={{marginBottom:"50px" ,display: "flex",justifyContent: "space-between",alignItems:"center"}}>
                    <div style={{textAlign: "right", marginBottom:" 20px"}}>
                        <Typography.Text >{t("total")} : {cart.price}{t("sort")}</Typography.Text>
                    </div>
                    <div style={{display:"flex"}}>
                    <AddToItem  />
                   <button>
                      <DeleteButton item={cart} />
                   </button>
                    </div>
                 </div>
                </div>

              
            )
           }

       })}
        </div>

        <div className="discount" style={{ width:"35%" , marginLeft:20  }}>
        <div style={{ boxShadow:"10px 10px 10px 10px #eeeeee90" , padding:"40px 20px"}}>
              <PercentageOutlined style={{border:"1px solid",borderRadius:"50%",padding: "3px",marginLeft:10}}/><Typography.Text style={{fontWeight:"bold"}}>{t("code")}</Typography.Text>
              <div style={{display:"flex" ,marginTop:"20px" , justifyContent:"center"}}>
              <input placeholder={t("entercode")} style={{border: "1px solid #451256",padding:" 0 20px",outline: "none" ,borderEndStartRadius: "6px",borderStartStartRadius:"6px" , fontSize:"14px" , color:"#333"}} />
              <button style={{background:"#451256" , color:"white" , padding:"8px 10px" , borderEndEndRadius:"6px", borderStartEndRadius: "6px", fontSize:"14px"}}>{t("discountapll")}</button>
              </div>
        </div>

        <div style={{ boxShadow:"10px 10px 10px 10px #eeeeee90" , padding:"40px 20px"}}>
             <Typography.Text style={{fontWeight:"bold" , display:"flex" , justifyContent:"flex-start" , fontSize:"25px" , marginBottom:"20px"}}>{t("summary")}</Typography.Text>
             <div style={{display:"flex" , justifyContent:"space-between"}}>
             <Typography.Text style={{ marginBottom:"20px"}}>{t("total products")} : </Typography.Text>
             <span style={{color:"#333"}}>{TotalPrice}{t("sort")}</span>
             </div>

             <div style={{display:"flex" , justifyContent:"space-between" , }}>
             <Typography.Text style={{ marginBottom:"20px" , fontSize:"25px" }}>{t("total")} : </Typography.Text>
             <span style={{color:"#333" , fontSize:"25px"}}>{TotalPrice}{t("sort")}</span>
             </div>
              <button style={{background:"#451256" , color:"white" , padding:"8px 10px" , borderRadius:"6px" , width:"90%" ,}}>{t("request")}</button>
           </div>

       </div>
        
       </div>
       <div className="stop"></div>
       </>
    )
}

const DeleteButton =({item})=>{
    const dispatch = useDispatch();
    const AlertDelete=()=>{
        Swal.fire({
            title:`You Are Sure To Delete ${item.category}?`,
            showCancelButton:true,
        }).then((data)=>{
            if(data.isConfirmed){
            dispatch(removeFromCart(item));
            }
        })
    }
   return (            
   <DeleteFilled onClick={()=>{AlertDelete()}} style={{cursor:"pointer" , color:"rgb(211, 4, 4)" , fontSize:"20px"}}/>
)
}
const AddToItem = ()=>{
    const{t} = useTranslation();
    const wishes = ()=>{
        const seles = document.querySelectorAll(".btnwatches");
         seles.forEach((sele)=>{
            sele.addEventListener("click" , ()=>{
                sele.classList.toggle("active")
            })
         })
     }

    return(
        <button onClick={()=>{wishes()}} style={{background:"#451256" , padding:"5px" , marginLeft:"15px"}} className=" btnwatches flex justify-center items-center text-[12px]  text-white rounded-md">
        <HeartOutlined  style={{marginLeft:5}} /> {t("wishes")}
        </button>
    )
}



export default Product;