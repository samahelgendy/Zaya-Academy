import {Form, Input , Button , Typography , message} from 'antd';
import { useState } from 'react';
import NavRegister from '../Login/NavLogin';
import { useNavigate } from 'react-router-dom';
import Translate from '../../Translate';
import { useTranslation } from 'react-i18next'
import AppFooter from '../Home/AppFooter';

function SecondLogin (){
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [loading , setLoading]=useState(false);
  
    let navigate=useNavigate();
    const [products , setProducts] = useState([]);
   
    const onFinish = () =>{
        setLoading(true);
        try {
         setTimeout(()=>{
            fetch("http://localhost:5000/users")
            .then((res)=> res.json() )
            .then((products)=> {
                setProducts(products)

               let match = products.some((product) => {
                    const username = document.querySelector("#username");
                    const password = document.querySelector("#password");

                        return username.value == product.username && password.value == product.password;

                })
                            if(match){
                            message.success('The account was created successfully');
                            navigate('/main');
                        } else{
                            message.error('The password or userName is error');
                        }
            } )  
                       

            setLoading(false);  
            } , 1500)
        } catch (error) {
         console.error("Error:", error);
       }

     }
     const {t} = useTranslation();
     const msgName = t("mesname");
     const msgPass = t("msgPass");
    return(
      <>
        <NavRegister />
        <Translate />
        <div className='loginContainer ' style={{marginTop:"100px"}}>
            <Typography.Title style={{position:"relative" , top:"80px"}}>{t("login")}</Typography.Title>
            <Form  onFinish={onFinish} className='firstLogin' labelCol={{ span:10 }} wrapperCol={{span:15}} >
            <Form.Item label={t('userName')} name={"username"} rules={[{
                    required:true,
                    message:msgName 
                },
                {
                    min:8,
                },
            {
                whitespace:true,
            }]}
                hasFeedback
                >
                  <Input className='userName' onChange={(e)=>{setUsername(e.target.value)}}  placeholder={t("nameHolder")}/>
                </Form.Item>
                <Form.Item label={t("labpass")} name={"password"} rules={[{
                    required:true,
                    message:msgPass      
                },
                {
                    whitespace:true,
                }
            ]}
                hasFeedback>
                    <Input  style={{width:"100%"}} onChange={(e)=>{setPassword(e.target.value)}}  placeholder={t("inpPass")} />
                </Form.Item>
                <Button loading={loading} htmlType='submit' className='btnlog' >{t("login")}</Button>
            </Form>
            
        </div>
        
        </>
    )
}

export default SecondLogin;