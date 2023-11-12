import Icon, { IconType } from '@/components/common/icon/Icon'
import {
  LabelVariant,
  LabelColorVariant,
  LabelTextColorVariant,
  LabelColorType
} from '@/components/common/label/LabelType'
import cn from '@/libs/utils/cn'

/**
 * @param variant Label의 타입을 결정합니다. 'medium | 'small'
 * @param label Label에 들어갈 value 값을 작성합니다.
 * @param icon 만약 Label에 Icon이 들어간다면 작성하고 싶은 Icon 이름을 입력해주세요.
 * @param color 'default' | 'selected' | 'disabled' 의 색상을 가지고 있습니다. (default: 'default')
 */

interface LabelProps {
  variant: LabelVariant
  label: string
  icon?: IconType
  color?: LabelColorType
  onClick?: () => void
}

const Label = ({
  variant,
  label = '라벨',
  icon,
  color = 'default',
  onClick
}: LabelProps) => {
  return (
    <label className={'w-[66px]'}>
      <button
        onClick={onClick}
        className={cn(
          LabelVariant({
            variant
          }),
          LabelColorVariant[color][variant],
          LabelTextColorVariant[color][variant]
        )}>
        {icon && (
          <Icon
            icon={icon}
            classStyle={LabelTextColorVariant[color][variant]}
          />
        )}
        <div>{label}</div>
      </button>
    </label>
  )
}

export default Label
