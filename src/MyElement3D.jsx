import { useFrame } from "@react-three/fiber"
import { useRef } from "react"

function MyElement3D() {

    const refMesh = useRef()

    //매 프레임이 렌더링되기 직전의 hook
    useFrame((state, delta) => { //state:    delta: 이전 프레임과 현재 프레임 사이의 시간(밀리초)
        refMesh.current.rotation.y += delta
    })

    return (
        <>
            <directionalLight position ={[1,1,1]}/>
            <mesh ref={refMesh} rotation-y={45*Math.PI/180}>
                <boxGeometry/>
                <meshStandardMaterial color = "#e67e22"/>
            </mesh>
        </>
    )
}

export default MyElement3D;