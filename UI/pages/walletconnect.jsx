import styled from "styled-components";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Web3 from "web3";
import Web3Modal from "web3modal";


const Div = styled.div``;
const Button = styled.button``;

const kk = async() => {
    const web3Modal = new Web3Modal({
        cacheProvider: true, // optional
        providerOptions // required
      });
      
      const provider = await web3Modal.connect();
      
      const web3 = new Web3(provider);
      
}


const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider, // required
    options: {
      infuraId: "c40a93f4f04e40839e7deb96d323c498" // required
    }
  }
};


function walletconnect() {

    

      
    return (
        <Div>
            <Button onClick={kk}>walletconnect</Button>
            
        </Div>
    );
}

export default walletconnect;