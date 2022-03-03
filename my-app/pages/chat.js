import styles from "../styles/Chat.module.scss"
import 'bootstrap/dist/css/bootstrap.css'
import Image from 'next/image'
import phota1 from '../src/images/ava1-bg.webp'
import phota2 from '../src/images/ava2-bg.webp'

import {  } from 'next/router'



export default function Chat (){


    return(
        <div>
            <button class="chatbox-open"> <i class="fa fa-comment fa-2x" aria-hidden="true"></i> </button>
            <button class="chatbox-close"> <i class="fa fa-close fa-2x" aria-hidden="true"></i> </button>
            <section class="chatbox-popup">
                <header class="chatbox-popup__header">
                <aside style="flex:3"> <i class="fa fa-user-circle fa-4x chatbox-popup__avatar" aria-hidden="true"></i> </aside>
		        <aside style="flex:8">
			        <h1>Sussanah Austin</h1> Agent (Online) </aside>
		        <aside style="flex:1">
			        <button class="chatbox-maximize"><i class="fa fa-window-maximize" aria-hidden="true"></i></button>
		        </aside>
                </header>
            </section>
        </div>
        
    )
}


