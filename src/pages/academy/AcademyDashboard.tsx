import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import Loading from '@/components/Loading/Loading'
import SelectMyChild from '@/components/academy/SelectMyChlid'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import Label from '@/components/common/label/Label'
import ScheduleBox from '@/components/common/scheduleBox/ScheduleBox'
import Spacing from '@/components/common/spacing/Spacing'
import { AcademyTypeData } from '@/libs/api/academy/AcademyType'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { GetChildrenInfoResponse } from '@/libs/api/children/ChildrenType'
import { patchToggleDashboardState } from '@/libs/api/dashboard/DashBoardApi'
import { getAllDashboards } from '@/libs/api/dashboard/DashBoardApi'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
import { getWeekday } from '@/libs/utils/weekParse'
const AcademyDashboard = () => {
  const [child, setChild] = useState<GetChildrenInfoResponse>()
  const [dashboardData, setDashboardData] = useState<GetAllDashBoardResponse[]>(
    []
  )
  const navigate = useNavigate()
  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  const fetchAllDashboard = async () => {
    if (child) {
      const data = await getAllDashboards(child.childId)
      setDashboardData(data)
    }
  }
  const fetchToggleDashboard = async (dashboardId: number) => {
    const res = await patchToggleDashboardState(dashboardId)
    dashboardData.map((data) => {
      {
        if (data.dashboardId === res.dashboardId) {
          const newData = dashboardData.map((data) => {
            if (data.dashboardId === res.dashboardId) {
              data.isActive = !data.isActive
            }
            return data
          })
          setDashboardData([...newData])
        }
      }
    })
  }

  useEffect(() => {
    if (isSuccess) setChild(data[0])
  }, [data])

  useEffect(() => {
    fetchAllDashboard()
  }, [child])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={'h-full'}>
      <Spacing size={100} />
      <div className={'flex flex-col items-center relative w-full h-full'}>
        {data && data?.length > 0 ? (
          <div className={'w-full h-full'}>
            <SelectMyChild data={data} />
            <Spacing size={20} />
            {dashboardData.length === 0 ? (
              <div
                className={
                  'w-full text-center absolute top-72 font-nsk body-15 text-gray-600'
                }>
                {'학원을 먼저 생성해주세요'}
              </div>
            ) : (
              <div
                className={
                  'flex flex-col items-center relative w-full gap-[16px] px-[20px]'
                }>
                {dashboardData.map((data, index) => {
                  return (
                    <ScheduleBox
                      key={index}
                      scheduleType={'toggle'}
                      mainTitle={data.academyInfo.academyName}
                      subElement={`매주 ${getWeekday(data.schedules)}요일 / ${
                        data.lessonInfo.subject
                      }`}
                      isRegister={data.isActive}
                      rightBottomElement={
                        <Label
                          variant={'medium'}
                          label={
                            AcademyTypeData[data.academyInfo.areaOfExpertise]
                          }
                          color={data.isActive ? 'default' : 'disabled'}
                        />
                      }
                      handleToggle={() =>
                        fetchToggleDashboard(data.dashboardId)
                      }
                      onClick={() => {
                        navigate(`/academies/${data.dashboardId}`, {
                          state: data.dashboardId
                        })
                      }}
                    />
                  )
                })}
              </div>
            )}

            <div
              className={'absolute bottom-[190px] w-full flex justify-center'}>
              <Button
                buttonType={'Plain-blue'}
                label={`${child?.nickname} 교육비 보고서 보기`}
              />
            </div>
          </div>
        ) : (
          <div className={'absolute top-1/2 font-nsk body-15 text-gray-600'}>
            {'아이를 먼저 등록해주세요!'}
          </div>
        )}
      </div>
      <div
        className={'absolute right-[10px] bottom-[90px] cursor-pointer'}
        onClick={() => navigate('register')}>
        <Icon icon={'Add'} classStyle={'h-[60px] w-[60px]'} />
      </div>
    </div>
  )
}

export default AcademyDashboard
