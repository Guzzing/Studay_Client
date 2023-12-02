import { useLocation } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/components/Loading/Loading'
import Spacing from '@/components/common/spacing/Spacing'
import { getDetailDashboard } from '@/libs/api/dashboard/DashBoardApi'
import AcademyDetailClass from '@/pages/academy/academyDetail/AcademyDetailClass'
import AcademyDetailHeader from '@/pages/academy/academyDetail/AcademyDetailHeader'
import AcademyDetailMemo from '@/pages/academy/academyDetail/AcademyDetailMemo'
import AcademyDetailPayment from '@/pages/academy/academyDetail/AcademyDetailPayment'
import AcademySetting from '@/pages/academy/academyDetail/AcademySetting'
const AcademyDetail = () => {
  const { state } = useLocation()
  const { data } = useQuery({
    queryKey: ['dashboard', state],
    queryFn: () => getDetailDashboard(state)
  })
  console.log(data)
  return (
    <div className={'w-full h-full overflow-scroll px-[25px] scrollbar-hide'}>
      {data === undefined ? (
        <Loading />
      ) : (
        <>
          <Spacing size={120} />
          <AcademyDetailHeader data={data} />
          <AcademyDetailClass data={data} />
          <AcademyDetailPayment data={data} />
          <AcademyDetailMemo memoData={data} />
          <AcademySetting data={data} />
          <Spacing size={30} />
        </>
      )}
    </div>
  )
}
export default AcademyDetail
