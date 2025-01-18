import React,{useState,useCallback} from "react";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    const [value,setValue]=useState();
    const navigate=useNavigate();
    const handleJoinRoom=useCallback(()=>{
        navigate(`/room/${value}`)
    },[navigate,value])
    return (
        <div style={{ 
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center", 
            justifyContent: "center", 
            height: "100vh", 
            backgroundColor: "#87CEEB", // Sky color
        }}>
        <h1 style={{ 
                color: "white", 
                fontSize: "58px", // Increased size
                fontWeight: "bold", 
                marginTop: "0px" 
            }}>
                Welcome to ZoomSphere!
          </h1>
            <div style={{
                backgroundColor: "rgba(255, 255, 255, 0.9)", // Semi-transparent white background
                borderRadius: "10px",
                padding: "20px",
                boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
                textAlign: "center" // Center align text inside the rectangle
            }}>
                <h1 style={{ marginBottom: "10px" }}>ZoomSphere</h1>
                <input onChange={(e)=>setValue(e.target.value)}
                    type="text" 
                    placeholder="Enter Room Code" 
                    style={{ padding: "10px", width: "200px", borderRadius: "5px", border: "1px solid #ccc" }} 
                />
                <button onClick={handleJoinRoom}
                    style={{ 
                        backgroundColor: "black", 
                        color: "white", 
                        marginTop: "10px", 
                        padding: "10px 20px", 
                        border: "none", 
                        borderRadius: "5px",
                        cursor: "pointer"
                    }}
                >
                    Join
                </button>
            </div>
        </div>
    );
};

export default HomePage;
