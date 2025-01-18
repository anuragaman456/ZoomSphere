import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from "@zegocloud/zego-uikit-prebuilt"

const RoomPage=()=>{
    const {roomId}=useParams();
    const myMeeting =async (element)=>{
        const appID=1135514298;
        const serverSecret="bee9262e66e879ec9571f9ac797ccd94";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomId,Date.now().toString(),"Anurag Aman");
        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container:element,
            // sharedLinks: [
            //     {
            //       name: "Copy Link",
            //       url:`http://localhost:3000/room/${roomId}`,
            //     }
            // ],
            scenario:{
                mode: ZegoUIKitPrebuilt.GroupCall,

            },
            showScreenSharingButton: true,
        });
    };
    return <div>
        <div ref={myMeeting}/>
    </div>;  
};
export default RoomPage;