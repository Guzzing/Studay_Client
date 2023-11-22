import { useState, useEffect } from 'react'
import { PAGE_CONTENT } from './constants'
import Header from '@/components/common/header/Header'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { getItem } from '@/libs/utils/storage'

const Onboarding = () => {
  const [currentPage, setCurrentPage] = useState(0) // 처음일 땐 어차피 0 => useEffect에서는 처음이 아닐때만 초기화를 새로 시켜주면 돼!
  useEffect(() => {
    if (!Array.isArray(getItem('onboarding'))) {
      const getMyChildren = async () => {
        const numbers = await getChildrenInfo()
        setCurrentPage(numbers.length + 2)
      }
      getMyChildren() // 이후에 들어왔을 때 띄워줄 페이지 index초기화!
    }
  }, [])
  return (
    <div>
      <Header headerType={'BackPush'} pageTitle={'onboarding'} />
    </div>
  )
}

export default Onboarding
