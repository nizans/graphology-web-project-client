import React from 'react'

const TableWrapper = () => {
    const page = useQueryParams().get('page');
    const [searchInput, setSearchInput] = useState('');
    const { isLoading, error, data } = useFetchData(
        API_REQUEST.GET_ALL,
        searchInput ? { find: searchInput, page } : { page }
      );
    return (
        <div>
            
        </div>
    )
}

export default TableWrapper
