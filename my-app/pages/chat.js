import styles from "../styles/Chat.module.css"
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import phota1 from '../src/images/ava1-bg.webp'
import phota2 from '../src/images/ava2-bg.webp'



export default function Chat (){


    return(
        <section background-color="#eee">
            <div class="container py-5">
                <div class="row d-flex justify-content-center">
                    <div class="col-md-8 col-lg-6 col-xl-4">
                        <div class="card" id="chat1">
                            <div class="card-header d-flex justify-content-between align-items-center p-3 bg-info text-white border-bottom-0 hellobitch">
                                <i class="fas fa-angle-left"></i>
                                <p class="mb-0 fw-bold">Live chat</p>
                                <i class="fas fa-times"></i>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="d-flex flex-row justify-content-start mb-4">
                            <Image src={phota1} alt="avatar 1" width={45} height={45} />
                            <div class="p-3 ms-3 dickcornish">
                            <p class="small mb-0">Hello and thank you for visiting MDBootstrap. Please click the video below.</p>
                            </div>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-end mb-4">
                            <div class="p-3 me-3 border dickcornish">
                            <p class="small mb-0">Thank you, I really like your product.</p>
                            </div>
                            <Image src={phota2} alt="avatar 1" width={45} height={45} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    )
}


