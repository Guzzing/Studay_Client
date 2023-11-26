import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { useAtom } from 'jotai'
import SettingPage from '../setting/SettingPage'
import Loading from '@/components/Loading/Loading'
import SelectMyChild from '@/components/academy/SelectMyChlid'
import Button from '@/components/common/button/Button'
import Icon from '@/components/common/icon/Icon'
import Label from '@/components/common/label/Label'
import ScheduleBox from '@/components/common/scheduleBox/ScheduleBox'
import Spacing from '@/components/common/spacing/Spacing'
import { AcademyTypeData } from '@/libs/api/academy/AcademyType'
import { getChildrenInfo } from '@/libs/api/children/ChildrenApi'
import { deleteDashboard } from '@/libs/api/dashboard/DashBoardApi'
import { patchToggleDashboardState } from '@/libs/api/dashboard/DashBoardApi'
import { getAllDashboards } from '@/libs/api/dashboard/DashBoardApi'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
import useSidebar from '@/libs/hooks/useSidebar'
import { childAtom } from '@/libs/store/childInfoAtom'
import { getWeekday } from '@/libs/utils/weekParse'

const AcademyDashboard = () => {
  const [childInfo, setChildrenInfo] = useAtom(childAtom)
  const [dashboardData, setDashboardData] = useState<GetAllDashBoardResponse[]>(
    []
  )
  const navigate = useNavigate()
  const { toggleOpen } = useSidebar()

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })
  const fetchAllDashboard = async () => {
    if (childInfo) {
      const data = await getAllDashboards(childInfo.childId)
      setDashboardData(data)
    }
  }
  const deleteDashboardInfo = async (dashboardId: number) => {
    const data = await deleteDashboard(dashboardId)
    console.log(dashboardId)
    const newData = dashboardData.filter(
      (data) => data.dashboardId !== dashboardId
    )
    setDashboardData([...newData])
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
    if (isSuccess) setChildrenInfo(data[0])
  }, [data])

  useEffect(() => {
    fetchAllDashboard()
  }, [childInfo])

  if (isLoading) {
    return <Loading />
  }

  return (
    <div className={'h-full relative overflow-hidden'}>
      <SettingPage isOpen={toggleOpen} />
      <div>
        <Spacing size={100} />
        <div
          className={
            'flex flex-col items-center w-full h-full overflow-scroll scrollbar-hide'
          }>
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
                    'flex flex-col items-center w-full gap-[16px] px-[20px]'
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
                        handleEdit={() => {
                          navigate(`${data.dashboardId}/edit`, {
                            state: data.dashboardId
                          })
                        }}
                        handleToggle={() =>
                          fetchToggleDashboard(data.dashboardId)
                        }
                        handleDelete={() => {
                          if (data.isActive) {
                            alert('다니고 있는 학원은 삭제가 불가능합니다!')
                          } else {
                            deleteDashboardInfo(data.dashboardId)
                            alert('삭제 완료!')
                          }
                        }}
                        onClick={(e) => {
                          if (e.target !== e.currentTarget) return
                          navigate(`/academies/${data.dashboardId}`, {
                            state: data.dashboardId
                          })
                        }}
                      />
                    )
                  })}
                  <Spacing size={250} />
                </div>
              )}
              <div
                className={'absolute bottom-[95px] w-full flex justify-center'}>
                <Button
                  buttonType={'Plain-blue'}
                  label={`${childInfo?.nickname} 교육비 보고서 보기`}
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
    </div>
  )
}

export default AcademyDashboard
