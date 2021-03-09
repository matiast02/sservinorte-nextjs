
import { useState } from 'react';
import { CustomModal } from '../components/CustomModal/CustomModal'
import { FloatButton } from '../components/FloatButton/FloatButton'
import { HeroSection } from '../components/HeroSection/Hero'
import HomeLayout from '../components/HomeLayout'

export default function Index() {

  const [showModal, setShowModal] = useState(false);

  const openMoadal = () => {
    setShowModal(true);
    console.log("open modal");
  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <div>
      
      <HomeLayout>
        <HeroSection />
        <FloatButton handleClick={openMoadal}/>
        <CustomModal showModal={showModal} closeModal={closeModal} />
      </HomeLayout>

    
    </div>
  )
}
