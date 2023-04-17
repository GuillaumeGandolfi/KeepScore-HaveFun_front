import { useSelector } from 'react-redux'
import  Header from '../Header/Header'
import  Footer  from '../Footer/Footer'
import pince from '../../assets/profil/pince-transformed.png'


import './profil.css'

const Profil = () => {
    const {firstname, lastname, email, level, friends, familly, wallet, collection, quest} = useSelector(state => state.profil)


    return (

        <div className='profil-page-container'>
        <Header />
        <div className="profil-container">  
            <div className="profil-display-container">
                <div className="profil-header">
                    <div className="profil-picture">
                        <img src={pince} alt="" />
                    </div>
                </div>
               
               <div className="profil profil-modifiable firstname">
               <p className='modifiable'>Prénom : {firstname}</p>
               <form className='hidden' >
                <input type="text" className='midify-profil-firstame' />
               </form>
               </div>

               <div className="profil profil-modifiable lastname">
                <p className='modifiable'>Nom : {lastname}</p>
                <form className='hidden' >
                    <input type="text" className='modify-profil-firstname' />
                </form>
               </div>

                <div className="profil email">
                <p>email : {email}</p>
                </div>
                <div className="profil level">
                <p>Level : {level}</p>
                </div>

                <div className='profil friends-container' >
                    {friends && friends.map(friend => {
                        <p>Amis :{friend} </p>
                    })}
                </div>

                <p>famille : {familly}</p>
                <p>Porte-Feuille : {wallet}</p>
                <p>Collection : </p>
                <p>Quêtes : </p>
            </div>
            <div className="profil-modify-container" ></div>
        </div>
        <Footer />
        </div>
    )
}

export default Profil