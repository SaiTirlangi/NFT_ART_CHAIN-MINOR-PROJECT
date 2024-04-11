/*         
                import { ethers } from 'ethers';
                import unti from "./Untitled-6.png"


                const Navigation = ({ account, setAccount }) => {
                    const connectHandler = async () => {
                        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
                        const account = ethers.utils.getAddress(accounts[0])
                        setAccount(account);
                    }

                    return (
                        <nav className='main-box' style={{padding:"0"}}>
                            <div className='nav__brand'>
                            { <a href='/' style={{
                                textDecoration:"none",
                                margin:"20px",
                                border:"2px solid",
                                padding:"5px 20px 5px 20px",
                                borderRadius:"30px"
                            }}><h3>Contact Us</h3></a> }
                                <img src={unti} alt="" className='imgNav'/>
                            </div>

                            {account ? (
                                <button
                                    type="button"
                                    className='nav__connect'
                                >
                                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                                </button>
                            ) : (
                                <button
                                    type="button"
                                    className='nav__connect'
                                    onClick={connectHandler}
                                >
                                    Connect
                                </button>
                            )}
                        </nav>
                    );
                }

                export default Navigation;
*/






import { ethers } from 'ethers';
import unti from "./Untitled-6.png"

const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }
    
    /*  2ND DRAFT */

    
    return (
        <nav>
            <div className='nav__brand'>
                <img src={unti} alt="" className='imgNav'/>
          
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;



/*   1ST DRAFT
const Navigation = ({ account, setAccount }) => {
    const connectHandler = async () => {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
    }

    return (
        <nav>
            <div className='nav__brand'>
                <h1>NFT Art Chain</h1>
            </div>

            {account ? (
                <button
                    type="button"
                    className='nav__connect'
                >
                    {account.slice(0, 6) + '...' + account.slice(38, 42)}
                </button>
            ) : (
                <button
                    type="button"
                    className='nav__connect'
                    onClick={connectHandler}
                >
                    Connect
                </button>
            )}
        </nav>
    );
}

export default Navigation;
*/