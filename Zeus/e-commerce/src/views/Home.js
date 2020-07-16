import React from 'react';
import PageNotFound from './PageNotFound';
import ItemsContent from './ItemContent';
import ItemCard from '../components/ItemCard';
import { Grid } from '../styles/Styles';
// import Modal from 'react-modal';

// const customStyles = {
//     content : {
//       top                   : '50%',
//       left                  : '50%',
//       right                 : 'auto',
//       bottom                : 'auto',
//       marginRight           : '-50%',
//       transform             : 'translate(-50%, -50%)'
//     }
// };

const HomePage = () => {
    // var subtitle;
    // const [modalIsOpen,setIsOpen] = React.useState(false);
    // function openModal() {
    //   setIsOpen(true);
    // }
    // function afterOpenModal() {
    //   // references are now sync'd and can be accessed.
    //   subtitle.style.color = '#f00';
    // }
    // function closeModal(){
    //   setIsOpen(false);
    // }

    if(ItemsContent.length === 0) return <PageNotFound/>
    
    return (
        <>
            <Grid>
                {ItemsContent.map((item, key) => (
                    <>
                        <ItemCard 
                            key={key}
                            name={item.name}
                            price={item.price}
                            description={item.description}
                            imageUrl={item.imageUrl}
                            id={item.id}
                        />
                        {/* <button onClick={openModal}>Open Modal</button> */}
                        {/* <Modal
                            isOpen={modalIsOpen}
                            onAfterOpen={afterOpenModal}
                            onRequestClose={closeModal}
                            style={customStyles}
                            contentLabel="Example Modal"
                        >
                            <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
                            <button onClick={closeModal}>close</button>
                            <div>I am a modal</div>
                            <form>
                                <input />
                                <button>tab navigation</button>
                                <button>stays</button>
                                <button>inside</button>
                                <button>the modal</button>
                            </form>
                        </Modal> */}
                    </>
                ))}
            </Grid>
        </>
    );
};

export default HomePage;