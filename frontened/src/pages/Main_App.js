import { useState } from 'react';
import React from 'react';

function Main_App(){
    const [themeF, setColorF] = useState(0); 
    const [themeS, setColorS] = useState(0); 
    const [themeT, setColorT] = useState(0); 
    const [themeFo, setColorFo] = useState(0); 

    const [switcher, setRecord] = useState(0);
    const [stopper, stopRecord] = useState(0);

    const [sender, sendForm] = useState(0);
    return (
        <div className='Main_App_container'>
            <div className='Main_App_leftColumn'>
                <div className='Main_App_leftColumn_user'>
                    <img src='/img/person.png' className='Main_App_leftColumn_block_img'></img>
                    <p className='Main_App_leftColumn_user_p'>ФИО пользователя</p>
                </div>
                <div className='Main_App_leftColumn_div'>
                    <div className='Main_App_leftColumn_gestureToText flex' onClick={() => {setColorF(1);  setColorS(0); setColorT(0); setColorFo(0);}}>
                        {themeF === 0 ? ( <>
                            <img id='hand' src='/img/hand normal.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p'>жесты→текст</p>
                        </>
                        ) : ( <>
                            <img id='hand' src='/img/hand color.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p color'>жесты→текст</p>
                            </>       
                        )}
                    </div>
                    <div className='Main_App_leftColumn_textToGesture flex' onClick={() => {setColorF(0);  setColorS(1); setColorT(0); setColorFo(0);}}> 
                        {themeS === 0 ? ( <>
                            <img id='A' src='/img/A normal.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p'>жесты→текст</p>
                            </>
                        ) : ( <>
                            <img id='A' src='/img/A color.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p color'>голос→текст</p>
                            </>       
                        )}
                    </div>
                    <div className='Main_App_leftColumn_favorites flex' onClick={() => {setColorF(0);  setColorS(0); setColorT(1); setColorFo(0);}}>
                        {themeT === 0 ? ( <>
                            <img id='like' src='/img/like normal.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p'>избранное</p>
                            </>
                        ) : ( <>
                            <img id='like' src='/img/like color.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p color'>избранное</p>
                            </>       
                        )}
                    </div>
                    <div className='Main_App_leftColumn_articles flex' onClick={() => {setColorF(0);  setColorS(0); setColorT(0); setColorFo(1);}}>
                        {themeFo === 0 ? ( <>
                            <img id='news' src='/img/news normal.svg' className='Main_App_leftColumn_block_img'></img>
                            <p className='Main_App_leftColumn_p'>статьи</p>
                            </>
                        ) : ( <>
                             <img id='news' src='/img/news color.svg' className='Main_App_leftColumn_block_img'></img>
                             <p className='Main_App_leftColumn_p color'>статьи</p>
                            </>       
                        )}
                    </div>
                </div>
            </div>
            <div className='Main_App_rightColumn' id='rightColumn'>
                <img className='Main_App_rightColumn_img' src='/img/sign.svg'/>
                {themeF === 1 ? ( <>
                    <div id='lF' className='Main_App_rightColumn_block_gestureToText'>
                        { stopper === 0 ? (
                            <>
                                <div className='Main_App_rightColumn_block_gestureToText_obligation'>
                                    <img className='Main_App_rightColumn_block_gestureToText_obligation_img' src='http://127.0.0.1:8000/mask_feed'></img>
                                </div>
                            </>
                        ) :(<></>)}
                        { switcher === 0 ? ( <>
                            <button className='Main_App_rightColumn_block_gestureToText_btn' onClick={()=> {setRecord(1);}}>начать запись</button>
                            </>
                        ) : (<></>)}
                    </div>     
                    {switcher === 1 && stopper === 0 ? ( <>
                            <div className='record_stop' onClick={()=> {stopRecord(1)}}>
                                <div className='record_stop_svg'>
                                    <img className='record_stop_svg_circle' src='/img/Ellipse w.svg' ></img>
                                </div>
                            </div>
                            <div className='record_pause'>
                                <div className='record_pause_svg'>
                                    <img className='record_pause_svg_circle' src='/img/Ellipse r.svg'></img>
                                </div>
                            </div>
                            </>
                        ) : ( <></> )}
                    {stopper == 1 ?(<>
                            <div className='Main_App_rightColumn_block_gestureToText_result'>
                                <div className='Main_App_rightColumn_block_gestureToText_result_p'>
                                    <p >переведенный текст</p>
                                    {/* тут будет переведенный текст */}
                                </div>
                               
                                <button className='Main_App_rightColumn_block_textToGesture_form_btn'  onClick={() =>{stopRecord(0); setRecord(0);}}><img className='reload' src='/img/reload.svg'></img></button>
                            </div> 
                        </>
                    ) : (<></>)}
                    </>
                    
                ) : ( <></>)}
                {themeS === 1 ? ( <>       
                    {sender === 0 ? ( <>
                        <div id='lS' className='Main_App_rightColumn_block_textToGesture'>
                            <div className='Main_App_rightColumn_block_textToGesture_div_textarea'>
                                <form className='Main_App_rightColumn_block_textToGesture_form'>
                                    <textarea className='Main_App_rightColumn_block_textToGesture_form_textarea' placeholder='введите текст...' /> 
                                    <button className='Main_App_rightColumn_block_textToGesture_form_btn' onClick={(e) =>{e.preventDefault();sendForm(1);}}>Далее</button>
                                </form>
                            </div>
                        </div>
                        </>
                        ) : ( <>
                            <div className='Main_App_rightColumn_block_textToGesture_result'>
                                <div className='Main_App_rightColumn_block_gestureToText_result_div'>
                                    {/* тут будут жесты */}
                                </div>
                                <button className='Main_App_rightColumn_block_gestureToText_form_btn'  onClick={() =>{sendForm(0);}}><img className='reload' src='/img/reload.svg'></img></button>
                            </div> 
                            </>       
                        )}
                    </>
                ) : ( <></>)}
                {themeT === 1 ? ( <>
                    <div id='lT' className='Main_App_rightColumn_block_favorites'>
                        
                    </div>  
                    </>
                ) : ( <></>)}
                {themeFo === 1 ? ( <>
                    <div id='lFo' className='Main_App_rightColumn_block_articles'>

                    </div>       
                    </>
                ) : ( <></>)}
            </div>
        </div>
        
    );
}
export default Main_App;