import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Spacing from '@/components/common/spacing/Spacing'
import { getDetailDashboard } from '@/libs/api/dashboard/DashBoardApi'
const AcademyDetail = () => {
  const { state } = useLocation()
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['dashboard', state],
    queryFn: () => getDetailDashboard(state)
  })
  return (
    <>
      <Spacing size={100} />
      <h1 className={'headline-25'}>{data?.academyInfo.academyName}</h1>
    </>
  )
}
export default AcademyDetail
