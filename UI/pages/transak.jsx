import styled from "styled-components";
import transakSDK from '@transak/transak-sdk'


const Div = styled.div``;
const Button = styled.button``;

const tr = () => {
    console.log("tr")
    let transak = new transakSDK({
        apiKey: '7813ac62-49d1-4d77-b718-1ad702591290',  // Your API Key
        environment: 'STAGING ', // STAGING/PRODUCTION
        hostURL: window.location.origin,
        widgetHeight: '625px',
        widgetWidth: '500px',
        // Examples of some of the customization parameters you can pass
          
    });

    transak.init();

    console.log(transak)

    transak.on(transak.ALL_EVENTS, (data) => {
		console.log(data)
});

// This will trigger when the user marks payment is made.
transak.on(transak.EVENTS.TRANSAK_ORDER_SUCCESSFUL, (orderData) => {
    console.log(orderData);
    transak.close();
});
    
}

function transak() {
    return (
        <>
            <Div>
                <Button onClick={() => tr()}>Transak</Button>
            </Div>

            <Div><a href="https://staging-global.transak.com/?apiKey=7813ac62-49d1-4d77-b718-1ad702591290">URL connect</a></Div>
        </>
        
    );
}

export default transak;