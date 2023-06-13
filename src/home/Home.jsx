import { useState } from 'react'
import SearchPanel from './SearchPanel'
import NewAccountButton from './NewAccountButton'
import NewAccountModal from './NewAccountModal'
import DataGrid, { Column, Sorting, Paging, Pager } from 'devextreme-react/data-grid'
import 'devextreme/dist/css/dx.common.css'
import 'devextreme/dist/css/dx.light.css'
import './Home.css'
import { useEffect } from 'react'

const pageSizes = [4, 8, 12, 16];

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const [modalIsOpen, setIsOpen] = useState(false);
  const [dataSource, setDataSource] = useState([])

  // mevcut verileri localstorage'dan getir
  const existingData = JSON.parse(localStorage.getItem('data')) || [];

  // modalı kapat
  const handleCloseModal = () => {
    setIsOpen(false)
  }

  // modal verilerini kaydet
  const saveModalData = (newData) => {
    // mevcut datayı ekle
    const updatedData = [...existingData, newData];
    // yeni verileri localstorage'a ekle
    localStorage.setItem('data', JSON.stringify(updatedData));

    setDataSource(updatedData);
    handleCloseModal();
  };

  useEffect(() => {
    // localStorage'dan verileri al
    setDataSource(existingData);
  }, []);

  // datagrid arama filtresi
  const filteredData = dataSource.filter((data) => {
    return (
      data.socialMediaName.toLowerCase().includes(searchValue.toLowerCase()) ||
      data.description.toLowerCase().includes(searchValue.toLowerCase())
    )
  })

  return (
    <section>
      <div className='options'>
        <SearchPanel setSearchValue={setSearchValue} />
        <NewAccountButton setIsOpen={setIsOpen} />
      </div>
      <div>
        {/* Datagrid başlangıç */}
        <DataGrid
          dataSource={filteredData}
          keyExpr="id"
          showBorders={false}
          // satır arkaplan rengi değişimi
          rowAlternationEnabled={true}
        >
          <Sorting mode="multiple" />
          <Column dataField="socialMediaLink" caption="Sosyal Medya Linki" />
          <Column dataField="socialMediaName" caption="Sosyal Medya Adı" />
          <Column dataField="description" caption="Açıklama" />
          <Paging defaultPageSize={4} />
          <Pager
            allowedPageSizes={pageSizes}
            showPageSizeSelector={true}
            visible={true}
          />
          
        </DataGrid>
      </div>
      <NewAccountModal
        setIsOpen={setIsOpen}
        modalIsOpen={modalIsOpen}
        saveModalData={saveModalData}
        dataSource={dataSource}
        handleCloseModal={handleCloseModal} />
    </section>
  )
}

export default Home