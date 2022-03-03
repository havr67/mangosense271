import 'bootstrap/dist/css/bootstrap.css'
import '../styles/chat.module.css'
import stylessass from "../styles/Chat.module.scss"
import Image from 'next/image'
import phota1 from '../src/images/ava1-bg.webp'
import phota2 from '../src/images/ava2-bg.webp'

import {  } from 'next/router'



export default function Chat (){


    return(
        <div className="cechatscontainer">
            <button className="chatbox-open"> <i className="fa fa-comment fa-2x" aria-hidden="true"></i> </button>
            <button className="chatbox-close"> <i className="fa fa-close fa-2x" aria-hidden="true"></i> </button>
            <section className="chatbox-popup">
                <header className="chatbox-popup__header">
                <aside className="flex3"> <i className="fa fa-user-circle fa-4x chatbox-popup__avatar" aria-hidden="true"></i> </aside>
		        <aside className="flex8">
			        <h1>Sussanah Austin</h1> Agent (Online) </aside>
		        <aside className="flex1">
			        <button className="chatbox-maximize"><i className="fa fa-window-maximize" aria-hidden="true"></i></button>
		        </aside>
                </header>
            </section>
        </div>
        
    )
}


