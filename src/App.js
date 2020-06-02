import React, {useState} from 'react';
import './App.css';
import mainImg from '../src/assets/images/main-img.png'
import userIcon from '../src/assets/images/userIcon.png'
import arrowIcon from '../src/assets/images/arrowIcon.png'
import closeArrowIcon from '../src/assets/images/closeArrowIcon.png'
import mainInfoImg from '../src/assets/images/mainInfoImg.png'

function App() {
    let [friendMode, editFriendsMode] = useState(false)
    let [activateCodeMode, editActivateCode] = useState(false)

    const openFriendBlock = () => {
        editFriendsMode(!friendMode)
    }

    const openActivateCodeBlock = () => {
        editActivateCode(!activateCodeMode)
    }

    return (
        <div className="App">
            <div className="wrap">
                <div className="header">
                    <div className="topHead">
                      <span className="title">
                        GENOTEK
                      </span>
                        <span className="lastSign">
                        неделю назад
                      </span>
                        <span className="userBlock">
                        <img src={userIcon} alt=""/>
                        <span className="private">
                          доступно только мне
                        </span>
                      </span>
                    </div>
                    <div className="mainText">
                        Подарочный набор для сдачи ДНК-теста доставлен
                    </div>
                    <div className="description">
                        Спасибо, что выбрали Genotek! На упаковке вы найдете подробную инструкцию как сдать
                        ДНК-тест.
                    </div>
                </div>
                <img className="mainImg" src={mainImg} alt=""/>
                <div className="tabsBlock">
                    {friendMode
                        ? <div className="openedFriendBlock openedBlock">
                            <div className="miniHead">
                              <span>
                                Как подарить набор другу, чтобы он создал свой личный кабинет?
                              </span>
                              <img onClick={openFriendBlock} src={closeArrowIcon} alt=""/>
                            </div>
                            <div className="openedBlockSplit"></div>
                            <div className="mainInfo">
                              <span>
                                Все просто! На подарочной упаковке ДНК-теста указан временный логин и пароль, который защищен стираемой полосой. <br/> <br/>
Человеку, который получил ДНК-тест в подарок, нужно ввести временный логин и пароль на странице входа в личный кабинет <div className="link" >lk.genotek.ru.</div> После этого ему будет предложено зарегистрироваться или указать данные уже зарегистрированного пользователя, ввести номер пробирки и вызвать курьера для доставки биоматериала в лабораторию.
Обратите внимание, что по умолчанию вы не получите доступ к результатам ДНК-теста того, кому вы подарили тест. Но вы можете попросить вашего близкого поделиться с вами результатами в его настройках профиля.
                              </span>
                              <img src={mainInfoImg} alt=""/>
                            </div>
                        </div>
                        : <div className="forFriend tab">
                            <span className="titleOfTab">
                              Как подарить набор другу, чтобы он создал свой личный кабинет?
                            </span>
                            <img onClick={openFriendBlock} src={arrowIcon} alt=""/>
                        </div>}
                    <div className="split"></div>

                    {activateCodeMode
                        ? <div className="openedActivateCodeBlock openedBlock">
                          <div className="miniHead">
                              <span>
                                Хочу активировать ДНК-тест в этом личном кабинете
                              </span>
                            <img onClick={openActivateCodeBlock} src={closeArrowIcon} alt=""/>
                          </div>
                          <div className="openedBlockSplit"></div>
                          <div className="mainInfo">
                            <span>
                              На подарочной упаковке ДНК-теста указан временный логин и пароль, который защищен стираемой полосой.
                              Пожалуйста, введите их ниже. После ввода временных данных, вы сможете ввести номер пробирки и вызвать курьера для доставки биоматериала в лабораторию.
                            </span>
                            <span className="activateForm">
                              <input type="text" placeholder="Логин"/>
                              <input type="text" placeholder="Пароль"/>
                              <button>Активировать ДНК-тест</button>
                            </span>
                            <img src={mainInfoImg} alt=""/>
                          </div>
                        </div>
                        : <div className="activateCode tab">
                            <span className="titleOfTab">
                              Хочу активировать ДНК-тест в этом личном кабинете
                            </span>
                            <img onClick={openActivateCodeBlock} src={arrowIcon} alt=""/>
                        </div>}
                </div>
            </div>
        </div>
    );
}

export default App;