import Button from '@/components/common/button/Button'
import ListRow from '@/components/common/listRow/ListRow'
import Profile from '@/components/common/profile/Profile'
import Spacing from '@/components/common/spacing/Spacing'
const EditChildren = () => {
  return (
    <div className={'flex flex-col items-center relative h-full'}>
      <Spacing size={150} />
      <Profile imageSize={'XL'} canEdit={true} />
      <div className={'mt-[30px]'}></div>
      <ListRow
        leftElement={<div className={'font-nsk subHead-18'}>{'이름'}</div>}
        rightElement={<div className={'font-nsk body-18'}>{'김잼민'}</div>}
      />
      <ListRow
        leftElement={<div className={'font-nsk subHead-18'}>{'학년'}</div>}
        rightElement={
          <div className={'font-nsk body-18'}>{'중학교 3학년'}</div>
        }
      />
      <div
        className={'absolute bottom-3 flex flex-col gap-[13px] items-center'}
      >
        <Button
          buttonType={'Plain-blue'}
          width={'LW'}
          height={'SH'}
          label={'아이 정보 수정하기'}
        />
        <Button buttonType={'Plain-red'} width={'LW'} label={'아이 삭제하기'} />
      </div>
    </div>
  )
}

export default EditChildren
