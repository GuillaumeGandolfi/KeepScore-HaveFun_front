import { useSelector } from 'react-redux'
import ProgressBar from '../../ProgressBar/ProgressBar'
import pince from '../../../assets/profil/pince-transformed.png'


import './profil.css'

const Profil = () => {
    const {firstname, lastname, email, level, friends, familly, wallet, collection, quest} = useSelector(state => state.profil)


    return (

        <div className='profil-page-container'>
        <div className="profil-container">  
            <div className="profil-display-container">
                <div className="profil-header">
                    <div className="profil-picture">
                        <img src={pince} alt="pince" />
                    </div>
                    <p>Famille : {familly}</p>
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
                <div className="wallet-container">
                    <p>Porte-Feuille : {wallet}</p>
                    <ProgressBar progress={30}/>
                </div>
                <p>Collection : </p>
                <p>Quêtes : </p>
            </div>
            <div className="profil-modify-container" ></div>
        </div>
        </div>
    )
}

export default Profil