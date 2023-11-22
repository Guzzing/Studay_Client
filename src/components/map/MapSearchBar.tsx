import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useNavigate } from 'react-router-dom'
import Icon from '@/components/common/icon/Icon.tsx'
import Input from '@/components/common/inputbox/input/Input.tsx'
import useSearch from '@/libs/hooks/useSearch.ts'

const MapSearchBar = () => {
  const navigate = useNavigate()
  const [setSearchValue, isLast, updatePage, searchList] = useSearch()

  const { ref, inView } = useInView({
    threshold: 1
  })

  const observer = (
    <div
      className={'observer'}
      ref={ref}
      style={{ width: '100%', height: '2px' }}
    />
  )

  useEffect(() => {
    if (isLast) {
      return
    } else if (inView) {
      updatePage()
    }
  }, [inView])

  return (
    <div className={'fixed z-10 flex flex-row ml-[10px] mt-[12px]'}>
      <div className={'w-[297px]'}>
        <Input
          inputType={'Search'}
          fullWidth={true}
          height={'53'}
          onChange={(e) => {
            setSearchValue(e.target.value)
          }}
        />
        <div
          className={`w-full bg-white-100 ${
            searchList.length > 0
              ? 'rounded-lg border-blue-350 border mb-4 mt-2'
              : ''
          }`}>
          {searchList.length > 0 && (
            <div className={'max-h-[300px] overflow-scroll scrollbar-hide'}>
              {searchList.map((data, index) => (
                <div
                  className={
                    'flex flex-row items-center cursor-pointer border-b-2 border-gray-100'
                  }
                  key={index}
                  onClick={() => {
                    console.log(data)
                  }}>
                  <Icon icon={'Marker'} classStyle={'ml-[20px] mr-[8px]'} />
                  <div
                    className={`flex flex-col items-center w-full cursor-pointer p-[10px]`}>
                    <div className={'body-15 w-full text-left'}>
                      {data.academyName}
                    </div>
                    <div
                      className={'caption-13 text-gray-600 w-full text-left'}>
                      {data.address}
                    </div>
                  </div>
                </div>
              ))}
              {observer}
            </div>
          )}
        </div>
      </div>
      <div
        className={
          'flex flex-col cursor-pointer bg-white-0 rounded-full w-[50px] h-[50px] justify-center items-center ml-[10px]'
        }
        onClick={() => navigate('/map/filter')}>
        <Icon icon={'Filter'}></Icon>
        <span className={'font-nsk body-10'}>{'필터'}</span>
      </div>
    </div>
  )
}

export default MapSearchBar
