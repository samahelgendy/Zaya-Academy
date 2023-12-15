
import user from '../../assets/user.jpg'
import Zaya from '../../assets/za-deg.png'
function SpecialQuestion(){
    return(
        <div className="container">
        <div className="flex mob:flex-col justify-between my-5 da-tm" style={{padding:"0 50px"}}>
         <h2>الأسئلة (1)</h2>
         <p className="text-base">
            <span className="switch question-switch opacity-50">
                <span>سؤال واحد</span>
            </span>
         </p>
        </div>
        <salla-infinite-scroll autoload="false" next-page className="hydrated">
          <div className="mb-3 list-block   no-order">
            <div className="comment comment mb-5 flex text-sm space-s-2 comment_id_15129031">
                <div className="flex-none relative ">
                    <div className="relative">
                          <div className=" da-bgm rounded-full overflow-hidden">
                            <img style={{width:40 , height:40 , marginLeft:10}} src={user} data-src="https://cdn.assets.salla.network/stores/themes/default/assets/images/avatar_female.png"
                              alt="صفية عسيري" loading="lazy" data-ll-status="loaded"
                            />
                        </div>
                        <div className="vertical-line block absolute w-0.5 bg-gray-200 dark:bg-opacity-20 start-1/2 bottom-0"></div>
                       </div>
                       </div>
                    <div className="flex-1 rounded-xl shadow-sm bg-gray-200 bg-opacity-20 dark:bg-opacity-05 py-2 px-3 ">
                       <div className="flex flex-col">
                        <div className="flex justify-between items-center w-full mb-1">
                            <h3 className="text-sm da-tm">صفية عسيري</h3>
                            <p className="text-gray-400 da-ts text-sm">منذ ٦ أشهر</p>
                        </div>
                       </div >

                       <div className="nested-comment reply ps-4 admin comment flex text-sm space-s-2 comment_id_15130206">
                        <p>تواصلت على الواتس بعد من قبل ومحد رد علي </p>
                       </div>
                    </div>
               
                </div>
                <div className="nested-comment reply ps-4 admin comment flex text-sm space-s-2 comment_id_15130206">
                    <div className='h-4 w-5 pt-5 border-s-2 border-b-2 border-gray-200 dark:border-opacity-20 rounded-bs-md'></div>
                    <div className="flex-none relative mt-2">
                       <div className="relative">
                        <div class=" da-bgm rounded-full overflow-hidden">
                            <img src={Zaya} style={{width:40 , height:40 }} />
                        </div>
                       </div>
                    </div>
                    <div className="flex-1 rounded-xl shadow-sm bg-gray-200 bg-opacity-20 dark:bg-opacity-05 py-2 px-3 mt-2">
                      <div className="flex flex-col">
                        <div className="flex justify-between items-center w-full mb-1">
                            <h3 className="text-sm da-tm">زايا الرقمية | Zaya Digital</h3>
                            <p className="text-gray-400 da-ts text-sm">منذ ٦ أشهر</p>
                        </div>
                      </div>
                      <div classNmae="prose prose-sm max-w-none text-gray-500 da-tm">
                        <p style={{textAlign:"right"}}>0550804800 موجودين واتس اب استاذه صفية ارجوا الارسال على الرقم والتعريف بإسمك ليتم ارسالهم لك</p>
                      </div>
                    </div>
                </div>
            </div>
          
        </salla-infinite-scroll>
        </div>
    )
}
export default SpecialQuestion;