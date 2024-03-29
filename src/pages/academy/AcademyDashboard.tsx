import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useMutation, useQuery } from '@tanstack/react-query'
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
import { patchToggleDashboardState } from '@/libs/api/dashboard/DashBoardApi'
import { getAllDashboards } from '@/libs/api/dashboard/DashBoardApi'
import { deleteDashboard } from '@/libs/api/dashboard/DashBoardApi'
import { GetAllDashBoardResponse } from '@/libs/api/dashboard/DashBoardType'
import useModal from '@/libs/hooks/useModal'
import useSidebar from '@/libs/hooks/useSidebar'
import useToastify from '@/libs/hooks/useToastify'
import { childAtom } from '@/libs/store/childInfoAtom'
import { getWeekday } from '@/libs/utils/weekParse'

const AcademyDashboard = () => {
  const [childInfo, setChildrenInfo] = useAtom(childAtom)
  const [dashboardData, setDashboardData] = useState<GetAllDashBoardResponse[]>(
    []
  )
  const [dashboardId, setDashboardId] = useState(0)
  const { setToast } = useToastify()
  const { open, close, Modal } = useModal()
  const navigate = useNavigate()
  const { toggleOpen } = useSidebar()

  const { data, isSuccess, isLoading } = useQuery({
    queryKey: ['children'],
    queryFn: () => getChildrenInfo()
  })

  const toggleMutation = useMutation({
    mutationFn: (dashboardId: number) => patchToggleDashboardState(dashboardId),
    onSuccess: (res) => {
      dashboardData.map((data) => {
        {
          if (data.dashboardId === res.dashboardId) {
            if (data.isActive) {
              setToast({
                comment: '학원을 그만둔 상태로 설정했어요',
                type: 'success'
              })
            } else {
              setToast({
                comment: '학원을 다니는 중으로 설정했어요',
                type: 'success'
              })
            }
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
    },
    onError: () => {
      setToast({
        comment: '현재 학원 일정과 겹치는 학원을 이미 다니고 있어요.',
        type: 'error'
      })
    }
  })
  const fetchAllDashboard = async () => {
    if (childInfo.childId) {
      const data = await getAllDashboards(childInfo.childId, false)
      setDashboardData(data)
    }
  }
  const deleteDashboardInfo = async (dashboardId: number) => {
    await deleteDashboard(dashboardId)
    const newData = dashboardData.filter(
      (data) => data.dashboardId !== dashboardId
    )
    setDashboardData([...newData])
  }

  const fetchToggleDashboard = async (dashboardId: number) => {
    toggleMutation.mutate(dashboardId)
  }

  useEffect(() => {
    if (childInfo.childId > 0) {
      setChildrenInfo(childInfo)
    } else {
      if (isSuccess) setChildrenInfo(data[0])
    }
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
        <div className={'flex flex-col items-center w-full h-full'}>
          {data && data?.length > 0 ? (
            <div className={'w-full h-full'}>
              <SelectMyChild data={data} />
              <Spacing size={20} />
              {dashboardData.length === 0 ? (
                <div
                  className={
                    'w-full text-center absolute top-96 font-nsk body-15 text-gray-600'
                  }>
                  {'아이가 다니는 학원 정보를 등록해주세요'}
                </div>
              ) : (
                <div
                  style={{ height: `calc(100vh - 240px)` }}
                  className={
                    'flex flex-col items-center w-full gap-[16px] px-[20px] overflow-y-scroll scrollbar-hide'
                  }>
                  {dashboardData.map((data, index) => {
                    return (
                      <ScheduleBox
                        key={index}
                        scheduleType={'toggle'}
                        mainTitle={data.academyInfo.academyName}
                        subElement={`매주 ${getWeekday(data.schedules)}요일 / ${
                          data.lessonInfo.curriculum
                        }`}
                        isRegister={data.isActive}
                        rightBottomElement={
                          <Label
                            variant={'medium'}
                            label={data.academyInfo.categories[0]}
                            icon={
                              AcademyTypeData[data.academyInfo.categories[0]]
                            }
                            color={data.isActive ? 'default' : 'disabled'}
                          />
                        }
                        handleEdit={(e) => {
                          e.stopPropagation()
                          navigate(`${data.dashboardId}/edit`, {
                            state: data.dashboardId
                          })
                        }}
                        handleToggle={(e) => {
                          e.stopPropagation()
                          fetchToggleDashboard(data.dashboardId)
                        }}
                        handleDelete={(e) => {
                          e.stopPropagation()
                          if (data.isActive) {
                            setToast({
                              comment:
                                '다니고 있는 학원은 삭제가 불가능해요. 먼저 미등록 상태로 변경해주세요.',
                              type: 'warning'
                            })
                          } else {
                            open()
                            setDashboardId(data.dashboardId)
                          }
                        }}
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
            </div>
          ) : (
            <div className={'absolute top-1/2 font-nsk body-15 text-gray-600'}>
              {'아이를 먼저 등록해주세요!'}
            </div>
          )}
        </div>
        <div
          className={'absolute right-[10px] bottom-[90px] cursor-pointer'}
          onClick={() =>
            navigate('register', {
              state: {
                childId: childInfo.childId
              }
            })
          }>
          <Icon icon={'Add'} classStyle={'h-[60px] w-[60px]'} />
        </div>
        <Modal
          children={
            <div
              className={
                'h-[200px] w-[370px] bg-white-0 p-[24px] px-[50px] flex flex-col items-center justify-between rounded-[15px]'
              }>
              <h2 className={'subHead-18 pb-3'}>{'학원 정보를 삭제할까요?'}</h2>
              <Button
                buttonType={'Plain-red'}
                label={'학원 정보를 삭제할게요'}
                onClick={() => {
                  deleteDashboardInfo(dashboardId)
                  close()
                  setToast({
                    comment: '삭제가 완료되었어요.',
                    type: 'success'
                  })
                }}
              />
              <Button
                buttonType={'Plain-blue'}
                label={'취소하기'}
                onClick={close}
              />
            </div>
          }
        />
      </div>
    </div>
  )
}

export default AcademyDashboard
