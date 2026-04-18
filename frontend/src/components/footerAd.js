import { useEffect } from "react"
import { adSenseTestOnly } from "env";

export default function FooterAd(props) {
    // useEffect(() => {
    //     if (adSenseTestOnly) return

    //     const pushAd = () => {
    //         try {
    //             const adsbygoogle = window.adsbygoogle
    //             adsbygoogle.push({})
    //             console.log("loaded ad")
    //         } catch (e) {
    //             console.log(e)
    //             // console.error(e)
    //         }
    //     }

    //     let interval = setInterval(() => {
    //         // Check if Adsense script is loaded every 300ms
    //         if (window.adsbygoogle) {
    //             pushAd()
    //             // clear the interval once the ad is pushed so that function isn't called indefinitely
    //             clearInterval(interval)
    //         }
    //     }, 300)

    //     return () => {
    //         clearInterval(interval)
    //     }
    // }, [])

    return (
        <div style={{ width: "100%", }}>
            {/* {
                adSenseTestOnly ?
                    <div style={{ backgroundColor: "black", height: " 200px", width:"100%" }} /> :
                    <ins className="adsbygoogle"
                        style={{ display: "block" }}
                        data-ad-client="ca-pub-1593268153969923"
                        data-ad-slot="4472299029"
                        data-ad-format="auto"
                        data-full-width-responsive="true"></ins>
            } */}
        </div>
    )
}