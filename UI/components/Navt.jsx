import styled from "styled-components";
import Link from 'next/link'

const Div = styled.div``;

const Button =  styled.button``;


const transak = () => {
    console.log("sbcjksbj");
}

function Navt() {

    return (
        <>
        <Div>
            Navbar
        </Div>
        <Div>
            <Link href="/">
                <a>home</a>
            </Link>
            
        </Div>
        <Div>
            <Button onClick={() => transak}>Transak Buy options</Button>
        </Div>


        <Div>
            <Button>Transak Buy options</Button>
        </Div>
        </>
        
    );
}

export default Navt;


