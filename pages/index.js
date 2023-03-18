import Head from 'next/head'
import Layout from '@/components/Layout'
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { RiNotification3Line } from 'react-icons/ri';
import { FiVideo } from "react-icons/fi";
import { GoVerified } from "react-icons/go";
import { HiOutlineMagnifyingGlass } from 'react-icons/hi2';
import Profile from '@/components/profile';

export default function Home() {
  const States = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <Layout title='example site' >
      <div id='HomePage'>
        <div id='header'>
          <img src={States.profileImage} id='profImage'/>
          <div id='moneybox'>${States.money}</div>
          <div id='rightHeader'>
            <div id='notif'>
              <RiNotification3Line id='zangole'/><p>{States.notifNumber}</p>
            </div>
            <HiOutlineMagnifyingGlass id='searchIcon'/>
          </div>
        </div>
        
        <div id='followingBox'>
          <h1>Following</h1>
          <div id='followingList'>
            <h2 className='selected'>sports</h2>
            <h2>movies</h2>
            <h2>chess</h2>
            <h2>cinema</h2>
          </div>
        </div>

        <div id='profileBox'>
          {States.people.map((item)=>(
            <Profile userid={item.id} key={item.userid}></Profile>
          ))}
        </div>

        <div id='recomended'>
            <h1>Recomended</h1>
            <h2>More</h2>
        </div>
        <div id='goLive'>
            <img src={States.profileImage}/>
            <h1>{States.username} <GoVerified id='tic'/></h1>
            <h2>Go Live</h2>
            <FiVideo id='LiveIcon'/>
        </div>
        <div id='contact'>
          <p>Producted by <a>Mohammad Salehi</a></p>
        </div>
      </div>
    </Layout>
  )
}
