import Modal from 'react-modal';
import { HiXMark } from 'react-icons/hi2'
import './NewAccountModal.css'

// Modal Style
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '13px',
        border: 'none',
        boxShadow: '1px 2px 5px 5px #ddd',
    },
};

const NewAccountModal = ({ modalIsOpen, saveModalData, dataSource, handleCloseModal }) => {

    const handleSaveModalData = (e) => {
        e.preventDefault()

        // verileri belirle
        const newData = {
            id: dataSource.length + 1,
            socialMediaLink: e.target.socialMediaLink.value,
            socialMediaName: e.target.socialMediaName.value,
            description: e.target.description.value,
        }

        // verileri kaydet
        saveModalData(newData)
    }

    return (
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={handleCloseModal}
            style={customStyles}
        >
            <HiXMark
                className='modal-close-button'
                onClick={handleCloseModal}
                size={20} />
            <div>
                <form className='modal-form' onSubmit={handleSaveModalData}>
                    <label>Sosyal Medya Linki</label>
                    <input required id='socialMediaLink' name='socialMediaLink' />
                    <label>Sosyal Medya Adı</label>
                    <input required id='socialMediaName' name='socialMediaName' />
                    <label>Açıklama</label>
                    <input required id='description' name='description' />
                    <div className='modal-form-buttons'>
                        <button type='button' className='modal-cancel-button' onClick={handleCloseModal}>Vazgeç</button>
                        <button type='submit' className='modal-save-button'>Kaydet</button>
                    </div>
                </form>
            </div>
        </Modal>
    )
}

export default NewAccountModal