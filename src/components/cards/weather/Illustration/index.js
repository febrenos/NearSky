import React from 'react'
import * as Styles from './style.js'

export function IllustrationCard({type}){
    return(
        <Styles.IllustrationCard>
            {type === "sunny" && <Styles.SunSvg size={'100px'} x={'-50%'}/>}

            {type === "cloudySun" && <>
                <Styles.SunSvg size={'100px'} x={'-50%'}/>
                <Styles.CloudSvg size={'70px'} x={'-70px'} y={'40px'} animation={'slide'} opacity={7} delay={0.8}/>
                <Styles.CloudSvg size={'60px'} x={'20px'} y={'20px'} z={1} animation={'slide'} opacity={5}/>
            </>}
            
            {type === "moony" && <>
                <Styles.MoonSvg size={'100px'} x={'-50%'}/>
                <Styles.StarSvg size={'20px'} x={'20px'} y={'10px'} animation={'float'} delay={0.2}/>
                <Styles.StarSvg size={'30px'} x={'-70px'} y={'10px'} animation={'float'} delay={0.4}/>
                <Styles.StarSvg size={'25px'} x={'50px'} y={'30px'} animation={'float'} delay={0.8}/>
            </>}

            {type === "cloudyMoon" && <>
            <Styles.MoonSvg size={'100px'} x={'-50%'}/>
                <Styles.StarSvg size={'20px'} x={'20px'} y={'10px'} animation={'float'} delay={0.2}/>
                <Styles.StarSvg size={'30px'} x={'-70px'} y={'10px'} animation={'float'} delay={0.4}/>
                <Styles.StarSvg size={'25px'} x={'50px'} y={'30px'} animation={'float'} delay={0.8}/>

                <Styles.CloudSvg size={'70px'} x={'-70px'} y={'40px'} animation={'slide'} opacity={7} delay={0.8}/>
                <Styles.CloudSvg size={'60px'} x={'20px'} y={'20px'} z={1} animation={'slide'} opacity={5}/>
            </>}
            
            {type === "rainy" && <>
                <Styles.CloudSvg size={'70px'} x={'-80px'} y={'10px'} z={2} animation={'slide'} opacity={7} delay={0.8}/>
                <Styles.CloudSvg size={'60px'} x={'20px'} y={'0px'} z={5} animation={'slide'} opacity={5}/>
                <Styles.CloudSvg size={'100px'} x={'-50px'} y={'-20px'} z={2} animation={'slide'} opacity={9} delay={0.6}/>

                <Styles.WaterDropSvg size={'15px'} x={'-60px'} y={'80px'} z={2} animation={'floatSlide'} opacity={9} delay={0.7}/>
                <Styles.WaterDropSvg size={'20px'} x={'-40px'} y={'90px'} z={2} animation={'floatSlide'} opacity={9} delay={0.6}/>
                <Styles.WaterDropSvg size={'15px'} x={'-10px'} y={'75px'} z={2} animation={'floatSlide'} opacity={9} delay={0.2}/>
                <Styles.WaterDropSvg size={'15px'} x={'20px'} y={'85px'} z={2} animation={'floatSlide'} opacity={9} delay={0.9}/>
                <Styles.WaterDropSvg size={'20px'} x={'50px'} y={'70px'} z={2} animation={'floatSlide'} opacity={9} delay={0.5}/>

            </>}
            {type === "foggy" && <>
                <Styles.FogSvg size={'100px'} x={'-70px'} y={'-20px'} z={5} animation={'slide'} opacity={7} delay={0.2}/>
                <Styles.FogSvg size={'100px'} x={'-50px'} y={'-10px'} z={5} animation={'slide'} opacity={9} delay={0.8}/>
                <Styles.FogLargeSvg size={'170px'} x={'-70px'} y={'-35px'} z={2} animation={'slide'}/>
                <Styles.FogLargeSvg size={'170px'} x={'-100px'} y={'-20px'} z={1} animation={'slide'} opacity={7} delay={0.5}/>
                <Styles.FogSvg size={'70px'} x={'-70px'} y={'40px'} z={2} animation={'slide'} opacity={7} delay={0.4}/>

                <Styles.FogLargeSvg size={'140px'} x={'-40px'} y={'20px'} z={1} animation={'slide'} opacity={7} delay={0.5}/>
            </>}
            {type === "snow" && <>
                <Styles.CloudSvg size={'70px'} x={'-80px'} y={'10px'} z={2} animation={'slide'} opacity={7} delay={0.8}/>
                <Styles.CloudSvg size={'60px'} x={'20px'} y={'0px'} z={5} animation={'slide'} opacity={5}/>
                <Styles.CloudSvg size={'100px'} x={'-50px'} y={'-20px'} z={2} animation={'slide'} opacity={9} delay={0.6}/>

                <Styles.SnowflakeSvg size={'15px'} x={'-60px'} y={'80px'} z={2} animation={'floatSlide'} opacity={9} delay={0.7}/>
                <Styles.SnowflakeSvg size={'20px'} x={'-40px'} y={'90px'} z={2} animation={'floatSlide'} opacity={9} delay={0.6}/>
                <Styles.SnowflakeSvg size={'15px'} x={'-10px'} y={'75px'} z={2} animation={'floatSlide'} opacity={9} delay={0.2}/>
                <Styles.SnowflakeSvg size={'15px'} x={'20px'} y={'85px'} z={2} animation={'floatSlide'} opacity={9} delay={0.9}/>
                <Styles.SnowflakeSvg size={'20px'} x={'50px'} y={'70px'} z={2} animation={'floatSlide'} opacity={9} delay={0.5}/>
            </>}
            {type === "rainyMix" && <>
            <Styles.CloudSvg size={'70px'} x={'-80px'} y={'10px'} z={2} animation={'slide'} opacity={7} delay={0.8}/>
                <Styles.CloudSvg size={'60px'} x={'20px'} y={'0px'} z={5} animation={'slide'} opacity={5}/>
                <Styles.CloudSvg size={'100px'} x={'-50px'} y={'-20px'} z={2} animation={'slide'} opacity={9} delay={0.6}/>

                <Styles.IceSvg size={'15px'} x={'-60px'} y={'80px'} z={2} animation={'floatSlide'} opacity={9} delay={0.7}/>
                <Styles.SnowflakeSvg size={'20px'} x={'-40px'} y={'90px'} z={2} animation={'floatSlide'} opacity={9} delay={0.6}/>
                <Styles.WaterDropSvg size={'15px'} x={'-10px'} y={'75px'} z={2} animation={'floatSlide'} opacity={9} delay={0.2}/>
                <Styles.IceSvg size={'10px'} x={'20px'} y={'85px'} z={2} animation={'floatSlide'} opacity={9} delay={0.9}/>
                <Styles.SnowflakeSvg size={'20px'} x={'50px'} y={'70px'} z={2} animation={'floatSlide'} opacity={9} delay={0.5}/>
            </>}
            {type === "storm" && <>
                <Styles.CloudSvg size={'70px'} x={'-80px'} y={'10px'} z={2} animation={'slide'} opacity={7} delay={0.8}/>
                <Styles.CloudSvg size={'60px'} x={'20px'} y={'0px'} z={5} animation={'slide'} opacity={5}/>
                <Styles.CloudSvg size={'100px'} x={'-50px'} y={'-20px'} z={2} animation={'slide'} opacity={9} delay={0.6}/>

                <Styles.ThunderSvg size={'55px'} x={'-20px'} y={'50px'} z={1} animation={'slide'} opacity={9} delay={0.6}/>

                <Styles.WaterDropSvg size={'15px'} x={'-70px'} y={'80px'} z={2} animation={'floatSlide'} opacity={9} delay={0.7}/>
                <Styles.WaterDropSvg size={'20px'} x={'-50px'} y={'90px'} z={2} animation={'floatSlide'} opacity={9} delay={0.6}/>
                <Styles.WaterDropSvg size={'15px'} x={'-30px'} y={'75px'} z={2} animation={'floatSlide'} opacity={9} delay={0.2}/>
                <Styles.WaterDropSvg size={'15px'} x={'20px'} y={'85px'} z={2} animation={'floatSlide'} opacity={9} delay={0.9}/>
                <Styles.WaterDropSvg size={'20px'} x={'50px'} y={'70px'} z={2} animation={'floatSlide'} opacity={9} delay={0.5}/>
            </>}
        </Styles.IllustrationCard>
    )
}