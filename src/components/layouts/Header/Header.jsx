import React, { useState } from 'react'


/*========  C O M P O N E N T E S   /*========*/
import { TemplateImages } from '../../UI/TemplateImages/TemplateImages'
import logoImg from '../../../img/title.png'

export const Header = () => {
    return (
        <header>
                <TemplateImages imgClass='bannerImg' imgSrc={logoImg}/>
        </header>
    )
}
