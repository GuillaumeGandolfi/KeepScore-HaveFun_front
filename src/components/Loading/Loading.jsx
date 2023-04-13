import loadercoin from '../../assets/loadercoin.jpg'
import './loading.css'


const Loading = () => {


    return(
        <div className='container'>
            <div className='coin' >
            <div className='face heads' ></div>
            <div className='face tails' ></div>
            </div>
            <p className='chargement'> Chargement... </p>
        </div>
    )
}

export default Loading